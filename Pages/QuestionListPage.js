import React, { Component } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, List, ListItem, Text, Content, Left, Right, Spinner } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { Row, Grid } from "react-native-easy-grid";
import ToastMessage from '../mixins/ToastMessage';
import 'react-native-gesture-handler';
import { InitializeFireBaseDb } from '../Firebase/Firebase';
import { AdMobBanner } from 'expo-ads-admob';

export class QuestionListPage extends Component {
    state = {
        allQuestions: null
    }

    async componentDidMount() {
        ToastMessage.clearToastSquare();
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
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-5292572003338215/7800020624" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                />
                <Grid>
                    <Row>
                        <Content>
                            {
                                this.state.allQuestions
                                    ? <List>
                                        <ListItem key="first" itemDivider selected>
                                            <Ionicons name="ios-calendar" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Güncel Bilgiler</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Guncel).map((x, i) =>
                                                <ListItem key={`first-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Guncel)[i], header: "Guncel" })}>
                                                    <Left iconRight light>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="second" itemDivider selected>
                                            <Ionicons name="ios-book" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Türkçe</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Turkce).map((x, i) =>
                                                <ListItem key={`second-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Turkce)[i], header: "Turkce" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="third" itemDivider selected>
                                            <Ionicons name="ios-calculator" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Matematik</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Matematik).map((x, i) =>
                                                <ListItem key={`third-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Matematik)[i], header: "Matematik" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="quad" itemDivider selected>
                                            <Ionicons name="ios-paper" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Tarih</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Tarih).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Tarih)[i], header: "Tarih" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="penta" itemDivider selected>
                                            <Ionicons name="ios-globe" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Coğrafya</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Cografya).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Cografya)[i], header: "Cografya" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="six" itemDivider selected>
                                            <Ionicons name="ios-people" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Vatandaşlık</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.Vatandaslik).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.Vatandaslik)[i], header: "Vatandaslik" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
                                                    </Right>
                                                </ListItem>
                                            )
                                        }
                                        <ListItem key="eight" itemDivider selected>
                                            <Ionicons name="ios-school" size={28} color="#6fa8fc" />
                                            <Text style={{ fontWeight: "bold" }}> - Eğitim Bilimleri</Text>
                                        </ListItem>
                                        {
                                            Object.keys(this.state.allQuestions.EgitimBilimi).map((x, i) =>
                                                <ListItem key={`quad-${x}`} onPress={() => this.props.navigation.navigate('Detail', { data: Object.values(this.state.allQuestions.EgitimBilimi)[i], header: "Egitim" })}>
                                                    <Left>
                                                        <Text>{x}</Text>
                                                    </Left>
                                                    <Right>
                                                        <Ionicons name="ios-arrow-forward" size={30} color="#6fa8fc" />
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
