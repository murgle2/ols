<template>
  <div id="app">
    <VideoPlayer />
  </div>
</template>

<script>
import { HTTP } from '../../http-constants';
import VideoPlayer from './video/VideoPlayer';

export default {
  name: 'Video.vue',
  components: {
    VideoPlayer
  },
  data() {
    return {
      users: '',
      errors: ''
    };
  },
  methods: {
    // getUsers is only here as reference; delete
    getUsers: function() {
      HTTP.get('/users/')
        .then(response => {
          this.users = response.data[0].name;
        })
        .catch(e => {
          this.errors = e;
        });
    }
  }
};
</script>

<style></style>
