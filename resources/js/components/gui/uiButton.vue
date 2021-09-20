<template>
    <a class="waves-effect waves-light btn-large" @click="$emit('click')">
        <slot/>
    </a>
</template>

<script>
export default {
    name: "uiButton",
}
</script>

<style scoped>

</style>
