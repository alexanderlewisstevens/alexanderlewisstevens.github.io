serve:
	pip install -r requirements.txt
	mkdocs serve

build:
	pip install -r requirements.txt
	mkdocs build

gh-deploy:
	pip install -r requirements.txt
	mkdocs gh-deploy --force
