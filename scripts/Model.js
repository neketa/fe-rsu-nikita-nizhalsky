// Модель. Модель сохраняет элементы и уведомляет
// наблюдателей об изменениях.
function BookListModel(books) {
    this._books = books;
    this.bookAdded = new Event(this);
    this.bookEdited = new Event(this);
    this.searchTyped = new Event(this);
    this.tabChanged = new Event(this);
    this.pageChanged = new Event(this);
    this.bookRaitingSet = new Event(this);
    this.actionFired = new Event(this);
    this.currentTab = 'all';
    this.currentPage = 'browse';
    this.searchQuery = '';
    this.actions = [];
};
BookListModel.prototype = {
    getBooks: function () {
        var books = this._books;
        var result = [];
        var _this = this;

        return books
            .filter(function (book) {
                return book.title.toLowerCase().indexOf(_this.searchQuery) !== -1;
            })
            .filter(function (book) {
                if (_this.currentTab === 'popular') {
                    return book.raiting === 5;
                } else {
                    return book;
                }
            });
    },

    addBook: function (book) {
        book.id = this._books.length+1;
        book.raiting = 0;

        this._books.push(book);
        var message = `You added <b>${book.title}</b> by <b>${book.author}</b>.`;
        this.addAction({ message: message, time: new Date() });
        this.bookAdded.notify({ book: book });
    },

    editBook: function (editedBook) {
        var index = this._books.findIndex(function (book) {
            return book.id === editedBook.id;
        })

        this._books[index] = editedBook;
        var message = `You edited <b>${editedBook.title}</b> by <b>${editedBook.author}</b>.`;
        this.addAction({ message: message, time: new Date() });
        this.bookEdited.notify({ book: editedBook });
    },

    getBookById: function (id) {
        var books = this.getBooks();
        var result;

        books.forEach(function (book) {
            if (book.id === id) {
                return result = book;
            }
        });

        return result;
    },

    setBookRaiting: function (bookId, raiting) {
        var book = this.getBookById(bookId);
        book.raiting = raiting;
        var message = `You raited <b>${book.title}</b> with <b>${book.raiting}</b> stars.`;
        this.addAction({ message: message, time: new Date() });
        this.bookRaitingSet.notify({ newRaiting: raiting });
    },

    setCurrentTab: function (newTab) {
        this.currentTab = newTab;
        var message = `You navigated to <b>${newTab}</b> books.`;
        this.addAction({ message: message, time: new Date() });
        this.tabChanged.notify({ newTab: newTab });
    },

    setCurrentPage: function (page) {
        this.currentPage = page || 'browse';
        this.pageChanged.notify({ page: page });
    },

    getCurrentTab: function () {
        return this.currentTab;
    },

    getCurrentPage: function() {
        return this.currentPage;
    },

    setSearchQuery: function (searchQuery) {
        this.searchQuery = searchQuery;
        var message = `You searched for <b>${searchQuery}</b>.`;
        this.addAction({ message: message, time: new Date() });
        this.searchTyped.notify({ searchQuery: searchQuery });
    },

    getActions: function () {
        return this.actions;
    },

    addAction: function (action) {
        this.actions.push(action);
        this.actionFired.notify(this.actions);
    }
};