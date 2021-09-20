<template>
    <div>
        alert
    </div>

</template>

<script>
import uiButton from "./uiButton";

export default {
    name: "uiAlert",
    components: {
        uiButton,
    }
}
</script>

<style scoped lang="sass">
.ui-alert
    position: fixed
    z-index: 1000
    top: 40%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    display: flex
    justify-content: center
    align-items: center


</style>
