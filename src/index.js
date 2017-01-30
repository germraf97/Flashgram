/*var numerosM1 = [1,2,3].map(n => n + 1);
alert(numerosM1);*/

var page = require('page');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
    main.innerHTML = 'Estás en el home <a href="/signup">Go signup</a>'
});

page('/signup', function (ctx, next) {
    main.innerHTML = 'Estás en el Signup <a href="/">Go home</a>'
});

page();