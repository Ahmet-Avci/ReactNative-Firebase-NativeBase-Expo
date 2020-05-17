import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, H3 } from "native-base";
import { InitializeFireBaseDb } from '../Firebase/Firebase';
import { Row, Grid } from "react-native-easy-grid";

export class QuestionDetailPage extends Component {

    render() {
        const firebaseDb = InitializeFireBaseDb();
        firebaseDb.database().ref("/").on('value', (snapshot => { console.log(snapshot.val()) }));
        return (
            <Container>
                <Grid>
                    <Row>
                        <Content>
                            <H3>{this.props.route.params.title}</H3>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <Text>Soru İçeriği</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({
//   lineHeight: {
//     lineHeight: 22
//   }
// });

export default QuestionDetailPage;
