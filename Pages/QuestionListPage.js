import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, List, ListItem, Text, Content, Left, Right, Spinner, Icon } from "native-base";
import { Row, Grid } from "react-native-easy-grid";
import 'react-native-gesture-handler';
import { InitializeFireBaseDb } from '../Firebase/Firebase';
import { AdMobBanner } from 'expo-ads-admob';

export class QuestionListPage extends Component {
    state = {
        allQuestions: null
    }

    async componentDidMount() {
        const oneWeekTime = 7 * 24 * 60 * 60 * 1000;

        try {
            const storedDate = await AsyncStorage.getItem('questionsStoredDate')
            const storedQuestions = await AsyncStorage.getItem("questions");
            if (!storedDate || !storedQuestions || JSON.parse(storedDate) + oneWeekTime <= new Date().getTime()) {
                this.getFirebaseData();
            } else {
                this.setState({ allQuestions: JSON.parse(await AsyncStorage.getItem("questions")) });
            }
        } catch (e) {
            console.log('asyncStorage error:', e);
            this.getFirebaseData();
        }
    }

    getFirebaseData() {
        const firebaseDb = InitializeFireBaseDb();
        firebaseDb.database().ref("KpssTests").on('value', (snapshot => {
            if (snapshot.val()) {
                this.setState({ allQuestions: snapshot.val() });
                AsyncStorage.setItem("questions", JSON.stringify(snapshot.val()));
                AsyncStorage.setItem("questionsStoredDate", JSON.stringify(new Date().getTime()));
            }
        }));
    }

    render() {
        return (
            <Container>
                <AdMobBanner
                    bannerSize="ADAPTIVE_BANNER"
                    adUnitID="ca-app-pub-5292572003338215/7800020624" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={this.bannerError} />
                <Grid>
                    <Row>
                        <Content>
                            {
                                this.state.allQuestions
                                    ? <List>
                                        <ListItem key="first" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Güncel Bilgiler</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Guncel).map((x, i) =>
                                                <ListItem key={`first-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Guncel)[i], header: x })}>
                                                    <Left iconRight light>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="second" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Türkçe</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Turkce).map((x, i) =>
                                                <ListItem key={`second-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Turkce)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="third" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Matematik</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Matematik).map((x, i) =>
                                                <ListItem key={`third-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Matematik)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="quad" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Tarih</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Tarih).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Tarih)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="penta" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Coğrafya</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Cografya).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Cografya)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="six" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Vatandaşlık</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Vatandaslik).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Vatandaslik)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="eight" itemDivider selected>
                                            <Text style={{ fontWeight: "bold" }}>Eğitim Bilimleri</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.EgitimBilimi).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.EgitimBilimi)[i], header: x })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Icon name="arrow-forward" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                    </List>
                                    : <Spinner />
                            }
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

export default QuestionListPage;
