<template>
    <nav class="teal darken-1">
        <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
                <router-link :to="{ name: 'index' }" class="router-link" exact v-slot="{ href, navigate, isActive }"
                             v-if="$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Main</a>
                    </li>
                </router-link>
                <router-link :to="{ name: 'tasks' }" class="router-link" v-slot="{ href, navigate, isActive }"
                             v-if="$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Tasks</a>
                    </li>
                </router-link>
            </ul>
            <ul class="right hide-on-med-and-down">
                <router-link :to="{ name: 'signin' }" class="router-link" v-slot="{ href, navigate, isActive }"
                             v-if="!$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Sign In</a>
                    </li>
                </router-link>
                <router-link :to="{ name: 'signup' }" class="router-link" v-slot="{ href, navigate, isActive }"
                             v-if="!$store.getters.authorized" custom>
                    <li :class="{active: isActive}">
                        <a :href="href" @click="navigate">Sign Up</a>
                    </li>
                </router-link>
                <li v-if="$store.getters.authorized">
                    <a @click.prevent="$store.dispatch('signout')">Sign Out</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>

export default {
    name: "topMenu",
    components: {
    }
}
</script>

<style scoped lang="sass">
</style>
