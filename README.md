# Open Live Stream 

[Open Live Stream](http://www.openlivestream.tv/) (OLS) is a platform that enables anyone to stream live on the web through a single, shared channel. Potential streamers 
can queue up to go live and viewers can discuss the contents of the stream in the real-time chat box. 

Client-side is developed with [Vue.js](https://vuejs.org/) framework and hosted on Amazon S3. Server-side is a Node.js app that utilizes express for the API and 
[WebSockets](https://github.com/websockets/ws) for the live chat. Live stream is played with [Video.js player](https://videojs.com/). Stream originates from Real-Time Message Protocol (rtmp) and is 
distributed via HTTP Live Streaming (hls) by [Ant Media Server](https://github.com/ant-media/Ant-Media-Server) community edition. The Node.js app and media server are hosted with 
Amazon EC2.

**To Do**
* Login functionality
* Update live chat with names and colors
* Enable SSL
* Develop mobile app
* Streamer queue
* Live view count
* Customize video player
*

**Setup**

After cloning the repository and installing [Node.js](https://nodejs.org/en/download/), use the command yarn install in the client and server directories. Copy the .env.default
file to the same directory, rename it to .env, and then update the URLs.

To run the client-side app in development mode run yarn serve in the client directory. To start the Node.js app run npm start in the server
 directory.

