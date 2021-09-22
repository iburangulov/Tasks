<template>
    <div class="row tasks-panel">
        <taskCard v-for="item in 100" :key="item"/>
    </div>
</template>

<script>
import taskCard from "./taskCard";

export default {
    name: "tasksPanel",
    components: {
        taskCard,
    },
    mounted() {
        M.FloatingActionButton.init(document.querySelectorAll('.task-card-actions'), {
            direction: 'left',
            hoverEnabled: false,
        });
    }
}
</script>

<style scoped lang="sass">
.tasks-panel
    display: flex
    flex-wrap: wrap
</style>
