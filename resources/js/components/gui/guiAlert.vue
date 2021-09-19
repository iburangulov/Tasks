<template>
    <div class="alert">
        <p class="alert-text">{{ text }}</p>
        <guiButton text="Close" @click="$emit('close_click')"/>
    </div>
</template>

<script>
import guiButton from "./guiButton";

export default {
    name: "guiAlert",
    props: {
        text: String,
    },
    components: {
        guiButton
    }
}
</script>

<style scoped lang="sass">
.alert
    z-index: 10000
    position: fixed
    left: 50%
    top: 30%
    transform: translate(-50%, -50%)
    background-color: #a9a9a9
    border: 5px solid white

    .alert-text
        background-color: white
        padding: 5px
        margin: 5px
</style>
