<template>
    <div class="tasks-main-panel">
        <paginationPanel/>
        <tasksPanel/>
        <paginationPanel/>
    </div>
</template>

<script>
import paginationPanel from "./paginationPanel";
import tasksPanel from "./tasksPanel";

export default {
    name: "mainPanel",
    components: {
        paginationPanel,
        tasksPanel,
    },
}
</script>

<style scoped lang="sass">
.tasks-main-panel
    display: flex
    flex-direction: column
    align-items: center
</style>
