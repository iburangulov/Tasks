<template>
    <a class="waves-effect waves-light"
       :class="{ disabled: disabled, 'btn-small': size === 1, 'btn': size === 2, 'btn-large': size === 3 }"
       @click="$emit('click')">
        <slot/>
    </a>
</template>

<script>
export default {
    name: "uiButton",
    data() {
        return {
            style: 'btn-large'
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            default: 3,
        },
    },
}
</script>

<style scoped>

</style>
