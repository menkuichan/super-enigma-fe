SHELL = /bin/bash
WORKDIR := $(PWD)
IMAGE_URI = menkuican/super-enigma-fe
SERVICE_NAME = super-enigma-fe
IMAGE_VERSION = develop
SERVICE_PORT = 8888

build-image:
	@ echo "---> Building service Docker image ..."
	@ docker build -t $(IMAGE_URI):$(IMAGE_VERSION) $(WORKDIR)
.PHONY: build-image

run-service:
	@ echo "---> Running service Docker container ..."
	@ docker run -p $(SERVICE_PORT):$(SERVICE_PORT) -d --rm --name $(SERVICE_NAME) $(IMAGE_URI):$(IMAGE_VERSION)
.PHONY: run-service

stop-service:
	@ echo "---> Stopping service Docker container ..."
	@ docker stop $(SERVICE_NAME)
.PHONY: stop-service

image-publish:
	@ echo "---> Publishing Docker image ..."
	@ docker push $(IMAGE_URI):$(IMAGE_VERSION)
.PHONY: image-publish
