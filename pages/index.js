import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

import factory from '../eth/factory'

class CampaignIndex extends Component {
  static async getInitialProps () {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    return { campaigns }
  }

  async componentDidMount () {
  }

  renderCampaigns () {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a> View campaigns </a>,
        fluid: true
      }
    })

    return <Card.Group items={items} />
  }

  render () {
    return <div>
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'
      />
      {this.renderCampaigns()}
      <Button
        content='Create campaign'
        icon='add circle'
        primary
      />
    </div>
  }
}

export default CampaignIndex
