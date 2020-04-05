import React, { Component } from "react";
import { Container, List, ListItem, Text, Content, Left, Right, Icon } from "native-base";
import { QuestionDetailPage } from "../Pages/QuestionDetailPage"
import { Row, Grid } from "react-native-easy-grid";
import 'react-native-gesture-handler'; 
import { HeaderComp, FooterComp } from "../Components/index";

export class QuestionListPage extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Content>
              <List>
                <ListItem itemDivider>
                  <Text>Giriş Seviyesi Testler</Text>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('Detail', {name: 'Test1', title: 'Giriş Seviye Test 1'})}>
                  <Left>
                    <Text>Giriş 1</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('Detail', {name: 'Test2', title: 'Giriş Seviye Test 2'})}>
                  <Left>
                    <Text>Giriş 2</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Giriş 3</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Giriş 4</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Orta Seviye Testler</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Orta Seviye 1</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Orta Seviye 2</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Orta Seviye 3</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Orta Seviye 4</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Zor Seviye Testler</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Zor Seviye 1</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Zor Seviye 2</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Zor Seviye 3</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Zor Seviye 4</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem itemDivider>
                  <Text>Derslere Özel Testler(30 SORU)</Text>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Coğrafya Testi(30 SORU)</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Türkçe Testi(30 SORU)</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Genel Kültür Testi(30 SORU)</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Matematik Testi(30 SORU)</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default QuestionListPage;
