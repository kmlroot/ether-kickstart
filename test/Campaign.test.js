/*
 * Module dependencies
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

/*
 * Require compiled contracts - JSON Files
 */

const compiledFactory = require('../eth/build/CampaignFactory.json')
const compiledCampaign = require('../eth/build/Campaign.json')

let accounts = null
let factory = null
let campaignAddress = null
let campaign = null

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' })

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  })

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call()

  campaing = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  )
})
