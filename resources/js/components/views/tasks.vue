<template>
    <div>
        <button @click="reload">Reload</button>
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
        }
    }
}
</script>

<style scoped>

</style>
