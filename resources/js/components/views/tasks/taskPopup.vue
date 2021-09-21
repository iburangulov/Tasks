<template>
    <div :id="'task-modal' + this._uid" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>{{ task.title }}</h4>
            <p>{{ task.description }}</p>
        </div>
        <div class="modal-footer">
            <uiButton @click="close_modal" :size="2">Close</uiButton>
        </div>
    </div>
</template>

<script>
import uiButton from "../../gui/uiButton";

export default {
    name: "taskPopup",
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            modal: null,
        }
    },
    mounted() {
        this.modal = M.Modal.init(document.getElementById('task-modal' + this._uid), {
            onCloseEnd: () => this.$emit('close_task_modal'),
        });
        this.modal.open();
    },
    methods: {
        close_modal: function () {
            this.modal.close();
        },
    },
    components: {
        uiButton,
    },
}
</script>

<style scoped>

</style>
