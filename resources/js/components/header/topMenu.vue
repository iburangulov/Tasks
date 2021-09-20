<template>
<div class="top-menu">
    <div class="links">
        <router-link :to="{ name: 'index' }" class="router-link" exact>Main</router-link>
        <router-link :to="{ name: 'tasks' }" class="router-link" v-if="$store.getters.is_authorized">Tasks</router-link>
    </div>
    <div class="links-right" v-if="!$store.getters.is_authorized">
        <router-link :to="{ name: 'signin' }" class="router-link align-right">Sign In</router-link>
        <router-link :to="{ name: 'signup' }" class="router-link align-right">Sign Up</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "topMenu"
}
</script>

<style scoped lang="sass">
.top-menu
    background-color: coral
    height: 100px
    display: flex
    justify-content: space-between

    a.router-link
        padding: 0 30px

        &.router-link-active
            text-decoration: underline

    .links
        display: flex
        align-items: center

    .links-right
        display: flex
        align-items: center
</style>
