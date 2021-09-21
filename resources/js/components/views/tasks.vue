<template>
    <div>
        <h1>Tasks</h1>
        <div v-if="tasks_loading">Loading...</div>

        <uiAlert
            id="tasks-error-modal"
            @close="close_error_alert"
            header="Error"
            text="Something wrong, try again"
        />
    </div>
</template>

<script>
import uiAlert from "../gui/uiAlert";

export default {
    name: "tasks",
    data: function () {
        return {
            tasks_loading: false
        }
    },
    mounted() {
        this.tasks_loading = true;
        this.$store.dispatch('load_tasks').then(result => {
            this.tasks_loading = false;
            if (!result) {
                M.Modal.getInstance(document.getElementById('tasks-error-modal')).open();
            }
        });
    },
    methods: {
        close_error_alert: function () {

        },
    },
    computed: {},
    components: {
        uiAlert,
    }
}
</script>

<style scoped lang="sass">

</style>
