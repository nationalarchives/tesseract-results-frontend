let urls = [
    'http://localhost:3000/images/test.jpg'
];


urls.forEach(url => {
    Tesseract.recognize(url)
        .then(function (result) {
            console.log(result.text);
        })
        .progress(function (result) {
            console.log(`${result['status']}`);
        })
});