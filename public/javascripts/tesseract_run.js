// Note: the images constant is obtained from images_from_filesystem.js

let tesseract_results = [];

images.forEach((url, index) => {
    Tesseract.recognize(url)
        .then(function (result) {
            let obj = {};
            obj.url = url;
            obj.tesseract_text = result.text;

            tesseract_results.push(obj);

            console.log(`Item ${index + 1} done: ${url} added to the array`);

        })
        .progress(function (result) {
            console.log(`${result['status']}`);
        })
});