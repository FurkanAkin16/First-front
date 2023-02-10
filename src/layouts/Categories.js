import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleHeaderVertical extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical size='large'>
        <Menu.Item>
          <Menu.Header>İş İlanı</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Çalışan'
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='İş Veren'
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Çalışma Yeri</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Uzaktan'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Saha'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Ofis'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Mobil</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='App Store'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Google Play'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Destek</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Canlı Destek'
              active={activeItem === 'email'}
              onClick={this.handleItemClick}
            >
              Canlı Destek
            </Menu.Item>

            <Menu.Item
              name='SSS'
              active={activeItem === 'faq'}
              onClick={this.handleItemClick}
            >
              SSS
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
