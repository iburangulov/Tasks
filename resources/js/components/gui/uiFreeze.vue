<template>
    <div class="freeze">
        <div class="row progress">
            <div class="indeterminate"></div>
        </div>
    </div>
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
    background-color: rgba(255, 255, 255, 0.5)
    display: flex
    align-items: center

    .progress
        width: 40%

</style>
