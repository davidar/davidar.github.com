all:
	yui-compressor _includes/quotes.js > _includes/quotes.min.js

build: all
	bundle exec jekyll build

serve: all
	bundle exec jekyll serve
