<template>
    <div class="container">
        <actionsPanel/>
        <mainPanel/>
        <!--        <div class="row">-->
        <!--            <taskCard-->
        <!--                v-for="task in tasks"-->
        <!--                :key="task.id"-->
        <!--                :task="task"-->
        <!--                :loading="tasks_loading"-->
        <!--                @alert="task_alert"-->
        <!--                @open_click="task_open_click"-->
        <!--                @edit_click="task_edit_click"-->
        <!--            />-->
        <!--        </div>-->
        <!--        <div v-if="tasks_loading && tasks.length === 0">Loading...</div>-->
        <!--        <actionsPanel @reload_tasks="load_tasks" @create_click="task_create_click"/>-->
        <!--        <uiAlert-->
        <!--            id="tasks-error-modal"-->
        <!--            header="Error"-->
        <!--            text="Something wrong, try again"-->
        <!--        />-->
        <!--        <taskPopup-->
        <!--            v-if="task_opened"-->
        <!--            :task="task_choosen"-->
        <!--            @close_task_modal="task_close_click"-->
        <!--        />-->
        <!--        <taskCreatePopup v-if="task_creating"/>-->
    </div>
</template>

<script>
// import {mapGetters} from "vuex";

import actionsPanel from "./tasks/actionsPanel";
import mainPanel from "./tasks/mainPanel";

// import uiButton from "../gui/uiButton";
// import taskCard from "./tasks/taskCard";
// import uiAlert from "../gui/uiAlert";
// import taskPopup from "./tasks/taskPopup";
// import taskCreatePopup from "./tasks/taskCreatePopup";

export default {
    name: "tasks",
    data: function () {
        // return {
        //     tasks_loading: false,
        //     task_opened: false,
        //     task_choosen: null,
        //     task_creating: false,
        // }
    },
    mounted() {
        // this.load_tasks();
    },
    methods: {
        // load_tasks() {
        //     this.tasks_loading = true;
        //     this.$store.dispatch('load_tasks').then(result => {
        //         this.tasks_loading = false;
        //         if (!result) {
        //             this.task_alert();
        //         }
        //     });
        // },
        // task_alert() {
        //     M.Modal.getInstance(document.getElementById('tasks-error-modal')).open();
        // },
        // task_edit_click(task) {
        //     // this.task_choosen = task;
        //     // this.task_opened = true;
        // },
        // task_open_click(task) {
        //     this.task_choosen = task;
        //     this.task_opened = true;
        // },
        // task_close_click() {
        //     this.task_choosen = null;
        //     this.task_opened = false;
        // },
        // task_create_click() {
        //     this.task_creating = true;
        // },
    },
    computed: {
        // ...mapGetters({
        //     tasks: 'tasks',
        // }),
    },
    components: {
        actionsPanel,
        mainPanel,
        // taskCard,
        // uiAlert,
        // uiButton,
        // taskPopup,
        // taskCreatePopup,
    }
}
</script>

<style scoped lang="sass">

</style>
