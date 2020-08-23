import React, { Component } from "react";
import { Container, Header, Tab, Tabs, Content, Card, CardItem, Body, Text, Button } from "native-base";

export class QuestionDetailPage extends Component {
    state = {
        totalTrue: 0,
        totalFalse: 0
    }

    chooseAnswer(isCorrect) {
        console.log(isCorrect);
    }

    TextArea(text) {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>{text}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

    AnswerArea(answers) {
        Object.values(answers).map((value2, key2) => {
            return (
                <Button full light>
                    <Text>{Object.keys(answers)[key2]}- {Object.keys(value2)}</Text>
                </Button>
            )
        })
    }

    TabArea(propData) {
        Object.values(propData).map((value, key) => {
            return (
                <Tab heading={`Soru ${key + 1}`}>
                    {this.TextArea(value.QuestionText)}
                    {this.AnswerArea(value.Answers)}
                </Tab>
            )
        })
    }

    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    {
                        this.TabArea(this.props.route.params.data)
                    }
                </Tabs>
                {/* <ProgressBar progress={10} /> */}
            </Container>
        );
    }
}

export default QuestionDetailPage;
