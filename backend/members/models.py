
from django.db import models


class Member(models.Model):
    AGNo = models.CharField(max_length=50, unique=True)
    DOJ = models.DateField(null=True, blank=True)

    # New fields
    EndDate = models.DateField(null=True, blank=True)
    ProfileImage = models.ImageField(
        upload_to="member_profiles/",
        null=True,
        blank=True,
    )
    Designation = models.CharField(
        max_length=150,
        blank=True,
    )
    Term = models.CharField(
        max_length=20,
        default="2024–2026",
        blank=True,
    )
    IsOfficeBearer = models.BooleanField(default=False)

    DrName = models.CharField(max_length=200)
    DrAdd = models.TextField(blank=True)
    DrCity = models.CharField(max_length=100, blank=True)
    Branch = models.CharField(max_length=100, blank=True)
    LifeMem = models.CharField(max_length=50, blank=True)
    DrCell = models.CharField(max_length=20, blank=True)
    Dremail = models.EmailField(max_length=254, blank=True)
    DOB = models.DateField(null=True, blank=True)
    SchemeType = models.CharField(max_length=100, blank=True)
    Status = models.CharField(max_length=50, blank=True)
    MEMBERSHIP_NO = models.CharField(
        max_length=100,
        blank=True,
        db_index=True,
    )

    def __str__(self):
        return f"{self.DrName} ({self.AGNo})"
