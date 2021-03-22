import React, { Component } from "react";
import { Platform, Text, StyleSheet } from 'react-native';
import { Container, Tab, Tabs, ScrollableTab, Content, Card, CardItem, Body, Button, Toast, Spinner, View } from "native-base";
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export class QuestionDetailPage extends Component {
    state = {
        totalTrue: 0,
        totalFalse: 0,
        success: false,
        currentPage: 0,
        modalVisibility: false,
        questionList: Object.values(this.props.route.params.data)
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        console.log('prop =>', this.props.route.params.data);
    }

    chooseAnswer(question, answer, questionOrder, key2) {
        question.choosed = true;
        const isTrueAnswer = Object.values(answer)[0];
        var trueCount = isTrueAnswer ? this.state.totalTrue + 1 : this.state.totalTrue;
        var falseCount = !isTrueAnswer ? this.state.totalFalse + 1 : this.state.totalFalse;
        Object.values(answer)[0]
            ? this.setState({ totalTrue: trueCount })
            : this.setState({ totalFalse: falseCount });

        if (questionOrder + 1 == this.state.questionList.length) {
            const questionPoint = 100 / this.state.questionList.length;
            const score = (trueCount * questionPoint) - (falseCount * 0.25);
            Toast.show({
                text: `Doğru sayısı: ${trueCount}\nYanlış sayısı: ${falseCount}\nPuanınız: ${score}`,
                duration: 60000,
                buttonText: "Tamam",
                type: score > 70 ? "success" : "danger",
                onClose: () => {
                    if (this.state.questionList[0].choosed) {
                        this.state.questionList.forEach(question => question.choosed = false);
                        if (Platform.OS == "android" || Platform.OS == "ios") {
                            AdMobInterstitial.setAdUnitID('ca-app-pub-5292572003338215/4215998839').then(() => {
                                AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true }).then(() => {
                                    AdMobInterstitial.showAdAsync();
                                    this.props.navigation.navigate('Links');
                                });
                            });
                        } else {
                            this.props.navigation.navigate('Links');
                        }
                    }
                }
            })
        };

        setTimeout(() => {
            this.clearChoose();
        }, 1000);
    }

    clearChoose() {
        this.setState({ light: true });
        this.setState({ currentPage: this.state.currentPage + 1 });
    }

    ShowModalFunction(visible) {
        this.setState({ modalVisibility: visible });
    }

    render() {
        return (
            <Container>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-5292572003338215/3669203928"
                    servePersonalizedAds
                    onDidFailToReceiveAdWithError={this.bannerError} />
                <Tabs initialPage={0} page={this.state.currentPage} onChangeTab={({ from, to }) => { this.setState({ currentPage: to }); }} renderTabBar={() => <ScrollableTab />}>
                    {
                        this.state.questionList.map((question, index) =>
                            <Tab heading={`Soru ${index + 1}`}>
                                <Container>
                                    <Content>
                                        <Card>
                                            <CardItem key={`question-${index}`}>
                                                <Body>
                                                    <Text style={{ fontWeight: "bold" }}>{question.QuestionText.replace(/_/g, ".")}</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        {
                                            Object.values(question.Answers).map((answer, key2) =>
                                                <Button style={!question.choosed ? styles.buttonStyle : styles.justMargin} full danger={question.choosed && !Object.values(answer)[0]} success={question.choosed && Object.values(answer)[0]} onPress={() => this.chooseAnswer(question, answer, index, key2)}>
                                                    <Text>{Object.keys(question.Answers)[key2]}- {Object.keys(answer)}</Text>
                                                </Button>
                                            )
                                        }
                                    </Content>
                                </Container>
                            </Tab>
                        )
                    }
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginBottom: 6,
        backgroundColor: "#eaeaea"
    },
    justMargin: {
        marginBottom: 6
    }
});

export default QuestionDetailPage;
