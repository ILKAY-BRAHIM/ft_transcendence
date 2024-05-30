#!/bin/bash

docker compose run django django-admin startproject "name_of_project" .  
docker compose run django python manage.py startapp beckend61
docker compose run django python manage.py createsuperuser
docker compose run django python manage.py migrate   
docker compose run django python manage.py makemigrations
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_id




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