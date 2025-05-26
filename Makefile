.PHONY: serve build gh-deploy docker-build docker-build-only docker-serve docker-build-image

PIP_INSTALL = pip install -r requirements.txt

# Local workflow
serve:
	$(PIP_INSTALL)
	mkdocs serve

build:
	$(PIP_INSTALL)
	mkdocs build

gh-deploy:
	$(PIP_INSTALL)
	mkdocs gh-deploy --force

# Docker workflow
docker-build docker-build-image: docker-build-only

docker-build-only:
	docker build -t mkdocs-site .

docker-serve: docker-build
	docker run --rm -it -p 8000:8000 -v $(PWD):/docs mkdocs-site serve -a 0.0.0.0:8000

docker-run:
	docker run --rm -it -v $(PWD):/docs mkdocs-site

docker-build-site: docker-build
	docker run --rm -v $(PWD):/docs mkdocs-site build

docker-gh-deploy: docker-build
	docker run --rm -v $(PWD):/docs mkdocs-site gh-deploy --force