import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'

import Layout from '../../components/layout'

class CampaignNew extends Component {
  state = {
    minimumContribution: ''
  }

  render () {
    return (
      <Layout>
        <h3> Create a Campaign </h3>

        <Form>
          <Form.Field>
            <label> Minimum contribution </label>
            <Input label='wei' labelPosition='right' />
          </Form.Field>

          <Button primary> Create </Button>
        </Form>
      </Layout>
    )
  }
}

export default CampaignNew
