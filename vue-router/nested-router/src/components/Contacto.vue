<template>
    <section>
        <h2>Dondé encontrarme</h2>
        <p>Lo que sea </p>
        <!-- <h5>{{ $route.params.newsletter }}</h5> -->
        <h5>{{ newsletter }}</h5>
        <!-- <template v-if="$route.params.newsletter === 'true'"> -->
       <!--  <template v-if="newsletter === 'true'"> -->
        <template v-if="newsletter">
            <form action="">
                <h3>News Letter</h3>
                <pre>Identificador : {{ numero }}</pre>
                <label for="correo">Correo</label>
                <input type="email" placeholder="Tu correo" id="correo">
            </form>
        </template>    
    </section>
</template>
<script>
export default {
    props: ['newsletter'],
    data() {
        return {
            numero: null,
        }
    },
    beforeRouteEnter: ((to, from, next) => {
        console.info('Antes de entrar')
        setTimeout(() => {
            next((vm) => {
                vm.numero = Math.floor(Math.random() * 1000);
                console.log(vm.numero);
            })
        }, 2000)
    })
}
</script>

