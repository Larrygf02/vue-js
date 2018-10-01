<template>
  <section>
    <h1>Rutas con vue Router</h1>
    <router-link to="/" exact tag="li">
      <a>Home</a>
    </router-link>
    <router-link to="/contacto" exact tag="li">
      <a>Contacto</a>
    </router-link> 
    <router-link to="/usuario/77" exact tag="li">
      <a>Usuario</a>
    </router-link>
    <router-link to="/usuario/99" exact tag="li">
      <a>Usuario</a>
    </router-link>
    <hr>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  
}
</script>


<style>
  .router-link-active a{
    color: red;
  }
</style>


