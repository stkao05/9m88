all: clean build move

clean:
	rm -f -r ./docs

build:
	npm run build

move:
	mv ./public ./docs
