import React, { Component } from "react";
import { Footer, FooterTab, Button, Text } from "native-base";

export class FooterComp extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active>
            <Text>Ana Ekran</Text>
          </Button>
          <Button>
            <Text>Testler</Text>
          </Button>
          <Button>
            <Text>Çıkmış Sorular</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterComp;
