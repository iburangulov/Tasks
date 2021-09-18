<template>
    <div id="application">
        <topMenu></topMenu>
        <router-view></router-view>
    </div>
</template>

<script>
import topMenu from './components/header/topMenu'

export default {
    name: 'Application',
    components: {
        topMenu
    }
}
</script>

<style scoped lang="sass">

#application
    min-width: 100vw
    min-height: 100vh
    display: flex
    flex-direction: column
</style>
