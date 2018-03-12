const web3 = require('./web3')
const campaignFactory = require('./build/CampaignFactory.json')
const { contractAddress } = require('../config')

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  contractAddress
)

module.exports = instance
