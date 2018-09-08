<!--<template>
    <div>
        <section v-if="tipo == 'section'">
            <slot></slot>
        </section>
        <aside v-if="tipo == 'aside'">
            <slot></slot>
        </aside>
    </div>
</template>-->
<script>

export default {
    props: ['tipo'],
    render(createElement){
        return createElement(
            this.tipo,
            this.$slots.default,
        )
    }
}
</script>
<style>

</style>
