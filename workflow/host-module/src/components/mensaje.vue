<template>
    <div>
        <p v-text="mensaje"></p>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            mensaje: 'Hola que talco'
        }
    }
}
</script>
<!--El scoped hace que tus estilos solo sean en tu componente,
 se maneja como un shadow DOM -->
<style scoped>
    div p{
        color: red;
    }
</style>
