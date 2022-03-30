import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Toast,
} from "native-base";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import ReplaceJson from "../mixins/ReplaceJson";

export class QuestionDetailPage extends Component {
  state = {
    totalTrue: 0,
    totalFalse: 0,
    questionList: Object.values(this.props.route.params.data),
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
  }

  async chooseAnswer(question, answer, questionOrder) {
    question.choosed = true;
    const userChoose = await this.setUserChoose(answer);

    const isLastQuestion = questionOrder + 1 == this.state.questionList.length;
    if (isLastQuestion) {
      Toast.show({
        text: `Doğru sayısı: ${userChoose.trueCount}\nYanlış sayısı: ${userChoose.falseCount}\n\nsize daha iyi hizmet sunabilmek adına reklam kullanmak zorundayız. :(`,
        duration: 60000,
        buttonText: "Tamam",
        type: "success",
        onClose: () => {
          if (this.state.questionList[0].choosed) {
            this.state.questionList.forEach(
              (question) => (question.choosed = false)
            );
            this.showFinishAd();
          }
        },
      });
    }
  }

  async setUserChoose(answer) {
    const isTrueAnswer = Object.values(answer)[0];
    let trueCount = this.state.totalTrue;
    let falseCount = this.state.totalFalse;
    let storagedTrue = await AsyncStorage.getItem(
      `${this.props.route.params.header}trueTotal`
    );
    let storagedFalse = await AsyncStorage.getItem(
      `${this.props.route.params.header}falseTotal`
    );

    if (isTrueAnswer) {
      trueCount = this.state.totalTrue + 1;
      storagedTrue = storagedTrue ? parseInt(storagedTrue) : 0;
      storagedTrue += 1;
      AsyncStorage.setItem(
        `${this.props.route.params.header}trueTotal`,
        JSON.stringify(storagedTrue)
      );
    } else {
      falseCount = this.state.totalFalse + 1;
      storagedFalse = storagedFalse ? parseInt(storagedFalse) : 0;
      storagedFalse += 1;
      AsyncStorage.setItem(
        `${this.props.route.params.header}falseTotal`,
        JSON.stringify(storagedFalse)
      );
    }

    Object.values(answer)[0]
      ? this.setState({ totalTrue: trueCount })
      : this.setState({ totalFalse: falseCount });

    return { trueCount, falseCount };
  }

  showFinishAd() {
    AdMobInterstitial.setAdUnitID(
      "ca-app-pub-5292572003338215/4215998839"
    ).then(() => {
      AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true }).then(
        () => {
          AdMobInterstitial.showAdAsync();
          this.props.navigation.navigate("Links");
        }
      );
    });
  }

  render() {
    return (
      <Container>
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-5292572003338215/3669203928"
          servePersonalizedAds
          onDidFailToReceiveAdWithError={this.bannerError}
        />
        <Tabs
          initialPage={0}
          onChangeTab={({ from, to }) => {
            this.setState({ currentPage: to });
          }}
          renderTabBar={() => <ScrollableTab />}
        >
          {this.state.questionList.map((question, index) => (
            <Tab key={`tab-${index}`} heading={`(${index + 1})`}>
              <Container>
                <Content>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{ fontWeight: "bold" }}>
                          {ReplaceJson.replace(question.QuestionText)}
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                  {Object.values(question.Answers).map((answer, key2) => (
                    <Button
                        key={key2}
                      style={
                        !question.choosed
                          ? styles.buttonStyle
                          : styles.justMargin
                      }
                      full
                      danger={question.choosed && !Object.values(answer)[0]}
                      success={question.choosed && Object.values(answer)[0]}
                      onPress={() => this.chooseAnswer(question, answer, index)}
                    >
                      <Text style={styles.answerPadding}>
                        {Object.keys(question.Answers)[key2]}-{" "}
                        {ReplaceJson.replace(Object.keys(answer)[0])}
                      </Text>
                    </Button>
                  ))}
                </Content>
              </Container>
            </Tab>
          ))}
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginBottom: 6,
    backgroundColor: "#eaeaea",
  },
  justMargin: {
    marginBottom: 6,
  },
  answerPadding: {
    padding: 20,
  },
});

export default QuestionDetailPage;
