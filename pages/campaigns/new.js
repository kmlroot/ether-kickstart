import React, { Component } from 'react'

import {
  Form,
  Button,
  Input,
  Message
} from 'semantic-ui-react'

import { Router } from '../../routes'

import Layout from '../../components/layout'

import factory from '../../eth/factory'
import web3 from '../../eth/web3'

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: ''
  }

  onSubmit = async (event) => {
    event.preventDefault()

    this.setState({ loading: true })

    const { minimumContribution } = this.state

    let accounts

    try {
      accounts = await web3.eth.getAccounts()

      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0]
      })

      Router.pushRoute('/')
    } catch (err) {
      this.setState({
        errorMessage: err.message
      })
    }

    this.setState({ loading: false })
  }

  render () {
    return (
      <Layout>
        <h3> Create a Campaign </h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
          <Form.Field>
            <label> Minimum contribution </label>
            <Input
              label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={event => this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />

          <Button loading={this.state.loading} primary> Create </Button>
        </Form>
      </Layout>
    )
  }
}

export default CampaignNew
