<template>
  <div id="app">
    <b-container fluid="true" class="fill">
      <b-row no-gutters class="h-100">
        <b-col lg="8" class="d-flex flex-column col-left">
          <b-row no-gutters>
            <Video v-if="!streamer" />
            <GoLive v-else />
          </b-row>
          <b-row class="row-center flex-grow-1" no-gutters>
            <div class="button-align">
              <b-button size="lg" @click="goLive">{{
                streamer ? returnMessage : goLiveMessage
              }}</b-button>
            </div>
          </b-row>
        </b-col>
        <b-col lg="4" class="col-right">
          <Chat />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Video from './stream/Video';
import Chat from './stream/Chat';
import GoLive from './stream/GoLive';

export default {
  name: 'Stream.vue',
  components: {
    Video,
    Chat,
    GoLive
  },
  data() {
    return {
      streamer: false,
      goLiveMessage: 'Want to Join the stream?',
      returnMessage: 'Return to stream'
    };
  },
  methods: {
    goLive: function() {
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
}

.row-center {
  justify-content: center;
}

.button-align {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.col-left {
  /*margin-right: 0px;*/
}

.col-right {
  min-height: 45%;
}
</style>
