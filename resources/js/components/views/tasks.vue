<template>
    <div class="container">
        <div class="row">
<!--            <uiButton @click="load_tasks">Reload</uiButton>-->
            <taskCard v-for="task in tasks" :key="task.id" :task="task" :loading="tasks_loading"/>
        </div>
        <div v-if="tasks_loading && tasks.length === 0">Loading...</div>
        <uiAlert
            id="tasks-error-modal"
            header="Error"
            text="Something wrong, try again"
        />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import uiButton from "../gui/uiButton";
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
        this.load_tasks();
    },
    methods: {
        load_tasks() {
            this.tasks_loading = true;
            this.$store.dispatch('load_tasks').then(result => {
                this.tasks_loading = false;
                if (!result) {
                    M.Modal.getInstance(document.getElementById('tasks-error-modal')).open();
                }
            });
        }
    },
    computed: {
        ...mapGetters({
            tasks: 'tasks',
        }),
    },
    components: {
        taskCard,
        uiAlert,
        uiButton,
    }
}
</script>

<style scoped lang="sass">

</style>
