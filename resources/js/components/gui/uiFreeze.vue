<template>
    <div class="freeze"></div>
</template>

<script>
export default {
    name: "uiFreeze"
}
</script>

<style scoped lang="sass">
.freeze
    z-index: 1000000
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: white
    opacity: .5
</style>
