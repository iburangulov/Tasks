<template>
    <nav class="teal darken-1">
        <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
                <router-link :to="{ name: 'index' }" class="router-link" exact v-slot="{ href, navigate, isActive }" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Main</a>
                    </li>
                </router-link>
                <router-link :to="{ name: 'tasks' }" class="router-link" exact v-slot="{ href, navigate, isActive }"
                             v-if="$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Tasks</a>
                    </li>
                </router-link>
            </ul>
            <ul class="right hide-on-med-and-down">
                <router-link :to="{ name: 'signin' }" class="router-link" exact v-slot="{ href, navigate, isActive }"
                             v-if="!$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Sign In</a>
                    </li>
                </router-link>
                <router-link :to="{ name: 'signup' }" class="router-link" exact v-slot="{ href, navigate, isActive }"
                             v-if="!$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Sign Up</a>
                    </li>
                </router-link>
            </ul>
        </div>
    </nav>

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
