
from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


class OfficeBearerSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="DrName", read_only=True)
    designation = serializers.CharField(
        source="Designation",
        read_only=True,
    )
    term = serializers.CharField(source="Term", read_only=True)
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = [
            "id",
            "name",
            "designation",
            "term",
            "profile_image",
        ]

    def get_profile_image(self, obj):
        request = self.context.get("request")

        if not obj.ProfileImage:
            return None

        image_url = obj.ProfileImage.url

        if request:
            return request.build_absolute_uri(image_url)

        return image_url
