import React, { Component } from "react";
import { Container, List, ListItem, Text, Content, Left, Right, Icon, Spinner } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import 'react-native-gesture-handler';
import { InitializeFireBaseDb } from '../Firebase/Firebase';

export class QuestionListPage extends Component {
    state = {
        allQuestions: null
    }

    componentDidMount() {
        if (!this.state.allQuestions) {
            const firebaseDb = InitializeFireBaseDb();
            firebaseDb.database().ref("KpssTests").on('value', (snapshot => {
                if (snapshot.val()) {
                    this.setState({ allQuestions: snapshot.val() });
                }
            }));
        }
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Row>
                        <Content>
                            <List>
                                <ListItem key="first" itemDivider>
                                    <Text>Giriş Seviye Testler</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Basic).map((x, i) =>
                                            <ListItem key={`first-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Basic)[i], header: x })}>
                                                <Left>
                                                    <Text>{x}</Text>
                                                </Left>
                                                <Right>
                                                    <Icon name="arrow-forward" />
                                                </Right>
                                            </ListItem>
                                        ) :
                                        <ListItem>
                                            <Left>
                                                <Spinner />
                                            </Left>
                                        </ListItem>
                                }
                                <ListItem key="second" itemDivider>
                                    <Text>Orta Seviye Testler</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Middle).map((x, i) =>
                                            <ListItem key={`second-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Basic)[i], header: x })}>
                                                <Left>
                                                    <Text>{x}</Text>
                                                </Left>
                                                <Right>
                                                    <Icon name="arrow-forward" />
                                                </Right>
                                            </ListItem>
                                        ) :
                                        <ListItem>
                                            <Left>
                                                <Spinner color='blue' />
                                            </Left>
                                        </ListItem>
                                }
                                <ListItem key="third" itemDivider>
                                    <Text>Zor Seviye Testler</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Hard).map((x, i) =>
                                            <ListItem key={`third-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Basic)[i], header: x })}>
                                                <Left>
                                                    <Text>{x}</Text>
                                                </Left>
                                                <Right>
                                                    <Icon name="arrow-forward" />
                                                </Right>
                                            </ListItem>
                                        ) :
                                        <ListItem>
                                            <Left>
                                                <Spinner color='red' />
                                            </Left>
                                        </ListItem>
                                }
                                <ListItem key="quad" itemDivider>
                                    <Text>Derslere Özel Testler(30 SORU)</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Other).map((x, i) =>
                                            <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Basic)[i], header: x })}>
                                                <Left>
                                                    <Text>{x}</Text>
                                                </Left>
                                                <Right>
                                                    <Icon name="arrow-forward" />
                                                </Right>
                                            </ListItem>
                                        ) :
                                        <ListItem>
                                            <Left>
                                                <Spinner color='green' />
                                            </Left>
                                        </ListItem>
                                }
                            </List>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

export default QuestionListPage;
