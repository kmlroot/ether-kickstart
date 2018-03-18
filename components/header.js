import React from 'react'
import { Menu } from 'semantic-ui-react'

export default () => {
  return (
    <Menu style={{ marginTop: '15px' }}>
      <Menu.Item>
        CrowdCoin
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          Campagins
        </Menu.Item>
        <Menu.Item>
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
