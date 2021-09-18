<template>
<div class="top-menu">
    <router-link :to="{ name: 'index' }">Main</router-link>
    <router-link :to="{ name: 'tasks' }">Tasks</router-link>
</div>
</template>

<script>
export default {
    name: "topMenu"
}
</script>

<style scoped lang="scss">
.top-menu {
    background-color: green;
}
</style>
