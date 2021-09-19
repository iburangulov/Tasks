<template>
    <div class="gui-confirm">
        <p>{{ text }}</p>
        <div class="gui-confirm-buttons">
            <guiButton text="Ok" @click="$emit('ok_click')"/>
            <guiButton text="Cancel" @click="$emit('cancel_click')"/>
        </div>

    </div>
</template>

<script>
import guiButton from "./guiButton";

export default {
    name: "guiConfirm",
    props: {
        text: String
    },
    components: {
        guiButton,
    }
}
</script>

<style scoped lang="sass">
.gui-confirm
    z-index: 100
    position: fixed
    left: 50%
    top: 30%
    transform: translate(-50%, -50%)
    background-color: #a9a9a9
    border: 5px solid white
    display: flex
    flex-direction: column
    width: 300px
    height: 180px
    align-items: center
    justify-content: space-around

    p
        background-color: white
        padding: 5px

    .gui-confirm-buttons
        display: flex

</style>
