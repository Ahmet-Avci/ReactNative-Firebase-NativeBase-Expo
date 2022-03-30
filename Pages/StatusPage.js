import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text, List, ListItem, Thumbnail, Button } from "native-base";
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Row, Grid } from "react-native-easy-grid";
import ToastMessage from '../mixins/ToastMessage';
import { AdMobBanner } from 'expo-ads-admob';
import { InitializeFireBaseDb } from '../Firebase/Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StatusPage extends Component {
    state = {
        trueCount: 0,
        falseCount: 0,
        cycleCount: 0,
        user: null,
        leaderBoard: null
    }

    async componentDidMount() {
        ToastMessage.clearToastSquare();
        await this.getAuthUser();
        await this.getAnswerCount();
        await this.AnswerCountInterval();

    }

    async sendScoreForThisUser() {
        const twoDay = 36000000 * 2;
        let score = this.getTotalScore() || 0;
        const lastSendedTime = await AsyncStorage.getItem('lastSendedTime');
        const lastSendedScore = await AsyncStorage.getItem('lastSendedScore');

        if (!lastSendedScore || !lastSendedTime || score > lastSendedScore && new Date(JSON.parse(lastSendedTime) + twoDay) > new Date().getTime()) {
            if (!this.state.leaderBoard) return null;

            let sortedScore = this.state.leaderBoard.sort((a,b) => a.score - b.score);
            const lastUser = sortedScore[0];
            if (score > lastUser.score) {
                sortedScore[sortedScore.length - 1] = {
                    name: this.state.user.name,
                    id: this.state.user.uid,
                    score: score * 10
                }

                const firebaseDb = InitializeFireBaseDb();
                firebaseDb.database().ref("LeaderBoard").set(sortedScore.slice(0,20));
                AsyncStorage.setItem('lastSendedTime', JSON.stringify(new Date().getTime()));
                AsyncStorage.setItem('lastSendedScore', score.toString());
                alert("Tebrikler ilk 20 içerisine girdiniz.");
            } else {
                alert("Puanınız hesaplandı. İlk 20'ye girmek için daha çok soru çözmen gerekecek.");
            }
        } else {
            const destinationDate = new Date(JSON.parse(lastSendedTime) + twoDay).getTime();
            const estimatedDate = ((destinationDate - new Date().getTime()) / 36000000) * 24;
            alert(`Puanınızı göndermek için beklemelisiniz. \n Kalan Zaman: ${estimatedDate.toString().slice(0,2)} saat.`)
        }
    }

    async getAuthUser() {
        const user = await AsyncStorage.getItem("loginUser");
        if (user) {
            this.setState({user: JSON.parse(user)});
        }
    }

    getTotalScore() {
        const totalTrue = 
            this.state.mathtrueCount || 0 +
            this.state.turkishTrueCount || 0 +
            this.state.historyTrueCount || 0 +
            this.state.geographyTrueCount || 0 +
            this.state.citizenTrueCount || 0 +
            this.state.educateTrueCount || 0 +
            this.state.actualTrueCount || 0;

        const totalFalse = 
        this.state.mathfalseCount || 0 +
        this.state.turkishFalseCount || 0 +
        this.state.historyFalseCount || 0 +
        this.state.geographyFalseCount || 0 +
        this.state.citizenFalseCount || 0 +
        this.state.educateFalseCount || 0 +
        this.state.actualFalseCount || 0;

        return (totalTrue - totalFalse) * 10;
    }

    async logout() {
        if (await confirm("Lütfen çıkış yapma isteğinizi onaylayın.")) {
            const firebase = InitializeFireBaseDb();
            await firebase.auth().signOut();
            this.setState({ user: null });
            AsyncStorage.setItem('loginUser', JSON.stringify(null));
        }
    }

    async loginWithGoogle() {
        const firebase = InitializeFireBaseDb();
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        this.setState({ user: {
            name: result.user.displayName,
            uid: result.user.uid,
            avatar: result.user.photoURL
        } });
        AsyncStorage.setItem(
            'loginUser',
            JSON.stringify(this.state.user)
          );
        console.log('loginResult: ', result);
    };

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

    async openBoardAlert() {
        const twoDay = 36000000 * 2;
        const storedDate = await AsyncStorage.getItem('leaderBoardStoredDate')
        let leaderBoard = await AsyncStorage.getItem("leaderBoard");

        if (!leaderBoard || !storedDate || (storedDate && new Date(JSON.parse(storedDate) + twoDay) < new Date().getTime())) {
            const firebaseDb = InitializeFireBaseDb();
            firebaseDb.database().ref("LeaderBoard").on('value', (snapshot => {
                if (snapshot.val()) {
                    leaderBoard = snapshot.val();
                    this.setState({ leaderBoard: leaderBoard });
                    AsyncStorage.setItem("leaderBoard",  JSON.stringify(leaderBoard));
                    AsyncStorage.setItem("leaderBoardStoredDate", JSON.stringify(new Date().getTime()));
                }
            }));
        }

        if (leaderBoard) {
            const board = this.state.leaderBoard || JSON.parse(leaderBoard);
            let order = 0;
            let message = "Sıralama 2 günde bir güncellenir\n";
            const sortedUsers = board.sort((a,b) => b.score - a.score);
            sortedUsers.forEach(user => {
                order += 1;
                message += `${order}: ${user.name} > Puan: ${user.score}\n`;
            });
            
            alert(message);
        }
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
                            {
                                this.state.user && this.state.user.avatar
                                    ? 
                                            <Body>
                                                <Thumbnail source={{ uri: this.state.user.avatar }} />
                                                <Text>Hoşgeldin {this.state.user.name}</Text>
                                                <Text>Toplam Puanın: {this.getTotalScore() || 0}</Text>
                                                <Button style={{ alignItems: "center", alignSelf: "center" }} onPress={() => this.openBoardAlert()} transparent>
                                                    <Ionicons name="ios-trophy" size={35} color="#e28743" />
                                                </Button>
                                                <Button onPress={() => this.sendScoreForThisUser()} full bordered success>Puan Gönder</Button>
                                                <Text> </Text>
                                            </Body>
                                        : 
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>
                                                        Giriş yaptıysanız sıralamanız gösterilecektir.
                                                    </Text>
                                                    <Text>
                                                        Sıralama sonuçları haftada bir yenilenecektir.
                                                    </Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                            }
                            {
                                this.state.user 
                                ? 
                                    <Button onPress={() => this.logout()} full bordered info>
                                        <Text>Çıkış Yap</Text>
                                    </Button>
                                : <Button onPress={() => this.loginWithGoogle()} full bordered info>
                                    <Text>Sıralama için Giriş Yap</Text>
                                    </Button>
                            }
                            <List>
                                <ListItem itemDivider>
                                    <Text>Matematik</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.mathtrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.mathfalseCount || 0}</Text>
                                    </Body>
                                    
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Türkçe</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.turkishTrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.turkishFalseCount || 0}</Text>
                                    </Body>
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Tarih</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.historyTrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.historyFalseCount || 0}</Text>
                                    </Body>
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Coğrafya</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.geographyTrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.geographyFalseCount || 0}</Text>
                                    </Body>
                                    
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Vatandaşlık</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                    <Text>Doğru: {this.state.citizenTrueCount || 0}</Text>
                                    <Text> </Text>
                                    <Text>Yanlış: {this.state.citizenFalseCount || 0}</Text>
                                    </Body>
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Eğitim Bilimleri</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.educateTrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.educateFalseCount || 0}</Text>
                                    </Body>
                                    
                                </ListItem>

                                <ListItem itemDivider>
                                        <Text>Güncel Bilgiler</Text>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text>Doğru: {this.state.actualTrueCount || 0}</Text>
                                        <Text> </Text>
                                        <Text>Yanlış: {this.state.actualFalseCount || 0}</Text>
                                    </Body>
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
