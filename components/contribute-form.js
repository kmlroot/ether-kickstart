import React, { Component } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'

import { Router } from '../routes'

import Campaign from '../eth/campaign'
import web3 from '../eth/web3'

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault()

    const address = this.props.address
    const { value } = this.state
    const campaign = Campaign(address)

    let accounts

    this.setState({ loading: true, errorMessage: '' })

    try {
      accounts = await web3.eth.getAccounts()

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether')
      })

      Router.replaceRoute(`/campaigns/${address}`)
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }

    this.setState({ loading: false, value: '' })
  }

  render () {
    return <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label> Amout to Contribute </label>
          <Input value={this.state.value} onChange={(event) => this.setState(
                { value: event.target.value }
              )} label="ether" labelPosition="right" />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />

        <Button primary loading={this.state.loading}>
          Contribute
        </Button>
      </Form>
  }
}

export default ContributeForm
