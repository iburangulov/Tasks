<template>
    <div>
        <controlPanel @create_task_click="show_create_task_form"/>
        <createTaskForm
            v-if="showing_create_task_form"
            @hide_create_task_form_click="hide_create_task_form"
            @task_success_created_close="hide_create_task_form"
        />
        <guiAlert v-if="have_errors" :text="showing_alert_text" @close_click="alert_close_click"/>
        <div class="tasks-list">
            <task v-for="task in tasks" :key="task.id" :task="task" :disabled="tasks_loading"/>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import controlPanel from "./tasks/controlPanel";
import createTaskForm from "./tasks/createTaskForm";
import guiAlert from "../gui/guiAlert";
import task from "./tasks/task";


export default {
    name: "tasks",
    data: function () {
        return {
            showing_create_task_form: false,
            showing_alert_text: 'Error!',
        }
    },
    mounted() {
        this.$store.dispatch('load_tasks');
    },
    methods: {
        show_create_task_form: function () {
            this.showing_create_task_form = true;
        },
        hide_create_task_form: function () {
            this.showing_create_task_form = false;
        },
        alert_close_click: function () {
            this.$store.dispatch('clear_errors');
        },
    },
    computed: {
        ...mapGetters({
            tasks_loading_errors: 'tasks_loading_errors',
            tasks_creating_errors: 'tasks_creating_errors',
            tasks_updating_errors: 'tasks_updating_errors',
            tasks_deleting_errors: 'tasks_deleting_errors',
            tasks_loading: 'tasks_loading',
            tasks: 'tasks',
        }),
        have_errors: function () {
            return this.tasks_loading_errors || this.tasks_creating_errors || this.tasks_updating_errors || this.tasks_deleting_errors;
        }
    },
    components: {
        controlPanel,
        createTaskForm,
        guiAlert,
        task,
    }
}
</script>

<style scoped lang="sass">
.control-panel
    display: flex

.tasks-list
    display: flex
    flex-wrap: wrap
    justify-content: flex-start

</style>
