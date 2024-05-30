# from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated 
from django.contrib.auth import get_user_model
from .srializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


# def create(self, request, *args, **kwargs):
#         serialized = self.get_serializer(data=request.data)
#         if not serialized.is_valid():
#             return Response({'status': 'Bad request', 'data': serialized.errors}, status=status.HTTP_400_BAD_REQUEST)
#         self.perform_create(serialized)
#         return Response({'status': 'Created', 'data': serialized.data}, status=status.HTTP_201_CREATED)
    
        