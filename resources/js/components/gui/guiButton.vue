<template>
    <button @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "guiButton",
    props: {
        text: String
    }
}
</script>

<style scoped lang="sass">
button
    border: 0
    display: block
    margin: 5px
    width: 100px
    height: 40px

    &:active
        background-color: dimgray
</style>
