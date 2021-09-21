<template>
    <div class="container">
        <div class="row">
            <taskCard v-for="task in tasks" :key="task.id" :task="task"/>
        </div>
        <div v-if="tasks_loading">Loading...</div>
        <uiAlert
            id="tasks-error-modal"
            header="Error"
            text="Something wrong, try again"
        />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import taskCard from "./tasks/taskCard";
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
            M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn.btn-task-control'), {
                direction: 'left'
            });
        });

    },
    computed: {
        ...mapGetters({
            tasks: 'tasks',
        }),
    },
    components: {
        taskCard,
        uiAlert,
    }
}
</script>

<style scoped lang="sass">

</style>
