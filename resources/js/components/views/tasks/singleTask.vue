<template>
    <div>
        <h1>Task</h1>
        <div class="task-title" :style="{ backgroundColor: task.color }">{{ task.title }}</div>
        <div class="task-description">{{ task.description }}</div>
        <div class="task-time_estimated">{{ task.time_estimated }}</div>
        <div class="task-time_logged">{{ task.time_logged }}</div>
        <div class="task-created_at">{{ task.created_at }}</div>
        <div class="task-updated_at">{{ task.updated_at }}</div>
        <guiButton @click="$emit('close_click')">Close</guiButton>
    </div>
</template>

<script>
import guiButton from "../../gui/guiButton";

export default {
    name: "singleTask",
    props: {
      task: 'single_task'
    },
    components: {
        guiButton,
    }
}
</script>

<style scoped>

</style>
