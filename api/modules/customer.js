const fs = require('fs');  
const fsPromises = require('fs').promises; 
const fileName = './data/customer.json';

const readData = async () => {
  try {
    const file = await fs.promises.readFile(fileName, 'utf8');
    return await JSON.parse(file);
  } catch (err) {
    console.log('readData error: ' + err);
    throw new Error('readData error: ' + err);
  }
};

const getAllCustomers = async () => {
  try {
    return await readData();
  } catch (err) {
    console.log('getAllCustomers error: ' + err);
    throw new Error('getAllCustomers error: ' + err);
  }
};

const updateCustomer = async (id, newData) => {
  try {
    let data = await readData();
    const index = data.findIndex(customer => customer._id == id);
    if (index > 0) data[index] = newData;
    else return 'Customer does not exist. Please add instead.'
    console.log('Data: ', data);
    data = JSON.stringify(data);
    await fs.promises.writeFile(fileName, data);
    return 'Customer updated'
  } catch (err) {
    console.log('updateCustomer error: ' + err);
    throw new Error('updateCustomer error: ' + err);
  }
};

const getCustomerByAgentId = async (agentId) => {
  try {
    let newData = []; 
    const data = await readData();
    data.forEach(customer => {
      if (customer.agent_id == agentId) {
        let filteredCustomer = {name: customer.name, address: customer.address};
        newData.push(filteredCustomer);
      }
    });
    console.log('newData: ', newData);
    return newData;
  } catch (err) {
    console.log('getAgentById error: ' + err);
    throw new Error('getAgentById error: ' + err);
  }
};

const addCustomer = async (customerData) => {
  try {
    let data = await readData();
    const index = data.findIndex(customer => customer._id == customerData._id);
    if (index < 0) data.push(customerData);
    else return 'Customer exists. Please update instead.'
    console.log('Data: ', data);
    data = JSON.stringify(data);
    await fs.promises.writeFile(fileName, data);
    return 'Customer added'
  } catch (err) {
    console.log('addCustomer error: ' + err);
    throw new Error('addCustomer error: ' + err);
  }
};

const deleteCustomer = async (id) => {
  try {
    let data = await readData();
    const index = data.findIndex(customer => customer._id == id);
    if (index > 0) data.splice(index, 1);
    else return 'Customer does not exist.'
    console.log('Data: ', data);
    data = JSON.stringify(data);
    await fs.promises.writeFile(fileName, data);
    return 'Customer deleted'
  } catch (err) {
    console.log('deleteCustomer error: ' + err);
    throw new Error('deleteCustomer error: ' + err);
  }
};

module.exports = { getAllCustomers, updateCustomer, getCustomerByAgentId, addCustomer, deleteCustomer };