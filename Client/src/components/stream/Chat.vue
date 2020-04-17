<template>
  <div id="app">
    <b-container class="fill">
      <b-row no-gutters class="h-100">
        <b-col class="chat-room">
          <b-row no-gutters>
            <h3 class="chat-title">Chat Room</h3>
          </b-row>

          <b-row id="chatBox" no-gutters class="chat-messages">
            <div class="wrap-text">
              <h4 v-if="errorMessage">{{ errorMessage }}</h4>
              <div v-for="message in messages" v-bind:key="message.id">
                {{ message }}
              </div>
            </div>
          </b-row>

          <b-row no-gutters class=" chat-send">
            <b-input-group>
              <b-input
                id="chatSend"
                @keyup.enter.native="onSubmit(chatSend.value)"
                placeholder="Chat here!"
                autocomplete="off"
              />
              <b-input-group-append>
                <b-button @click="onSubmit(chatSend.value)">Send</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Chat.vue',
  created() {
    this.ws = new WebSocket(process.env.VUE_APP_WS_URL);

    this.ws.onerror = () => {
      this.errorMessage = 'Unable to connect to chat';
    };

    this.ws.onopen = () => {
      this.errorMessage = '';
    };

    this.ws.onmessage = event => {
      this.messages.push(event.data);
    };
  },
  mounted() {
    this.chatSend = document.getElementById('chatSend');
  },
  updated() {
    this.bottomScrollbar();
  },
  data() {
    return {
      messages: [],
      chatSend: null,
      chatBox2: null,
      ws: null,
      errorMessage: ''
    };
  },
  methods: {
    onSubmit(message) {
      this.chatSend.value = '';
      this.ws.send(message);

      if (this.messages.length > 50) this.messages.shift();
    },
    checkScroll(element) {
      return element.scrollHeight > element.clientHeight;
    },
    bottomScrollbar() {
      let chatBox = document.getElementById('chatBox');
      chatBox.scrollTop = chatBox.scrollHeight;
      //this.chatBox2 = document.getElementById('chatBox');
      //this.chatBox2.scrollTop = this.chatBox2.scrollHeight;
    }
  }
};
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}

.chat-title {
  margin: 0 auto;
  color: white;
}

.chat-messages {
  height: 100%;
  overflow-y: auto;
  text-align: left;
  background-color: #6a7787;
  color: white;
  padding: 1%;
}

.wrap-text {
  width: 100%;
  word-wrap: break-word;
}

::-webkit-scrollbar {
  width: 6px;
  height: 4px;
  background-color: #6a7787;
}

::-webkit-scrollbar-thumb {
  background-color: #282828;
  -webkit-border-radius: 1ex;
}

.chat-send {
  justify-content: flex-end;
  margin-bottom: 3%;
  margin-top: 3%;
}

.fill {
  height: 100%;
  max-height: 100%;
  position: absolute;
  background-color: #4f5969;
}
</style>
