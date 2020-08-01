import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, H3, Button } from "native-base";
import { Row, Grid } from "react-native-easy-grid";

export class QuestionDetailPage extends Component {
    state = {
        totalTrue: 0,
        totalFalse: 0
    }

    // TODO : TEST KATEGORİSİ ALTINDAKİ BİR TESTİN HEMEN ALTINDA TEK BİR SORU VE CEVAPLARI VAR. O KISMIN ARRAY ŞEKLİNDE GELMESİ GEREKİYOR.

    chooseAnswer(isCorrect) {
        console.log(isCorrect);
    }

    render() {
        return (
            <Container>
                <Grid>
                    <Row>
                        <Content>
                            <H3>{this.props.route.params.header}</H3>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <Text>{this.props.route.params.data.Question}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            {
                                Object.keys(this.props.route.params.data.Answers).map((key, index) =>
                                    <Button key={key} small full light style={styles.margin} onPress={() => this.chooseAnswer(Object.values(this.props.route.params.data.Answers)[index][1])}>
                                        <Text>{key} - {Object.values(this.props.route.params.data.Answers)[index]}</Text>
                                    </Button>
                                )
                            }
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: 5
    }
});

export default QuestionDetailPage;
