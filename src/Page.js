import React, { Component } from 'react';
import { Menu, Container, Message, Icon } from 'semantic-ui-react'

class Page extends Component {
  handleItemClick = name => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state || {}
    return (
      <Container>
        <h1>Pageheader</h1>
        <Menu vertical>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='enterprise'
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='consumer'
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='python'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='dedicated'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
      link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.</p>
      <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
      </Container>
    );
  }
}

export default Page;
