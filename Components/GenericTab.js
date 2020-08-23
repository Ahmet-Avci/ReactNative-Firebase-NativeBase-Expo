import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text, Button } from "native-base";

export class GenericTab extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                    Bu bir test sorudur. Lütfen dikkate almayınız.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button block light>
                        <Text>Light</Text>
                    </Button>
                    <Button block>
                        <Text>Primary</Text>
                    </Button>
                    <Button block success>
                        <Text>Success</Text>
                    </Button>
                    <Button block info>
                        <Text>Info</Text>
                    </Button>
                    <Button block warning>
                        <Text>Warning</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default GenericTab;
