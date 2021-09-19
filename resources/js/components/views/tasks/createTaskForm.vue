<template>
    <div class="create-task-form">
        <div class="create-task-header">
            <guiButton @click="save_create_task_form_click" text="Save"/>
            <guiButton @click="$emit('hide_create_task_form_click')" text="Cancel"/>
        </div>
        <div class="create-task-body">
            <div class="create-task-form-inputs">
                <guiInput type="text" placeholder="Title" :disabled="inputs_disabled" @update="change_title"/>
                <guiInput type="text" placeholder="Time estimated" :disabled="inputs_disabled" @update="change_time_estimated"/>
                <guiInput type="text" placeholder="Color" :disabled="inputs_disabled" @update="change_color" :default_value="color"/>
                <guiTextarea placeholder="Description" :disabled="inputs_disabled" :rows="17" @update="change_description"/>
            </div>
        </div>
        <guiAlert v-if="show_success_creating" text="Success!" @close_click="task_success_created" />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import guiButton from "../../gui/guiButton";
import guiInput from "../../gui/guiInput";
import guiTextarea from "../../gui/guiTextarea";
import guiAlert from "../../gui/guiAlert";

export default {
    name: "createTaskForm",
    data() {
        return {
            title: '',
            time_estimated: '',
            color: '#ffffff',
            description: '',
            show_success_creating: false,
        }
    },
    methods: {
        change_title: function (e) {
            this.title = e;
        },
        change_time_estimated: function (e) {
            this.time_estimated = e;
        },
        change_color: function (e) {
            this.color = e;
        },
        change_description: function (e) {
            this.description = e;
        },
        save_create_task_form_click: function () {
            const data = {
                title: this.title,
                time_estimated: this.time_estimated,
                color: this.color,
                description: this.description
            };
            this.$store.dispatch('create_task', data).then(() => {
                if (!this.tasks_creating_errors) {
                    this.show_success_creating = true;
                }
            });
        },
        task_success_created: function () {
            this.show_success_creating = false;
            this.$emit('task_success_created_close')
        }
    },
    computed: {
        ...mapGetters({
            inputs_disabled: 'tasks_creating',
            tasks_creating_errors: 'tasks_creating_errors',
        }),
    },
    components: {
        guiButton,
        guiInput,
        guiTextarea,
        guiAlert,
    },
}
</script>

<style scoped lang="sass">
.create-task-form
    width: 600px
    height: 500px
    background-color: darkgrey
    z-index: 100
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    border: 5px solid white

    .create-task-header
        display: flex

    .create-task-body
        display: flex
        flex-direction: column
        height: calc(100% - 50px)
        position: relative

        .create-task-form-inputs
            height: 100%
</style>
