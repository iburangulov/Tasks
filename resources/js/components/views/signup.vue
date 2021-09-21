<template>
    <div class="row signup">
        <div class="col s6 offset-s3">
            <div class="row">
                <form @submit.prevent class="col s12">
                    <uiInput label="Name" @update="name_update" type="text" :disabled="loading"/>
                    <uiInput label="Email" @update="email_update" type="email" :disabled="loading"/>
                    <uiInput label="Password" @update="password_update" type="password" :disabled="loading"/>
                    <uiInput label="Confirm password" @update="password_confirm_update" type="password"
                             :disabled="loading"/>
                    <uiButton @click="signup_click" :disabled="loading">Sign Up</uiButton>
                </form>
            </div>
            <uiAlert
                @close="close_error_alert"
                header="Error"
                text="Something wrong, try again"
                id="signup-error-modal"
            />
        </div>
    </div>
</template>

<script>
//TODO Сделать валидацию инпутов
import {mapGetters} from "vuex";

import uiInput from "../gui/uiInput";
import uiButton from "../gui/uiButton";
import uiAlert from "../gui/uiAlert";

export default {
    name: "signup",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            loading: false,
        }
    },
    methods: {
        name_update: function (e) {
            this.name = e;
        },
        email_update: function (e) {
            this.email = e;
        },
        password_update: function (e) {
            this.password = e;
        },
        password_confirm_update: function (e) {
            this.password_confirmation = e;
        },
        signup_click: function () {
            if (this.loading) return;
            this.$store.dispatch('signup', {
                name: this.name,
                email: this.email,
                password: this.password,
            }).then(() => {
                if (!this.authorized) {
                    M.Modal.getInstance(document.getElementById('signup-error-modal')).open();
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
        uiInput,
        uiButton,
        uiAlert,
    }
}
</script>

<style scoped lang="sass">
.signup
    margin: 5% 0

</style>
