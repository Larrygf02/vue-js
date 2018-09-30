<template>
    <section>
        <h2>Contacto</h2>
        <button @click="volver()">Volver al home</button>
    </section>
</template>
<script>
export default {
    methods: {
        volver: function(){
            this.$router.push('/', () => console.log('Ruta cambiada')); //Retorna al home
        }
    }
}
</script>

