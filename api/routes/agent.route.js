const express = require('express');
const app = express();
const router = express.Router();
const agentModule = require('../modules/agent');

const validation = async (body) => {
  console.log('body: ', body);
  const keys = ['_id', 'name', 'address', 'city', 'state', 'zipCode', 'tier', 'phone'];
  keys.forEach(key => {
    if (Object.keys(body).includes(key)) {
      console.log('body: ', Object.keys(body));
      for (const [bodyKey, value] of Object.entries(body)) {
      if (!value) throw new Error(`missing ${bodyKey}`);
      }
    } else throw new Error(`missing ${key}`);
  });
};

router.route('/').get(async (request, response, next) => {
  try {
    const agents = await agentModule.getAllAgents();
    response.send(agents);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (request, response, next) => {
  try {
    await validation(request.body);
    const newAgent = await agentModule.addAgent(request.body);
    response.send(newAgent);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (request, response, next) => {
  try {
    const agent = await agentModule.getAgentById(request.params.id);
    response.send(agent);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (request, response, next) => {
  try {
    await validation(request.body);
    const updatedAgent = await agentModule.updateAgent(request.params.id, request.body);
    response.send(updatedAgent);
  } catch (err) {
    return next(err);
  }
});

module.exports = router