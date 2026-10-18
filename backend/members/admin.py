
from django.contrib import admin
from .models import Member


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        "DrName",
        "AGNo",
        "Designation",
        "IsOfficeBearer",
        "DOJ",
        "EndDate",
    )

    list_filter = (
        "IsOfficeBearer",
        "Branch",
        "Status",
    )

    search_fields = (
        "DrName",
        "AGNo",
        "MEMBERSHIP_NO",
        "Designation",
    )

    list_editable = ("IsOfficeBearer",)
    ordering = ("DrName",)
