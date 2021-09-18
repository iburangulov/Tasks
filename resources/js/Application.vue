<template>
    <div id="application">
        <template v-if="show_top_menu">
            <topMenu ></topMenu>
        </template>
        <router-view></router-view>
    </div>
</template>

<script>
import topMenu from './components/header/topMenu'

export default {
    name: 'Application',
    components: {
        topMenu
    },
    computed: {
        show_top_menu: function () {
            if (typeof (this.$route.meta.show_top_menu) === 'undefined') return true;
            return Boolean(this.$route.meta.show_top_menu);
        }
    }
}
</script>

<style scoped lang="sass">

#application
    min-width: 100vw
    min-height: 100vh
    display: flex
    flex-direction: column
</style>
