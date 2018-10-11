<template>
  <section>
    <button @click="cambiar">Cambiar auth</button>
    <hr>
    <transition name="aparecer" appear>
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
    opacity: 0;
  }
  .aparecer-enter-active{
    transition: opacity 1s;
  }
  .aparecer-leave-to{
    opacity: 0;
  }
  .aparecer-leave-to-active{
    transition: opacity 1s;
  }
</style>


