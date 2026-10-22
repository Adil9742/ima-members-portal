
from django.urls import path
from .views import login_view, me_view

urlpatterns = [
    path("login/", login_view, name="admin-login"),
    path("me/", me_view, name="current-admin"),
]
