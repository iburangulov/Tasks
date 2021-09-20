<template>
    <div class="signup-form">
        <guiInput placeholder="Name" @update="change_name"/>
        <guiInput placeholder="Email" type="email" @update="change_email"/>
        <guiInput placeholder="Password" type="password" @update="change_password"/>
        <guiButton text="Sign Up" @click="signup_click"/>
    </div>
</template>

<script>
import guiInput from "../gui/guiInput";
import guiButton from "../gui/guiButton";

export default {
    name: "signup",
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        change_name: function (e) {
            this.name = e;
        },
        change_email: function (e) {
            this.email = e;
        },
        change_password: function (e) {
            this.password = e;
        },
        signup_click: function () {
            this.$store.dispatch('signup', {
               name: this.name,
               email: this.email,
               password: this.password,
            });
        }
    },
    components: {
        guiInput,
        guiButton,
    }
}
</script>

<style scoped lang="sass">
.signup-form
    display: flex
    flex-direction: column
    width: 500px
    margin: 20px auto

</style>
