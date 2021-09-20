<template>
    <a class="waves-effect waves-light btn-large" :class="{ disabled: disabled }" @click="$emit('click')">
        <slot/>
    </a>
</template>

<script>
export default {
    name: "uiButton",
    props: {
        disabled: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>

</style>
