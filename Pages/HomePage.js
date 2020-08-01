import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import { StyleSheet } from 'react-native';
import { Row, Grid } from "react-native-easy-grid";

export class HomePage extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row>
                        <Content>
                            <Card>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={styles.lineHeight}>
                                            Zaman zaman kendimize sorular sorarken bulduk kendimizi,
                                            kimi zaman ya olmazsa dedik, ya kazanamazsam... Ama her
                                            defasında toparlanmak için bir sebebimiz vardı. En geçerli
                                            sebep… Hayallerimiz! Şimdi bu hayalleri gerçekleştirmeye
                                            çok yakınız. Her şey bizim elimizde. Biz istersek yaparız,
                                            istemezsek tüm bu hayaller kuş olup uçar ve bize de sadece
                                            izlemek kalır.. Peki bunca zamandan sonra yeniden
                                            toparlanmanın, yüksek puan almanın bir yolu yok mu? Gelin
                                            adım adım neler yapacağımızı birlikte öğrenelim.
                      {"\n"}
                                            {"\n"}
                                        </Text>
                                        <Text style={styles.lineHeight}>
                                            1- Test Çözme Becerinizi Arttırın: Bir konuyla ilgili
                                            soruları çözmeden önce o konuyu iyi öğrenmelisiniz. Soru
                                            çözerek de öğrenip öğrenmediğinizi kontrol etmiş
                                            olursunuz. Amaç KPSS’de başarılı olmak ise KPSS niteliğine
                                            uygun sorular çözmelisiniz. Soruları kendinize zaman
                                            tanıyarak çözün. Çünkü gerçek sınav sadece bilginizi değil
                                            bilgi kullanma hızınızı da ölçmektedir. Her sorunun size
                                            sınavda sorulabileceğini düşünerek yanıtlamaya çalışın.
                                            Çözemediğiniz veya yanlış çözdüğünüz sorunun mutlaka doğru
                                            çözümünü öğrenin. Soruyu çok fazla okuyarak zihninizi
                                            karıştırmayın. Soruyu çözmenizi sağlayacak soru metninde
                                            yer alan önemli kelimelerin altını çizin. Her gün belirli
                                            miktarda soru çözmeye çalışın. Soru çözmek sizde bir
                                            alışkanlık olsun.
                      {"\n"}
                                            {"\n"}
                                        </Text>
                                        <Text style={styles.lineHeight}>
                                            2- Soru Çözün Hergün en az iki test çözün.(60 soru) Bu
                                            çalışmanın amacı da bilgileri taze tutmak ve tekrar
                                            yapabilmektir. Cevaplarınızı kitabın üstüne işaretleyin.
                                            Yanlış yaptığınız sorular ve yapamadığınız sorular için
                                            konu anlatımlı kitabınıza bakın. İhtiyaç duyarsanız yine
                                            kısa kısa notlar alın. KPSS’ye girene kadar her gün bu
                                            şekilde çalışmaya devam edin. KPSS ‘de uzun ve yorumlamaya
                                            yönelik çok fazla soru çıkmaktadır. Bu sorular kişiye
                                            ciddi anlamda zaman kaybettirdiğinden birçok kişi sınavı
                                            tam olarak bitiremez. Bu sebeple de ciddi miktarda soru
                                            çözülmeli ve uzun paragraflar için ilginç metotlar
                                            üretilmelidir. Önce şıkları okumak, cümlenin son
                                            paragrafını okumak ve paragrafları bölümlere ayırmak bu
                                            sisteme uygun metotlardır. KPSS bilgiye olduğu kadar hıza
                                            da dayalı bir sınavdır. Sınavda size ek olarak süre
                                            sağlayacak en sağlam metot ise sorulara sondan
                                            başlamaktır. KPSS’ de birçok kişinin de dikkatini
                                            çekebileceği gibi ilk 10 soru içerisinde düşündürücü ve
                                            zaman kaybettiren sorular vardır. Kişi sondan başladığı
                                            takdirde en sonunda bu sorularla ilgileneceğinden zaman
                                            kaybetmeyecektir. Test çözerken KPSS’ nin sizin için
                                            hazırladığı soru düzenini kullanmayın. Öncelikli olarak en
                                            iyi yaptığınız soruları çözerek hem moralinizi hem de
                                            isteğinizi arttırın. Bu sayede diğer sorularla uğraşırken
                                            daha zinde olursunuz.
                      {"\n"}
                                            {"\n"}
                                        </Text>
                                        <Text style={styles.lineHeight}>
                                            3- Ders Atlamayın! Matematiksiz de yaparım!, Coğrafyadan
                                            anlamıyorum. Anayasa çok karışık söylemlerinden vazgeçin.
                                            KPSS’den yüksek puan almak istiyorsanız, hepsine
                                            çalışmalı, eksiklerimizi kesinlikle tamamlamalıyız!
                      {"\n"}
                                            {"\n"}
                                        </Text>
                                        <Text style={styles.lineHeight}>
                                            4- Konuları Anlayarak Çalışın! KPSS’den yüksek not almanın
                                            temel yolu, bilgiyi akılda tutmaktır. Bilgiyi akılda
                                            tutmanın en temel yolu ise onu tekrarlamaktır.
                                            Tekrarlamanın en kolay yolu da özet çıkarmaktır. Ne
                                            çalışırsanız çalışın, çalıştıklarınızdan notlar alın ve
                                            sık sık tekrarlayın. Bu kesinlikle zaman kaybı değildir.
                                            Önemli olan bilgiyi öğrenmek değil, akılda tutup, zamanı
                                            gelince de uygulayabilmektir. Hayali kuran sizsiniz.. Bunu
                                            gerçekleştirmek isteyen de.. Şimdi bu kadar yakınken geri
                                            dönmek olmaz! Benjamin Franklin’in dediği gibi; "Yapmak
                                            istediğin her şeyi düşünerek karar ver, verdiğin kararı da
                                            mutlaka gerçekleştir.’’
                    </Text>
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

const styles = StyleSheet.create({
    lineHeight: {
        lineHeight: 22
    }
});

export default HomePage;
