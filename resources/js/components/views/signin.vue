<template>
    <div class="row signin">
        <div class="col s6 offset-s3">
            <div class="row">
                <form @submit.prevent class="col s12">
                    <uiInput label="Email" @update="email_update" type="email" :disabled="loading"/>
                    <uiInput label="Password" @update="password_update" type="password" :disabled="loading"/>
                    <uiButton @click="signin_click" :disabled="loading">Sign In</uiButton>
                </form>
            </div>
            <uiAlert
                id="signin-error-modal"
                @close="close_error_alert"
                header="Error"
                text="Something wrong, try again"
            />
        </div>
    </div>
</template>

<script>
//TODO Сделать валидацию инпутов
import {mapGetters} from "vuex";
import uiButton from "../gui/uiButton";
import uiInput from "../gui/uiInput";
import uiAlert from "../gui/uiAlert";

export default {
    name: "signin",
    data() {
        return {
            email: '',
            password: '',
            loading: false,
        }
    },
    methods: {
        email_update: function (e) {
            this.email = e;
        },
        password_update: function (e) {
            this.password = e;
        },
        signin_click: function () {
            if (this.loading) return;
            this.$store.dispatch('signin', {
                email: this.email,
                password: this.password,
            }).then(() => {
                if (!this.authorized) {
                    M.Modal.getInstance(document.getElementById('signin-error-modal')).open();
                } else {
                    this.$router.push({name: 'index'});
                }
            });
        },
        close_error_alert: function () {
            this.$store.dispatch('signout');
        },
    },
    computed: {
        ...mapGetters({
            authorized: 'authorized',
        }),
    },
    components: {
        uiButton,
        uiInput,
        uiAlert,
    }
}
</script>

<style scoped lang="sass">
.signin
    margin: 5% 0

</style>
