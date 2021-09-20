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
                v-if="has_authorize_errors"
                @close="close_error_alert"
                header="Error"
                text="Something wrong, try again"
            />
            <div class="row progress" v-if="loading">
                <div class="indeterminate"></div>
            </div>
        </div>
    </div>
</template>

<script>
//TODO Сделать валидацию инпутов
import {mapGetters} from "vuex";
import uiButton from "../gui/uiButton";
import uiInput from "../gui/uiInput";
import uiError from "../gui/uiError";
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
            this.loading = true;
            this.$store.dispatch('signin', {
                email: this.email,
                password: this.password,
            }).then(() => {
                this.loading = false;
                if (this.has_authorize_errors) {
                    const modal = document.getElementById('signin-error-modal')
                    M.Modal.getInstance(modal).open();
                }
            });
        },
        close_error_alert: function () {
            this.$store.dispatch('signout');
        },
    },
    computed: {
        ...mapGetters({
            has_authorize_errors: 'has_authorize_errors',
        }),
    },
    components: {
        uiButton,
        uiInput,
        uiError,
        uiAlert,
    }
}
</script>

<style scoped lang="sass">
.signin
    margin: 5% 0

</style>
