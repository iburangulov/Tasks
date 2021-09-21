<template>
    <div class="tasks-panel">
        <taskCard v-for="item in 1000" :key="item"/>
    </div>
</template>

<script>
import taskCard from "./taskCard";

export default {
    name: "tasksPanel",
    components: {
        taskCard,
    },
}
</script>

<style scoped lang="sass">
.tasks-panel
    display: flex
    flex-wrap: wrap
</style>
