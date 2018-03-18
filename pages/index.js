import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

import Layout from '../components/layout'

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
    return (
      <Layout>
        <div>
          <h3> Open Campaign </h3>
          <Button
            floated='right'
            content='Create campaign'
            icon='add circle'
            primary
          />

          {this.renderCampaigns()}
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex
