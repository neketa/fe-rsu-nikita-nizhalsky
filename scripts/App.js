$(function () {

    requestBooks(function (books) {

        var model = new BookListModel(books),
            view = new BookListView(model, {
                'addBookButton': $('#addBookButton'),
                'searchBooksInput': $('#searchBooksInput'),
                'navTabs': $('#navTabs'),
                'notifications': $('#notifications'),
                'addBookPopup': $('#addBookPopup'),
                'mainNav': $('#mainNav'),
                'mainContent': $('#mainContent'),
            }),
            controller = new BookListController(model, view);

        view.show();
    })
});

function requestBooks(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/api');

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) { // DONE

            if (xhr.status === 200) {

                cb(JSON.parse(xhr.responseText))
            }
        }
    };

    xhr.send();
}