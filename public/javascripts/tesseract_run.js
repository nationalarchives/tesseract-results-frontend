// Note: the images constant is obtained from images_from_filesystem.js

images.forEach(url => {
    Tesseract.recognize(url)
        .then(function (result) {
            console.log(result.text);
        })
        .progress(function (result) {
            console.log(`${result['status']}`);
        })
});