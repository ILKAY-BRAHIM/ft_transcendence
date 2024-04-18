FROM python:3.7-stretch

ENV PYTHONUNBUFFERED 1

# RUN mkdir /app
RUN apt update && apt install vim -y
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000

ENTRYPOINT  ["/app/django.sh"]