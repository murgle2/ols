<template>
    <div id="app">
        <b-container fluid="true" class="fill">
            <b-row no-gutters class="h-100">

                <b-col lg="7" class="col-left d-flex flex-column">
                    <b-row no-gutters>
                        <Video v-if="!streamer"/>
                        <GoLive v-else/>
                    </b-row>
                    <b-row class="row-center flex-grow-1" no-gutters>
                        <div class="button-align">
                            <b-button  size="lg" @click="goLive">{{ streamer ? returnMessage : goLiveMessage }}</b-button>
                        </div>
                    </b-row>
                </b-col>
                <b-col lg="3" class="col-middle">
                    <Chat/>
                </b-col>
                <b-col lg="2" class="col-right">
                    <h1>Popular Clips</h1>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Video from './Stream/Video'
    import Chat from './Stream/Chat'
    import GoLive from './Stream/GoLive';

    export default {
        name: "Stream.vue",
        components: {
            Video,
            Chat,
            GoLive
        },
        data() {
            return {
                streamer: false,
                goLiveMessage: "Want to Join the Stream?",
                returnMessage: "Return to Stream",
            }
        },
        methods: {
            goLive: function () {
                this.streamer = !this.streamer;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #app {
        text-align: center;
        color: #4f4a5a;
    }

    .fill {
        min-height: 100%;
        height: 100%;
        background-color: #ff342a;
    }

    .col-left {
        background-color: #ffc86d;
    }

    .row-center {
        justify-content: center;
        background-color: red;
    }

    .button-align {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .col-middle {
        background-color: blueviolet;
        /*overflow-y: scroll;*/
        /*height: 100%;*/
    }

    .col-right {
        background-color: #a8d08d;
        /*overflow-y: scroll;*/
        /*height: 100%;*/
    }
</style>
