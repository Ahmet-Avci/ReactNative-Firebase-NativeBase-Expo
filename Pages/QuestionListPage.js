import React, { Component } from "react";
import { Container, List, ListItem, Text, Content, Left, Right, Spinner, Icon } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import 'react-native-gesture-handler';
import { InitializeFireBaseDb } from '../Firebase/Firebase';
import ToastMessage from '../mixins/ToastMessage';
import { AdMobBanner } from 'expo-ads-admob';

export class QuestionListPage extends Component {
    state = {
        allQuestions: null
    }

    componentDidMount() {
        if (!this.state.allQuestions) {
            ToastMessage.clearToastSquare();
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
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-5292572003338215/7800020624" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={this.bannerError} />
                <Grid>
                    <Row>
                        <Content>
                            <List>
                                <ListItem key="first" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Güncel Bilgiler</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Guncel).map((x, i) =>
                                            <ListItem key={`first-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Guncel)[i], header: x })}>
                                                <Left iconRight light>
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
                                <ListItem key="second" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Türkçe</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Turkce).map((x, i) =>
                                            <ListItem key={`second-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Turkce)[i], header: x })}>
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
                                <ListItem key="third" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Matematik</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Matematik).map((x, i) =>
                                            <ListItem key={`third-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Matematik)[i], header: x })}>
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
                                <ListItem key="quad" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Tarih</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Tarih).map((x, i) =>
                                            <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Tarih)[i], header: x })}>
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
                                <ListItem key="quad" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Coğrafya</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Cografya).map((x, i) =>
                                            <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Cografya)[i], header: x })}>
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
                                <ListItem key="quad" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Anayasa</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.Anayasa).map((x, i) =>
                                            <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Anayasa)[i], header: x })}>
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
                                <ListItem key="quad" itemDivider selected>
                                    <Text style={{ fontWeight: "bold" }}>Eğitim Bilimleri</Text>
                                </ListItem>
                                {
                                    this.state.allQuestions ?
                                        Object.keys(this.state.allQuestions.EgitimBilimi).map((x, i) =>
                                            <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.EgitimBilimi)[i], header: x })}>
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
