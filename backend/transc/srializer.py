from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()  
        fields = ('__all__')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user
    # def is_valid(self, raise_exception=False):
    #     valid = super(UserSerializer, self).is_valid()
    #     username_valid = True
    #     username = self.initial_data.get('username')
    #     if get_user_model().objects.filter(username=username).exists():
    #         self._errors['username'] = ['This username already exists']
    #         username_valid = False
    #     if raise_exception and not (valid and username_valid):
    #         raise serializers.ValidationError(self.errors)
    #     return valid and username_valid
    # def perform_create(self, serializer):
    #     instance = serializer.save()
    #     instance.set_password(serializer.initial_data.get('password'))
    #     instance.save()