// Представление. Представление отображает модель и предоставляет
// элементы пользовательского интерфейса. Контроллер используется для обработки взаимодействий пользователя.
function BookListView(model, elements) {
    this._model = model;
    this._elements = elements;
    this.searchBooksInputChanged = new Event(this);
    this.bookRaitingSet = new Event(this);
    this.tabClicked = new Event(this);
    this.mainNavItemClicked = new Event(this);
    this.addBookFromSubmited = new Event(this);
    this.editBookFromSubmited = new Event(this);
    this.movedToHistory = new Event(this);
    var _this = this;

    this._model.bookAdded.attach(function () {
        _this.rebuildContent();
    });

    this._model.bookEdited.attach(function () {
        _this.rebuildContent();
    });

    this._model.searchTyped.attach(function () {
        _this.rebuildContent();
    });

    this._model.bookRaitingSet.attach(function () {
        _this.rebuildContent();
    });

    this._model.tabChanged.attach(function () {
        _this.rebuildContent();
    });
    this._model.pageChanged.attach(function () {
        _this.rebuildContent();
    });
    this._model.actionFired.attach(function () {
        _this.rebuildNotifications();
    });
    this._elements.searchBooksInput.keyup(function () {
        _this.searchBooksInputChanged.notify(searchBooksInput.value);
    });
    this._elements.navTabs.on('click', 'li', function () {
        _this.tabClicked.notify(this.dataset.value);
    });
    this._elements.mainNav.on('click', 'li', function () {
        _this.mainNavItemClicked.notify(this.dataset.value);
    })
    this._elements.addBookButton.on('click', function () {
        _this.rebuildPopup();
    });
};
BookListView.prototype = {
    show: function () {
        var _this = this;
        this.rebuildContent();
        setInterval(function() {
            _this.rebuildNotifications();
        }, 1000);
    },

    openAddBookPopup: function (book) {
        this.rebuildAddEditBookPopup(book);
    },

    closeAddBookPopup: function () {
        this._elements.addBookPopup.html('');
    },

    rebuildContent: function () {
        var currentPage = this._model.getCurrentPage();
        this._elements.mainContent.html('');
        this.rebuildNavTabs();
        this.rebuildMainNav();

        switch (currentPage) {
            case 'browse':
                this.rebuildList();
                break;
            case 'history':
                this.rebuildHistory();
                break;
        }
    },

    rebuildHistory: function () {
        var actions = this._model.getActions().concat().reverse();

        var mainContent = this._elements.mainContent;
        var history = $('<ul class="history-block"></ul>');

        actions.forEach(function (action) {
            var li = $('<li class="history-event"></li>');
            li.html('<p>' + action.time.toLocaleString("en-GB") + '</p><p>' + action.message + '</p>');
            history.append(li);
        });

        mainContent.append(history);

    },

    rebuildList: function () {
        var books = this._model.getBooks();
        var mainContent = this._elements.mainContent;
        var bookList = $('<ul class="content-books"></ul>');
        var _this = this;

        books.forEach(function (book) {
            var li = $('<li class="book"></li>');
            var bookCover = $('<div></div>');
            bookCover.addClass(`book-cover${book.coverId ? book.coverId : ''}`);
            bookCover.click(function () {
                _this.rebuildPopup(book);
            });
            li.append(bookCover,
                '<h2 class="book-name">' + book.title + '</h2>' +
                '<p class="book-author">' + book.author + '</p>',
                createRaitingPanel(book));

            bookList.append(li);
        });

        mainContent.append(bookList);

        function createRaitingPanel(book) {
            var raitingPanel = $('<p class="book-raiting"></p>');

            for (var i = 1; i < 6; i++) {
                var star = $('<i class="star fa" data-order="' + i + '"></i>');
                star.click(function () {
                    _this.bookRaitingSet.notify({ id: book.id, raiting: parseFloat(this.dataset.order) });
                });
                if (book.raiting < i) {
                    $(star).addClass('fa-star-o');
                } else {
                    $(star).addClass('fa-star');
                }
                raitingPanel.append(star);
            }

            return raitingPanel;
        }
    },

    rebuildMainNav: function () {
        var mainNav = this._elements.mainNav;
        var currentPage = this._model.getCurrentPage();

        mainNav.children('li').each(function () {
            if (this.dataset.value === currentPage) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active');
            }
        });
    },

    rebuildNavTabs: function () {
        var navTabs = this._elements.navTabs;
        var currentTab = this._model.getCurrentTab();

        navTabs.children('li').each(function () {
            if (this.dataset.value === currentTab) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active');
            }
        });
    },

    rebuildNotifications: function () {
        var notifications = this._elements.notifications;
        var _this = this;
        notifications.empty();
        var actionsTemp = this._model.getActions();
        var actions = actionsTemp.slice(actionsTemp.length - 2, actionsTemp.length).reverse();


        actions.forEach(function (action) {
            notifications.append(createNotification(action));
        });

        function createNotification(action) {
            var notification = $('<li class="notification"><p class="notification-content"></p></li>');


            notification.find('.notification-content').append(`<p class="notification-message">${action.message}</p>`);
            notification.find('.notification-content').append(`<p class="notification-time">${_this.rebuildTime(action.time)}</p>`);

            return notification;
        }
    },

    rebuildTime: function (time) {
        var currentTime = new Date();
        var spendTime = new Date(currentTime - time);
        var days = dateDiffInDays(time, currentTime);
        var mins = spendTime.getMinutes();
        var secs = spendTime.getSeconds();

        function dateDiffInDays(a, b) {
            var _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
            var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        }

        return days && days + ' days ago' || mins && mins + ' minutes ago' || secs && secs + ' seconds ago' || 'Just now';
    },

    rebuildPopup: function (book) {
        var _this = this;
        var popup = `
        <header class="add-book-capture">
            <h1 class="add-book-name">Add a new book</h1>
        </header>
        <form name="addBookForm" class="add-book-fields">
            <p class="add-book-field-name">Book Title</p>
            <input required id="bookTitleInput" name="bookTitleInput" class="add-book-field-input" type="text">
            <p class="add-book-field-name">Book Author</p>
            <input required id="bookAuthorInput" name="bookAuthorInput" class="add-book-field-input" type="text">
            <footer class="add-book-buttons">
                <button type="submit">Add</button>
                <button type="button" name="closePopup">Close</button>
            </footer>
        </form>
        `;

        this._elements.addBookPopup.html('');
        this._elements.addBookPopup.append($(popup));

        if (book) {
            $('#bookTitleInput').val(book.title);
            $('#bookAuthorInput').val(book.author);
            $('.add-book-name').text(`Edit: ${book.title}`);
        }

        $(document.forms.addBookForm).on('submit', function (event) {
            event.preventDefault();
            var newBook = {
                id: book && book.id || -1,
                title: $('#bookTitleInput').val(),
                author: $('#bookAuthorInput').val(),
                raiting: book && book.raiting || 0,
                coverId: book && book.coverId || 0,
            };

            if (newBook.id > 0) {
                _this.editBookFromSubmited.notify(newBook);
            } else {
                _this.addBookFromSubmited.notify(newBook);
            }
            _this._elements.addBookPopup.html('');
        });
        $(document.forms.addBookForm.closePopup).on('click', function () {
            _this._elements.addBookPopup.html('');
        });
    },
};