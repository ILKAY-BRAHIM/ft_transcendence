FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY ./conf/requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/