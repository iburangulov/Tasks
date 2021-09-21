<template>
    <div id="application">
        <uiFreeze v-if="global_loading"/>
        <topMenu v-if="show_top_menu"/>
        <router-view v-if="!global_loading"></router-view>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import uiFreeze from "./components/gui/uiFreeze";
import topMenu from './components/header/topMenu'

export default {
    name: 'Application',
    components: {
        topMenu,
        uiFreeze,
    },
    mounted() {
        this.$store.dispatch('init').then(() => {
            if (this.$route.meta.auth !== false && !this.$store.getters.authorized) {
                this.$router.push({ name: 'signin' });
            }

            this.$router.beforeEach( (to, from, next) => {
                if (to.meta.auth !== false && !this.$store.getters.authorized) {
                    next({ name: 'signin' });
                } else {
                    next();
                }
            });
        });

    },
    computed: {
        show_top_menu: function () {
            if (typeof (this.$route.meta.show_top_menu) === 'undefined') {
                return true;
            }
            return Boolean(this.$route.meta.show_top_menu);
        },
        ...mapGetters({
            global_loading: 'global_loading',
        }),
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
