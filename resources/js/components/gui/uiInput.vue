<template>
    <div class="row">
        <div class="input-field col s12">
            <input id="password" :type="type" class="validate">
            <label for="password">{{ label }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "uiInput",
    props: {
        label: String,
        type: {
            type: String,
            default: 'text',
        }
    }
}
</script>

<style scoped>

</style>
