<template>
  <div id="app">
    <h1>Chat</h1>

    <div class="chat-send">
      <b-form-input type="text" placeholder="Send a message!" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat.vue'
};
</script>

<style scoped>
.chat-send {
  padding-bottom: 4%;
  padding-right: 4%;
  padding-left: 4%;
}
</style>
