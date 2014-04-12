SHELL := /bin/bash
CSS = ./public/css
JS = ./public/js

hint:
	@jshint js/app.js --extra-ext .json

# cssmin 0.1.4
min_css:
	# Vendor libraries
	cat \
		./css/bootstrap.min.css \
		./css/font-awesome.min.css \
		./css/app.css \
		| cssmin --wrap 1000 > ./css/app.min.css

# UglifyJS v2
min_js:
	# @echo -n ';' > ascii-table.min.js; 
	uglifyjs \
		./js/jquery-1.11.0-min.js \
		./js/imagesloaded.3.1.4.min.js \
		./js/masonry.3.1.5.min.js \
		./js/app.js \
	-o ./js/app.min.js -c -m;

min:
	make min_js && make min_css

.PHONY: hint min_js min_css min
