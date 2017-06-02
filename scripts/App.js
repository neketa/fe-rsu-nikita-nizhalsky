var books = [
    {
        id: 1,
        title: 'Jewels of Nizam',
        author: 'by Geeta Devi',
        raiting: 2,
        coverId: 1
    },
    {
        id: 2,
        title: 'Cakes & Bakes',
        author: 'by Sanjeev Kapoor',
        raiting: 3,
        coverId: 2
    },
    {
        id: 3,
        title: 'Jamie`s Kitchen',
        author: 'by Jamie oliver',
        raiting: 5,
        coverId: 3
    },
    {
        id: 4,
        title: 'Inexpensive Family Meals',
        author: 'by Simon Holst',
        raiting: 0,
        coverId: 4
    },
];

$(function () {
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
});