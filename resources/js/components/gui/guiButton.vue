<template>
    <button @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "guiButton"
}
</script>

<style scoped lang="sass">
button
    padding: 10px 20px
    border: 0
    display: block
    margin-right: 5px
    max-width: 10em

    &:active
        background-color: blue
</style>
