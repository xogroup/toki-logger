NAME=xolocalvendors/chronos-logger
VERSION=latest

test:
	@node_modules/.bin/lab -c test/

debug-test:
	@node_modules/.bin/lab

clean:
	@rm -f npm-shrinkwrap.json
	@rm -rf ./node_modules
	npm install --production
	npm prune
	shonkwrap

install:
	@rm -rf ./node_modules
	npm install

docker-build:
	@docker build -t $(NAME) -f docker/Dockerfile .

run: docker-build
	@docker-compose -f docker/docker-compose.yml run --rm pluginDev

run-debug-test: docker-build
	@docker-compose -f docker/docker-compose.yml run --service-ports --rm pluginDebug

jenkins-run: docker-build
	docker-compose -f docker/docker-compose.yml run --rm pluginJenkins

jenkins-build:
	make jenkins-cover && \
	gulp build

jenkins-cover:
	node_modules/.bin/lab -c test/
lint:
	node_modules/.bin/eslint --fix src/ test/

.PHONY: test debug-test clean install docker-build run run-debug-test jenkins-run jenkins-build jenkins-cover lint
