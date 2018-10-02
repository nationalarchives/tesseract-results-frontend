# Tesseract results viewer

## Development machine configuration 

Install dependencies with `npm install` then:

* Start MongoDB with `mongod --dbpath=/data`
* Kick off a development server with  `npm start`
* View the app in a browser at [localhost:3000](http://localhost:3000)

## Adding a new image for processing

* add an image to `public/images/`
* Run `npm start`
* View the app in a browser at [localhost:3000](http://localhost:3000)\
* Open the browser console and wait for all images to be processed (You'll be able to tell this when the number of images processed is equal to the number of images in the `public/images` directory - see the messages which say "_Item 1 done: http://localhost:3000/images/test.jpg added to the array_")
* Once they're all done, copy the browser console output from `JSON.stringify(tesseract_results)` into `tesseract_results.js`