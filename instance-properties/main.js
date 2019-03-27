//Se debe usar la convencion '$' antes de la variable
//para evitar confusiones con los metodos o propiedades
Vue.prototype.$appName = 'My app'

Vue.prototype.name = 'My name'

Vue.prototype.$http = axios

var instance = new Vue({
    data: {
        name: 'Other name'
    },
    beforeCreate: function() {
        console.log(this.$appName);
        console.log(this.name);
    }
})

var otherInstance = new Vue({
    beforeCreate: function() {
        console.log(`${this.$appName} desde otra instancia`);
    }
})

var userApp = new Vue({
    el: '#app',
    data: {
        users: []
    },
    created() {
        var vm = this
        this.$http
            .get('https://jsonplaceholder.typicode.com/users')
            .then(function(response) {
                vm.users = response.data
            })
    }
})