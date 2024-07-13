#!/bin/bash

docker compose run "name of service" django-admin startproject "name_of_project" .  # create project
docker compose run "name of service" python manage.py startapp "name of app" # create app
docker compose run django python manage.py createsuperuser  # create super user
docker compose run "name of service" python manage.py migrate   # apply migrations
docker compose run "name of service" python manage.py makemigrations # create migrations
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_id # get ip address of container
docker exec -it "name of contaner" psql -U "user of database" -l # list all databases




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