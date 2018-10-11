<template>
  <section>
    <button @click="cambiar">Cambiar auth</button>
    <hr>
    <transition>
      <router-view></router-view>
    </transition>
  </section>
  
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods: mapMutations(['cambiar'])
}
</script>
<style>
  .aparecer-enter{
    opacity:0,
  }
  
</style>


