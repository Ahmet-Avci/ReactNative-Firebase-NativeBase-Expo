import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";

export class QuestionComp extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Aşağıdakiler hangisi yukarıda değildir?</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full light>
                        <Text>Light</Text>
                    </Button>
                    <Button full>
                        <Text>Primary</Text>
                    </Button>
                    <Button full success>
                        <Text>Success</Text>
                    </Button>
                    <Button full info>
                        <Text>Info</Text>
                    </Button>
                    <Button full warning>
                        <Text>Warning</Text>
                    </Button>
                    <Button full danger>
                        <Text>Danger</Text>
                    </Button>
                    <Button full dark>
                        <Text>Dark</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default FooterComp;
