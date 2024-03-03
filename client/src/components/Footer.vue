<script>
import VueLogo from '../assets/Vue.png'

export default {
    data() {
        return {
            year: new Date().getFullYear(),
            VueLogo: VueLogo
        };
    },
};
</script>

<template>
    <footer>
        <h1>Powered By Vue</h1>
        <small>Seth Zarkovich - Web Dev - {{year}}&copy;</small>
        <br />
        <img :src="VueLogo" className='react-logo' alt="Vue-Logo" />
    </footer>
</template>