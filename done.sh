#!/bin/bash

docker compose run django django-admin startproject tranc .  
docker compose run django python manage.py startapp beckend61




# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'postgres',
#         'USER' : 'postgres',
#         'PASSWORD' : 'postgres',
#         'HOST' : 'database',
#         'PORT' : '5432',
#     }
# }