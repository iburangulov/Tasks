<template>
    <div>
        <div class="control-panel">
            <guiButton @click="reload">Reload</guiButton>
            <guiButton @click='toggle_create_panel'>Create</guiButton>
        </div>
        <div class="tasks-list-panel">
            <div v-if="show_create_panel">
                <div class="create-task-panel">
                    <div class="create-task">
                        <h1>Create new task</h1>
                        <form @submit.prevent class="create-task-form">
                            <input type="text" name="title" placeholder="Title" v-model="title" :disabled="creating">
                            <input type="text" name="description" placeholder="Description" v-model="description"
                                   :disabled="creating">
                            <input type="text" name="time_estimated" placeholder="Time_estimatied"
                                   v-model="time_estimated"
                                   :disabled="creating">
                            <input type="text" name="color" placeholder="Color" v-model="color" :disabled="creating">
                            <div class="control-block">
                                <guiButton @click="makeTask">Save</guiButton>
                                <guiButton @click='toggle_create_panel'>Cancel</guiButton>
                            </div>
                        </form>
                    </div>
                    <div v-if="creating">
                        Creating...
                    </div>
                    <div v-if="!creating_result" class="create-task-error">
                        <guiButton @click="creating_result = !creating_result">Close</guiButton>
                        Creating error!
                    </div>
                </div>
            </div>
            <div v-if="!tasks_loaded && !errors">Loading...</div>
            <div v-else-if="errors">Error!</div>
            <div v-else-if="tasks.length === 0">No tasks!</div>
            <div v-else>
                <h1>Tasks</h1>
                <div class="tasks-list">
                    <div class="task" v-for="task in tasks" :key="task.id" :style="{ backgroundColor: task.color }"
                         @click="show_task(task)">
                        <div class="task-title">{{ task.title }}</div>
                        <div class="task-description">{{ task.description }}</div>
                        <div class="task-time_estimated">{{ task.time_estimated }}</div>
                        <div class="task-time_logged">{{ task.time_logged }}</div>
                        <div class="task-created_at">{{ task.created_at }}</div>
                        <div class="task-updated_at">{{ task.updated_at }}</div>
                    </div>
                </div>
            </div>
            <div v-if="task_show" class="single-task">
                <singleTask @close_click="hide_task" v-bind:task="single_task"></singleTask>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import guiButton from "../gui/guiButton";
import singleTask from "./tasks/singleTask";

export default {
    name: "tasks",
    data: function () {
        return {
            creating: false,
            creating_result: true,
            show_create_panel: false,
            title: '',
            description: '',
            time_estimated: '',
            color: '#ffffff',
            task_show: false,
            single_task: null
        }
    },
    mounted() {
        this.$store.dispatch('load_tasks');
    },
    computed: {
        ...mapGetters({
            tasks: 'tasks',
            tasks_loaded: 'tasks_loaded',
            errors: 'tasks_error'
        }),
    },
    methods: {
        reload: function () {
            this.$store.dispatch('load_tasks');
        },
        makeTask: function () {
            if (this.creating) return;
            this.creating = true;
            this.creating_result = true
            this.$store.dispatch('make_task', {
                title: this.title,
                description: this.description,
                time_estimated: this.time_estimatied,
                color: this.color
            }).then(result => {
                this.creating_result = Boolean(result);
                this.creating = false;
            });
        },
        toggle_create_panel: function () {
            this.show_create_panel = !this.show_create_panel;
            this.creating_result = true
        },
        show_task: function (task) {
            this.single_task = task
            this.task_show = true
        },
        hide_task: function () {
            this.task_show = false
        }
    },
    components: {
        guiButton,
        singleTask,
    }
}
</script>

<style scoped lang="sass">
.control-panel
    display: flex

.create-task-panel
    position: absolute
    background-color: white
    padding: 20px
    z-index: 100
    width: 800px
    height: 350px
    border: 1px solid #f0f0f0

    .create-task-error
        display: flex
        margin-top: 5px
        align-items: center

    .create-task
        display: flex
        flex-direction: column

        .create-task-form
            display: flex
            flex-direction: column

            input
                border: 0
                margin: 5px 0
                padding: 10px 20px
                background-color: #f0f0f0

                &:disabled
                    background-color: gray

            .control-block
                display: flex


.tasks-list-panel
    position: relative

.single-task
    position: absolute
    width: 500px
    height: 400px
    border: 1px solid #f0f0f0
    top: 0
    background-color: white

.tasks-list
    display: flex
    flex-wrap: wrap
    flex-direction: row

    .task
        width: 300px
        height: 450px
        border: 1px solid #f0f0f0
        padding: 5px
        cursor: pointer

</style>
