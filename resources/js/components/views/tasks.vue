<template>
    <div>
        <button @click="reload">Reload</button>
        <div v-if="!creating">
            <div v-if="!creating_result">Creating error!</div>
            <h1>Create new task</h1>
            <form @submit.prevent>
                <input type="text" name="title" placeholder="Title" v-model="title">
                <input type="text" name="description" placeholder="Description" v-model="description">
                <input type="text" name="time_estimated" placeholder="Time_estimatied" v-model="time_estimated">
                <input type="text" name="color" placeholder="Color" v-model="color">
                <button type="submit" @click="makeTask">Save</button>
            </form>
        </div>
        <div v-else>
            Creating...
        </div>

        <div v-if="!tasks_loaded && !errors">Loading...</div>
        <div v-else-if="errors">Error!</div>
        <div v-else-if="tasks.length === 0">No tasks!</div>
        <div v-else>
            <h1>Tasks</h1>
            <ul v-for="task in tasks" :key="task.id">
                {{ task }}
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "tasks",
    data: function () {
        return {
            creating: false,
            creating_result: true,
            title: '',
            description: '',
            time_estimated: '',
            color: '#ffffff'
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
            this.creating = true;
            this.$store.dispatch('make_task', {
                title: this.title,
                description: this.description,
                time_estimated: this.time_estimatied,
                color: this.color
            }).then(result => {
                this.creating_result = Boolean(result);
                this.creating = false;
            });
        }
    }
}
</script>

<style scoped>

</style>
