(function(){
    "use strict";
    var app = document.querySelector('#app');
    app.apiUrl = "/api/";
    app.authenticated = !!localStorage.getItem('access_token');

})();