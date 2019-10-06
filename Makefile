all: clean build move

clean:
	rm -r ./docs

build:
	npm run build

move:
	mv ./public ./docs
