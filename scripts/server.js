var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

    console.log(request.url, request.method);

    if (request.url.startsWith('/api')) {

        handleApiRequest(request, response);

    } else {

        handleStaticRequest(request, response);
    }

}).listen(3001);

var _id = 1;

function uuid() {
    return _id++;
}

var books = [
    {
        id: uuid(),
        title: 'Jewels of Nizam',
        author: 'by Geeta Devi',
        raiting: 2,
        coverId: 1
    },
    {
        id: uuid(),
        title: 'Cakes & Bakes',
        author: 'by Sanjeev Kapoor',
        raiting: 3,
        coverId: 2
    },
    {
        id: uuid(),
        title: 'Jamie`s Kitchen',
        author: 'by Jamie oliver',
        raiting: 5,
        coverId: 3
    },
    {
        id: uuid(),
        title: 'Inexpensive Family Meals',
        author: 'by Simon Holst',
        raiting: 0,
        coverId: 4
    }
];

function handleAddEditBook(request, response) {

    var body = '';

    request.on('data', function (data) {
        body += data;
    });

    request.on('end', function () {
        var book = JSON.parse(body);

        if (!book.id) { // new book

            book.id = uuid();
            book.raiting = 0;

            books.push(book);

        } else { // editing

            var index = books.findIndex(function (b) {
                return b.id === book.id;
            });

            books[index] = book;
        }


        response.end(JSON.stringify(book));
    });
}

function handleApiRequest(request, response) {

    response.contentType = 'application/json';

    switch (request.method) {

        case 'GET':
            response.end(JSON.stringify(books));
            break;
        case 'POST':
        case 'PUT':
            handleAddEditBook(request, response)
            break;
    }
}

function handleStaticRequest(request, response) {

    var absPath = path.join(__dirname, '..', request.url);

    fs.stat(absPath, function (err, stat) {

        err && handleError(err);

        fs.readFile(absPath, function (err, data) {

            err && handleError(err);

            response.end(data);
        });

    });

    function handleError(error) {
        response.statusCode = 404;
        response.end(error.message);
    }
}