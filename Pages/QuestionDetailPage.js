import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab, Content, Card, CardItem, Body, Text, Button, Toast } from "native-base";
import Guid from '../mixins/Guid';

export class QuestionDetailPage extends Component {
    state = {
        totalTrue: 0,
        totalFalse: 0,
        success: false,
        currentPage: 0,
        modalVisibility: false,
        questionList: Object.values(this.props.route.params.data)
    }

    chooseAnswer(question, answer, questionOrder) {
        if (question.choosed) return;

        question.choosed = true;
        Object.values(answer)[0]
            ? this.setState({ totalTrue: this.state.totalTrue + 1 })
            : this.setState({ totalFalse: this.state.totalFalse + 1 });

        if (questionOrder + 1 == this.state.questionList.length) {
            const questionPoint = 100 / this.state.questionList.length;
            const score = (this.state.totalTrue * questionPoint) - (this.state.totalFalse * 0.25);
            Toast.show({
                text: `Doğru sayısı: ${this.state.totalTrue}\nYanlış sayısı: ${this.state.totalFalse}\nPuanınız: ${score}`,
                duration: 60000,
                buttonText: "Tamam",
                type: score > 70 ? "success" : "danger",
                onClose: () => {
                    this.state.questionList.forEach(question => question.choosed = false);
                    this.props.navigation.navigate('Links');
                }
            })
        };

        setTimeout(() => {
            this.clearChoose();
        }, 2000);
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
                <Header hasTabs />
                <Tabs initialPage={0} page={this.state.currentPage} onChangeTab={({ from, to }) => { this.setState({ currentPage: to }); }} renderTabBar={() => <ScrollableTab />}>
                    {
                        this.state.questionList.map((question, index) =>
                            <Tab heading={`Soru ${index + 1}`}>
                                <Container>
                                    <Content key={Guid.NewRandom()}>
                                        <Card>
                                            <CardItem key={`question-${index}`}>
                                                <Body>
                                                    <Text>{question.QuestionText}</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        {
                                            Object.values(question.Answers).map((answer, key2) =>
                                                <Button full light={!question.choosed || !Object.values(answer)[0]} success={question.choosed && Object.values(answer)[0]} onPress={() => this.chooseAnswer(question, answer, index)}>
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

export default QuestionDetailPage;
