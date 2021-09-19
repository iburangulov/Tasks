<template>
    <div class="task">
        <h1>Task</h1>
        {{ task }}
    </div>
</template>

<script>
export default {
    name: "task",
    props: {
        task: Object,
    }
}
</script>

<style scoped lang="sass">
.task
    width: 300px
    height: 300px
    background-color: #a9a9a9
    margin: 5px
</style>
