<template>
    <div class="row">
        <div class="input-field col s12">
            <input :id="this._uid" :type="type" class="validate" v-model="val" @input="$emit('update', val)">
            <label :for="this._uid">{{ label }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "uiInput",
    data() {
        return {
            val: '',
        }
    },
    props: {
        label: String,
        type: {
            type: String,
            default: 'text',
        },
    },
}
</script>

<style scoped>

</style>
