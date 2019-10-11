all: template clean build

template:
	npm run tmpl

clean:
	rm -f -r ./docs
	mkdir ./docs

build:
	npm run build
