const express = require('express');
const hubsRouter = require("./hubs/hubs-router.js")

const server = express();
server.use(express.json());
// .use matches ALL HTTP methods ( GET,DELET, PUT, whatever)
// no path matches ALL paths... if you want to match a path,use a path
server.use('/api/hubs', hubsRouter)
server.use("/something/anything", hubsRouter)

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Hubs API</h>
      <p>Welcome to the Lambda Hubs API</p>
    `);
  });

module.exports = server;