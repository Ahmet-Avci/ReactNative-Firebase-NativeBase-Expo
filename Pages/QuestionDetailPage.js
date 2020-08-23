import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab, Content, Card, CardItem, Body, Text, Button, ProgressBar } from "native-base";

export class QuestionDetailPage extends Component {
    state = {
        totalTrue: 0,
        totalFalse: 0
    }

    chooseAnswer(isCorrect) {
        console.log(isCorrect);
    }

    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    {
                        Object.values(this.props.route.params.data).map(value =>
                            <Tab heading="Tab 1">
                                <Container>
                                    <Content>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{value.QuestionText}</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                        {
                                            Object.values(value.Answers).map((value2, key2) =>
                                                <Button full light>
                                                    <Text>{Object.keys(value.Answers)[key2]}- {Object.keys(value2)}</Text>
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
