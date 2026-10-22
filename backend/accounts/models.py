
from django.conf import settings
from django.db import models


class AdminProfile(models.Model):

    class Role(models.TextChoices):
        STATE_BOARD_ADMIN = "STATE_BOARD_ADMIN", "State Board Admin"
        FSS_ADMIN = "FSS_ADMIN", "Family Security Scheme Admin"
        FBS_ADMIN = "FBS_ADMIN", "Family Benefit Scheme Admin"
        PPWS_ADMIN = "PPWS_ADMIN", "Professional Protection Admin"
        SUPER_ADMIN = "SUPER_ADMIN", "Super Admin"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="admin_profile",
    )

    role = models.CharField(
        max_length=30,
        choices=Role.choices,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.get_role_display()}"
