const fs = require('fs');  
const fsPromises = require('fs').promises; 
const fileName = './data/agent.json';

const readData = async () => {
  try {
    const file = await fs.promises.readFile(fileName, 'utf8');
    return await JSON.parse(file);
  } catch (err) {
    console.log('readData error: ' + err);
    throw new Error('readData error: ' + err);
  }
};

const getAllAgents = async () => {
  try {
    return await readData();
  } catch (err) {
    console.log('getAllAgents error: ' + err)
    throw new Error('getAllAgents error: ' + err);
  }
};

const addAgent = async (agentData) => {
  try {
    let data = await readData();
    const index = data.findIndex(agent => agent._id == agentData._id);
    if (index < 0) data.push(agentData);
    else return 'Agent exists. Please update instead.'
    console.log('Data: ', data);

    data = JSON.stringify(data);
    await fs.promises.writeFile(fileName, data);
    return 'Agent added'
  } catch (err) {
    console.log('addAgent error: ' + err);
    throw new Error('addAgent error: ' + err);
  }
};

const getAgentById = async (id) => {
  try {
    const data = await readData();
    const agent = data.find(agent => agent._id == id);
    if (agent != undefined) return agent;
    else return 'Agent does not exist.'
  } catch (err) {
    console.log('getAgentById error: ' + err);
    throw new Error('getAgentById error: ' + err);
  }
};

const updateAgent = async (id, newData) => {
  try {
    let data = await readData();
    const index = data.findIndex(agent => agent._id == id);
    if (index > 0) data[index] = newData;
    else return 'Agent does not exist. Please add instead.'
    console.log('Data: ', data);
    data = JSON.stringify(data);
    await fs.promises.writeFile(fileName, data);
    return 'Agent updated'
  } catch (err) {
    console.log('updateAgent error: ' + err);
    throw new Error('updateAgent error: ' + err);
  }
};

module.exports = { getAllAgents, addAgent, getAgentById, updateAgent };