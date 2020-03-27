<template>
    <div id="app">

        <video controls>
            <source src="../../assets/sample.mp4">
            Your browser does not support the video tag.
        </video>

    </div>
</template>

<script>
    import {HTTP} from '../../http-constants'
    export default {
        name: "Video.vue",
        data() {
            return {
                users: '',
                errors: '',
            }
        },
        methods: { // getUsers is only here as reference; delete
            getUsers: function () {
                HTTP.get('/users/').then((response) => {
                    this.users = response.data[0].name;
                }).catch(e => {
                    this.errors = e;
                })
            }
        }
    }
</script>

<style scoped>
    video {
        outline: none;
        width: 100%;
    }
</style>