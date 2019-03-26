

var directives = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola',
        attributename: "href",
        url: 'https://vuejs.org/v2/guide/syntax.html#Dynamic-Arguments'
    },
    created: function() {
        console.log(`%c esan-backoffice `,
                    'background: #DD0332; padding:1px; border-radius: 3px; color: #fff'
         )
    }

});