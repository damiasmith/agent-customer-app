const express = require('express');
const app = express();
const router = express.Router();
const customerModule = require('../modules/customer');

const validation = async (body) => {
  console.log('body: ', body);
  const keys = ['_id', 'agent_id', 'guid', 'isActive', 'balance', 'age', 'eyeColor', 'name', 'company', 'email', 'phone', 'address', 'registered', 'latitude', 'longitude', 'tags'];
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
    const customers = await customerModule.getAllCustomers();
    response.send(customers);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (request, response, next) => {
  try {
    await validation(request.body);
    const updatedCustomer = await customerModule.updateCustomer(request.params.id, request.body);
    response.send(updatedCustomer);
  } catch (err) {
    return next(err);
  }
});

router.route('/agent/:agent_id').get(async (request, response, next) => {
  try {
    const customers = await customerModule.getCustomerByAgentId(request.params.agent_id);
    response.send(customers);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (request, response, next) => {
  try {
    await validation(request.body);
    const newCustomer = await customerModule.addCustomer(request.body);
    response.send(newCustomer);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (request, response, next) => {
  try {
    console.log(request);
    const deletedCustomer = await customerModule.deleteCustomer(request.params.id);
    response.send(deletedCustomer);
  } catch (err) {
    return next(err);
  }
});

module.exports = router