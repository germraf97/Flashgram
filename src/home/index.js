var page = require('page');
//var empty = require('empty-element');


page('/', function (ctx, next) {
    var main = document.getElementById('main-container');
    main.innerHTML = 'Estás en el home <a href="/signup">Go signup</a>'
});

page();