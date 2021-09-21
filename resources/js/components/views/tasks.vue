<template>
    <div class="container">
        <div class="row">
            <taskCard
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                :loading="tasks_loading"
                @alert="task_alert"
                @open_click="task_open_click"
                @edit_click="task_edit_click"
            />
        </div>
        <div v-if="tasks_loading && tasks.length === 0">Loading...</div>
        <actionsPanel @reload_tasks="load_tasks"/>
        <uiAlert
            id="tasks-error-modal"
            header="Error"
            text="Something wrong, try again"
        />
        <taskPopup
            v-if="task_edited || task_opened"
            :editing="task_edited"
            :opening="task_opened"
            :task="task_choosen"
            @close_task_modal="task_close_click"
        />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import uiButton from "../gui/uiButton";
import taskCard from "./tasks/taskCard";
import uiAlert from "../gui/uiAlert";
import actionsPanel from "./tasks/actionsPanel";
import taskPopup from "./tasks/taskPopup";

export default {
    name: "tasks",
    data: function () {
        return {
            tasks_loading: false,
            task_edited: false,
            task_opened: false,
            task_choosen: null,
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
                    this.task_alert();
                }
            });
        },
        task_alert() {
            M.Modal.getInstance(document.getElementById('tasks-error-modal')).open();
        },
        task_edit_click(task) {
            this.task_choosen = task;
            this.task_opened = true;
            this.task_edited = true;
        },
        task_open_click(task) {
            this.task_choosen = task;
            this.task_opened = true;
            this.task_edited = false;
        },
        task_close_click() {
            this.task_choosen = null;
            this.task_opened = false;
            this.task_edited = false;
        },
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
        actionsPanel,
        taskPopup,
    }
}
</script>

<style scoped lang="sass">

</style>
