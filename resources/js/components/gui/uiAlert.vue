<template>
    <div :id="id" class="modal">
        <div class="modal-content">
            <h4>{{ header }}</h4>
            <p>{{ text }}</p>
        </div>
        <div class="modal-footer">
            <a href="#" class="modal-close waves-effect waves-green btn-flat" @click="$emit('close')">Close</a>
        </div>
    </div>
</template>

<script>
import uiButton from "./uiButton";

export default {
    name: "uiAlert",
    props: {
        id: {
          type: String,
          required: true,
        },
        header: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        }
    },
    mounted() {
        M.Modal.init(document.getElementById(this.id));
    },
    components: {
        uiButton,
    }
}
</script>

<style scoped lang="sass">
.modal
    width: 400px

</style>
