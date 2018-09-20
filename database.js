const { MongoClient } = require('mongodb');
const { tesseract_results } = require('./tesseract_results');
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const db_name = 'tesseract_results';

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(db_name);

    clearDocuments(db, function () {
        insertDocuments(db, function () {
            findDocuments(db, function (results) {
                module.exports.data = results;
                client.close();
            });
        });
    });
});

const clearDocuments = function (db, callback) {
    const collection = db.collection('documents');

    collection.removeMany({}, function (err, result) {
        assert.equal(err, null);
        callback(result);
    });

};

const insertDocuments = function (db, callback) {
    const collection = db.collection('documents');

    collection.insertMany(tesseract_results,
        function (err, result) {
            assert.equal(err, null);
            console.log(`Inserted ${result.result.n} documents into the collection`);
            callback(result);
        });
};

const findDocuments = function (db, callback) {
    const collection = db.collection('documents');

    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};