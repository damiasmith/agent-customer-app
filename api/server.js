const express = require('express')
const agentRoute = require('./routes/agent.route');
const customerRoute = require('./routes/customer.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/agents', agentRoute);
app.use('/customers', customerRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log('Listening on port ' + port);
});

module.exports = server;