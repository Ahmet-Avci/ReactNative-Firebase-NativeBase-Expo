import React, {Component} from 'react'; 
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export class HeaderComp extends Component{
    render() {
            return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>KPSS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
            );
    }
}

export default HeaderComp;