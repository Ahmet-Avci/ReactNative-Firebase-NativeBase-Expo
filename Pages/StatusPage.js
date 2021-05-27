import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text, List, ListItem, Left, Right, Badge } from "native-base";
import { StyleSheet } from 'react-native';
import { Row, Grid } from "react-native-easy-grid";
import ToastMessage from '../mixins/ToastMessage';
import { AdMobBanner } from 'expo-ads-admob';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StatusPage extends Component {
    state = {
        trueCount: 0,
        falseCount: 0,
        cycleCount: 0
    }

    async componentDidMount() {
        ToastMessage.clearToastSquare();
        await this.getAnswerCount();
        await this.AnswerCountInterval();
    }

    async getAnswerCount() {
        let mathTrue = await AsyncStorage.getItem("MatematiktrueTotal");
        let mathFalse = await AsyncStorage.getItem("MatematikfalseTotal");

        if (mathTrue || mathFalse) {
            this.setState({ mathtrueCount: parseInt(mathTrue) || 0 });
            this.setState({ mathfalseCount: parseInt(mathFalse) || 0 });
        }

        let turkishTrue = await AsyncStorage.getItem("TurkcetrueTotal");
        let turkishFalse = await AsyncStorage.getItem("TurkcefalseTotal");

        if (turkishTrue || turkishFalse) {
            this.setState({ turkishTrueCount: parseInt(turkishTrue) || 0 });
            this.setState({ turkishFalseCount: parseInt(turkishFalse) || 0 });
        }

        let historyTrue = await AsyncStorage.getItem("TarihtrueTotal");
        let historyFalse = await AsyncStorage.getItem("TarihfalseTotal");

        if (historyTrue || historyFalse) {
            this.setState({ historyTrueCount: parseInt(historyTrue) || 0 });
            this.setState({ historyFalseCount: parseInt(historyFalse) || 0 });
        }

        let geographyTrue = await AsyncStorage.getItem("CografyatrueTotal");
        let geographyFalse = await AsyncStorage.getItem("CografyafalseTotal");

        if (geographyTrue || geographyFalse) {
            this.setState({ geographyTrueCount: parseInt(geographyTrue) || 0 });
            this.setState({ geographyFalseCount: parseInt(geographyFalse) || 0 });
        }

        let citizenTrue = await AsyncStorage.getItem("VatandasliktrueTotal");
        let citizenFalse = await AsyncStorage.getItem("VatandaslikfalseTotal");

        if (citizenTrue || citizenFalse) {
            this.setState({ citizenTrueCount: parseInt(citizenTrue) || 0 });
            this.setState({ citizenFalseCount: parseInt(citizenFalse) || 0 });
        }

        let educateTrue = await AsyncStorage.getItem("EgitimtrueTotal");
        let educateFalse = await AsyncStorage.getItem("EgitimfalseTotal");

        if (educateTrue || educateFalse) {
            this.setState({ educateTrueCount: parseInt(educateTrue) || 0 });
            this.setState({ educateFalseCount: parseInt(educateFalse) || 0 });
        }

        let actualTrue = await AsyncStorage.getItem("GunceltrueTotal");
        let actualFalse = await AsyncStorage.getItem("GuncelfalseTotal");

        if (actualTrue || actualFalse) {
            this.setState({ actualTrueCount: parseInt(actualTrue) || 0 });
            this.setState({ actualFalseCount: parseInt(actualFalse) || 0 });
        }
    }

    async AnswerCountInterval() {
        setTimeout(() => {
            setInterval(() => {
                this.getAnswerCount();
            }, 10000)
        }, 25000);
    }

    render() {
        return (
            <Container>
                <AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-5292572003338215/1308855193"
                    servePersonalizedAds
                    onDidFailToReceiveAdWithError={this.bannerError}
                    style />
                <Grid>
                    <Row>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Body>
                                        <Text style={styles.line}>
                                            Yakın zamanda uygulamayı kullanan tüm kullanıcılar arasında istatiklerinize göre sıralamada yer edineceksiniz. Soru çözmeye devam!
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <List>
                                <ListItem itemDivider>
                                    <Left iconRight light>
                                        <Text>Matematik İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.mathtrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.mathfalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left iconRight light>
                                        <Text>Türkçe İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.turkishTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.turkishFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Left iconRight light>
                                        <Text>Tarih İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.historyTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.historyFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left iconRight light>
                                        <Text>Coğrafya İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.geographyTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.geographyFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Left iconRight light>
                                        <Text>Vatandaşlık İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.citizenTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.citizenFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left iconRight light>
                                        <Text>Eğitim Bilimleri İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.educateTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.educateFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                                <ListItem itemDivider>
                                    <Left iconRight light>
                                        <Text>Güncel Bilgiler İstatistikleri:</Text>
                                    </Left>
                                    <Right>
                                        <Badge success>
                                            <Text>{this.state.actualTrueCount || 0}</Text>
                                        </Badge>
                                        <Badge danger>
                                            <Text>{this.state.actualFalseCount || 0}</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        lineHeight: 22
    }
});

export default StatusPage;
