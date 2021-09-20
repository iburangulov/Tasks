<template>
    <div class="row signin">
        <div class="col s6 offset-s3">
            <div class="row">
                <form @submit.prevent class="col s12">
                    <uiInput label="Email" @update="email_update" type="email"/>
                    <uiInput label="Password" @update="password_update" type="password"/>
                    <uiButton @click="signin_click">Sign In</uiButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import uiButton from "../gui/uiButton";
import uiInput from "../gui/uiInput";

export default {
    name: "signin",
    data() {
        return {
            email: '',
            password: '',
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

        }
    },
    components: {
        uiButton,
        uiInput,
    }
}
</script>

<style scoped lang="sass">
.signin
    margin: 5% 0

</style>
