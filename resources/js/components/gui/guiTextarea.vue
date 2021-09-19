<template>
    <textarea :placeholder="placeholder" :rows="rows" v-model="value"  @input="update" />
</template>

<script>
export default {
    name: "guiTextarea",
    data: function () {
        return {
            value: ''
        }
    },
    methods: {
        update: function () {
            this.$emit('update', this.value);
        }
    },
    props: {
        placeholder: String,
        rows: Number,
    }
}
</script>

<style scoped lang="sass">
textarea
    resize: none
    margin: 5px
    width: calc(100% - 10px)
</style>
