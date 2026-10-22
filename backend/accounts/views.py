
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.tokens import RefreshToken
from .models import AdminProfile


User = get_user_model()

# Maps each React login page to its required Django role.
PORTAL_ROLES = {
    "state-board": "STATE_BOARD_ADMIN",
    "fss": "FSS_ADMIN",
    "fbs": "FBS_ADMIN",
    "ppws": "PPWS_ADMIN",
}


@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get("username", "").strip()
    password = request.data.get("password", "")
    portal = request.data.get("portal", "").strip().lower()

    if not username or not password or not portal:
        return Response(
            {"detail": "Username, password, and portal are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    expected_role = PORTAL_ROLES.get(portal)

    if not expected_role:
        return Response(
            {"detail": "Invalid portal."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    user = authenticate(request, username=username, password=password)

    if user is None or not user.is_active:
        return Response(
            {"detail": "Invalid username or password."},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    # Every portal account must have an assigned AdminProfile.
    try:
        profile = user.admin_profile
    except AdminProfile.DoesNotExist:
        return Response(
            {"detail": "No admin role is assigned to this account."},
            status=status.HTTP_403_FORBIDDEN,
        )

    # A super admin may access any of the four portals.
    if profile.role not in [expected_role, "SUPER_ADMIN"]:
        return Response(
            {"detail": "You are not authorized to access this portal."},
            status=status.HTTP_403_FORBIDDEN,
        )

    refresh = RefreshToken.for_user(user)

    return Response(
        {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.get_username(),
            "role": profile.role,
            "portal": portal,
        },
        status=status.HTTP_200_OK,
    )


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me_view(request):
    try:
        profile = request.user.admin_profile
    except AdminProfile.DoesNotExist:
        return Response(
            {"detail": "No admin role is assigned to this account."},
            status=status.HTTP_403_FORBIDDEN,
        )

    return Response(
        {
            "username": request.user.get_username(),
            "role": profile.role,
        },
        status=status.HTTP_200_OK,
    )
