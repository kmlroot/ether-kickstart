import web3 from './web3'
import campaignFactory from './build/CampaignFactory.json'

import { contractAddress } from '../config'

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  contractAddress
)

export default instance
