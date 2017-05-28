var books = [
    {
        id: 1,
        name: 'Jewels of Nizam',
        author: 'by Geeta Devi',
        raiting: 2
    },
    {
        id: 2,
        name: 'Cakes & Bakes',
        author: 'by Sanjeev Kapoor',
        raiting: 3
    },
    {
        id: 3,
        name: 'Jamie`s Kitchen',
        author: 'by Jamie oliver',
        raiting: 5
    },
    {
        id: 4,
        name: 'Inexpensive Family Meals',
        author: 'by Simon Holst',
        raiting: 0
    },
];
var searchInput = document.getElementById('searchInput');
var booksNodes = document.getElementsByClassName('book');
var bookListNode = document.getElementById('bookList');

searchInput.addEventListener('keyup', function () {
    searchBooks(booksNodes, this.value);
});

function searchBooks(bookNodes, str) {
    for (var i = 0; i < booksNodes.length; i++) {
        var title = booksNodes[i].getElementsByClassName("book-name")[0].innerHTML;
        title = title.toLowerCase();

        if (title.indexOf(str) === -1) {
            booksNodes[i].hidden = true;
        } else {
            booksNodes[i].hidden = false;
        };
    }
};


function changeBookRating(event) {
    var raiting = parseFloat(this.dataset.raiting);
    var userRaiting = parseFloat(event.target.dataset.order);
    this.dataset.raiting = userRaiting;
    var stars = this.getElementsByClassName('star');

    for (var i = 0; i < stars.length; i++) {
        stars[i].classList.remove('fa-star-half-o');
        if (stars[i].dataset.order <= userRaiting) {
            stars[i].className += ' fa-star';
            stars[i].classList.remove('fa-star-o');
        } else {
            stars[i].className += ' fa-star-o';
            stars[i].classList.remove('fa-star');
        }
    }
}

function createBookNode(book) {
    var li = document.createElement('li');
    var name = document.createElement('h2');
    var author = document.createElement('p');
    var raiting = document.createElement('div');
    var cover = document.createElement('div');

    li.className += ' book';
    name.className += ' book-name';
    name.textContent = book.name;
    author.className += ' book-author';
    author.textContent = book.author;
    raiting.className += ' book-raiting';
    cover.className += ' book-cover' + book.id;

    raiting.dataset.raiting = book.raiting;
    raiting.addEventListener('click', changeBookRating);

    for (var i = 1; i < 6; i++) {
        var star = document.createElement('i');

        star.dataset.order = i;
        star.className += ' star fa';
        if (book.raiting < i) {
            star.className += ' fa-star-o';
        } else {
            star.className += ' fa-star';
        }
        raiting.appendChild(star);
    }

    li.appendChild(cover);
    li.appendChild(name);
    li.appendChild(author);
    li.appendChild(raiting);

    return li;
}

function initBooks(books) {
    books.forEach(function (book) {
        bookListNode.appendChild(createBookNode(book));
    });
}

initBooks(books);