mocha = ./node_modules/.bin/mocha
jshint = ./node_modules/.bin/jshint

test:
	@$(mocha) -t 6000

lint: ./lib/*.js
	@$(jshint) $^

clean:
	@rm -rf node_modules

.PHONY: test lint
