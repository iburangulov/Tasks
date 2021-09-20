<template>
    <input :type="type" :placeholder="placeholder" :disabled="disabled" v-model="value" @input="update" class="gui-input">
</template>

<script>
export default {
    name: "guiInput",
    data() {
      return {
          value: ''
      }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        disabled: Boolean,
        default_value: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.value = this.default_value;
    },
    methods: {
        update: function () {
            this.$emit('update', this.value);
        }
    }
}
</script>

<style scoped lang="sass">
input
    height: 40px
    margin: 5px
    width: calc(100% - 10px)
    padding: 0 5px
</style>
