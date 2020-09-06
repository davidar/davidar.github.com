all:
	yui-compressor _includes/bootstrap/site/docs/4.5/examples/cover/cover.css > _includes/cover.min.css
	yui-compressor _includes/quotes.js > _includes/quotes.min.js

build: all
	bundle exec jekyll build

serve: all
	bundle exec jekyll serve
