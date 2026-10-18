
from django.urls import path
from .views import  office_bearers_list

urlpatterns = [
    # path("", member_list, name="member-list"),
    path(
        "office-bearers/",
        office_bearers_list,
        name="office-bearer-list",
    ),
]
