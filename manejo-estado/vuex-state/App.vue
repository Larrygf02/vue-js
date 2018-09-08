<template>
    <contador :cantidad="cantidad" @aumentar="cantidad++" @reducir="cantidad--">
    </contador>
</template>

<script>
import Contador from './components/contador.vue';
export default {
    components: {Contador},
    data() {
        return {
            cantidad: 0,
        }
    }
}
</script>
