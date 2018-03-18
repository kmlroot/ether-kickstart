import React, { Component } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'

import Campaign from '../eth/campaign'
import web3 from '../eth/web3'

class ContributeForm extends Component {
  state = {
    value: ''
  }

  onSubmit = async (event) => {
    event.preventDefault()

    const address = this.props.address
    const { value } = this.state
    const campaign = Campaign(address)

    let accounts

    try {
      accounts = await web3.eth.getAccounts()

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether')
      })
    } catch (err) {}
  }

  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label> Amout to Contribute </label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label='ether'
            labelPosition='right'
          />
        </Form.Field>
        <Button primary>
          Contribute
        </Button>
      </Form>
    )
  }
}

export default ContributeForm
