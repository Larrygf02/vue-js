<!-- Hot reload mantiene el estado en cada interaccion
  y en cada tiempo
-->
<template>
  <main>
      <mensaje></mensaje>
      <div>
       <p>Probando el scoped</p>
      </div>
  </main>
</template>

<script>
import mensaje from './components/mensaje.vue';
export default {
  components: {mensaje},
}
</script>

<style>
</style>
