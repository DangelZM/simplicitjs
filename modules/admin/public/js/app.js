(function(){
    var bodyEl = document.body || document.getElementsByTagName('body')[0];
    var titleEl = document.querySelector("#title");

    page.base("/admin");

    page('/', function(){
        bodyEl.setAttribute('data-route', 'dashboard');
        titleEl.innerHTML = 'Dashboard';
    });

    page('/about', function(){
        bodyEl.setAttribute('data-route', 'about');
        titleEl.innerHTML = 'About';
    });

    page('*', function(){
        bodyEl.setAttribute('data-route', 'not_found');
        titleEl.innerHTML = 'Not found!';
    });

    page({
        hashbang: false
    });


})();