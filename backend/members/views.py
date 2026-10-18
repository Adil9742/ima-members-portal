
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Member
from .serializers import OfficeBearerSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def office_bearers_list(request):
    """
    GET: Retrieve all office bearers.
    Optional search: ?search=president
    """
    office_bearers = Member.objects.filter(IsOfficeBearer=True)

    # Search by doctor name or designation
    search = request.query_params.get('search', '').strip()

    if search:
        office_bearers = office_bearers.filter(
            Q(DrName__icontains=search) |
            Q(Designation__icontains=search)
        )

    office_bearers = office_bearers.order_by('DrName')

    serializer = OfficeBearerSerializer(
        office_bearers,
        many=True,
        context={'request': request}
    )

    return Response(serializer.data)
