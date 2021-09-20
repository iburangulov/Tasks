<template>
    <div id="application">
        <template v-if="show_top_menu">
            <topMenu></topMenu>
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
    beforeUpdate() {
        this.check_auth();
        this.check_guest();
    },
    mounted() {
        this.check_auth();
    },
    methods: {
        check_auth() {
            if (this.$route.meta.auth !== false && !this.$store.getters.is_authorized) {
                this.$router.push({name: 'signin'});
            }
        },
        check_guest() {
            if (this.$route.meta.guest === true && this.$store.getters.is_authorized) {
                this.$router.push({name: 'index'});
            }
        },
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
    width: 100%
    min-height: 100vh
    display: flex
    flex-direction: column
</style>
