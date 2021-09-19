<template>
    <div class="task">
        <div v-if="disabled || loading">Loading...</div>
        <div v-else>
            <h1>Task</h1>
            {{ task }}
            <guiButton text="Select"/>
            <guiButton text="Edit"/>
            <guiButton text="Delete" @click="delete_task_click"/>
        </div>
        <div v-if="show_delete_alert">
            <guiConfirm text="Delete task?" @ok_click="ok_delete_confirm_click"
                        @cancel_click="cancel_delete_confirm_click"/>
            <div class="delete-task-bg" @click="cancel_delete_confirm_click"/>
        </div>
    </div>
</template>

<script>
import guiButton from "../../gui/guiButton";
import guiConfirm from "../../gui/guiConfirm";

export default {
    name: "task",
    data() {
        return {
            show_delete_alert: false,
            loading: false,
        }
    },
    methods: {
        delete_task_click: function () {
            this.show_delete_alert = true;
        },
        ok_delete_confirm_click: function () {
            this.show_delete_alert = false;
            this.loading = true;
            this.$store.dispatch('delete_task', this.task)
            .then(() => this.loading = false);
        },
        cancel_delete_confirm_click: function () {
            this.show_delete_alert = false;
        }
    },
    props: {
        task: Object,
        disabled: Boolean
    },
    components: {
        guiButton,
        guiConfirm,
    }
}
</script>

<style scoped lang="sass">
.task
    width: 300px
    height: 300px
    background-color: #a9a9a9
    margin: 5px
    cursor: pointer

.delete-task-bg
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    cursor: default
    z-index: 99
</style>
