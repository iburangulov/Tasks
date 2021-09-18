<template>
    <div>
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
