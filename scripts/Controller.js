// Контроллер. Контроллер реагирует на действия пользователя и
// вызывает изменения в модели.
function BookListController(model, view) {
    this._model = model;
    this._view = view;
    var _this = this;
    this._view.searchBooksInputChanged.attach(function (context, value) {
        _this.searchBooks(value);
    });

    this._view.addBookFromSubmited.attach(function (context, value) {
        _this.addBook(value);
    });

    this._view.editBookFromSubmited.attach(function (context, value) {
        _this.editBook(value);
    });

    this._view.bookRaitingSet.attach(function (context, book) {
        _this.setBookRaiting(book.id, book.raiting);
    });

    this._view.tabClicked.attach(function (context, value) {
        _this.changeTab(value);
    });
    this._view.mainNavItemClicked.attach(function (context, value) {
        _this.changePage(value);
    });
};
BookListController.prototype = {
    addBook: function (book) {
        this._model.addBook(book);
    },

    editBook: function (book) {
        this._model.editBook(book);
    },

    changeTab: function (newTab) {
        this._model.setCurrentTab(newTab);
    },

    searchBooks: function (str) {
        this._model.setSearchQuery(str.toLowerCase());
    },

    setBookRaiting: function (id, raiting) {
        this._model.setBookRaiting(id, raiting);
    },

    changePage: function (page) {
        this._model.setCurrentPage(page);
    }
}