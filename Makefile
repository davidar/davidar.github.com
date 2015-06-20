all:
	yui-compressor _includes/cover.css > _includes/cover.min.css
	yui-compressor _includes/quotes.js > _includes/quotes.min.js

serve: all
	bundle exec jekyll serve
