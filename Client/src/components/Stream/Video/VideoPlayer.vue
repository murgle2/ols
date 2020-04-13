<template>
  <div id="app">
    <video
      playsinline
      id="myPlayer"
      class="video-js"
      controls
      preload="auto"
      autoplay
      data-setup='{ "aspectRatio":"16:9" }'
      style="outline: none"
    ></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  data() {
    return {
      player: '',
      url: process.env.VUE_APP_STREAM_URL,
      volume: 1
    };
  },
  methods: {
    playerInitialize() {
      this.player = videojs('myPlayer');
    },
    playerDispose() {
      this.player.dispose();
    },

    playerPlay() {
      this.player.play();
    },
    playerPause() {
      this.player.pause();
    },

    playerSetSrc(url) {
      this.player.src(url);
    },
    playerSetVolume(float) {
      this.player.volume(float);
    },
    playerSetPoster(url) {
      this.player.poster(url);
    },
    playerSetTime(time) {
      this.player.currentTime(time);
    },

    playerEventEnded() {
      console.log('ended');
    },
    playerEventVolume() {
      this.volume = this.player.volume();
    },
    playerEventError() {
      console.log(this.playerGetError());
    },

    playerGetPaused() {
      return this.player.paused();
    },
    playerGetTime() {
      return this.player.currentTime();
    },
    playerGetError() {
      return this.player.error().message;
    },

    playerSetupEvents() {
      this.player.on('ended', function() {
        window.playerEvents.playerEventEnded();
      });
      this.player.on('volumechange', function() {
        window.playerEvents.playerEventVolume();
      });
      this.player.on('error', function() {
        window.playerEvents.playerEventError();
      });
    }
  },
  mounted() {
    window.playerEvents = this;
    this.playerInitialize();
    this.playerSetSrc(this.url);
    this.playerSetupEvents();
  },
  beforeDestroy() {
    this.playerDispose();
  }
};
</script>

<style src="video.js/dist/video-js.css"></style>
