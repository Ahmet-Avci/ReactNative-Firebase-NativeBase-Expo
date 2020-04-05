import React, { Component } from "react";
import { List, ListItem, Text } from "native-base";

export class QuestinListComp extends Component {
  render() {
    return (
      <List>
        <ListItem itemDivider>
          <Text>Giriş Seviyesi Testler</Text>
        </ListItem>
        <ListItem>
          <Text>Giriş 1</Text>
        </ListItem>
        <ListItem>
          <Text>Giriş 2</Text>
        </ListItem>
        <ListItem>
          <Text>Giriş 3</Text>
        </ListItem>
        <ListItem>
          <Text>Giriş 4</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>Orta Seviye Testler</Text>
        </ListItem>
        <ListItem>
          <Text>Orta Seviye 1</Text>
        </ListItem>
        <ListItem>
          <Text>Orta Seviye 1</Text>
        </ListItem>
        <ListItem>
          <Text>Orta Seviye 1</Text>
        </ListItem>
        <ListItem>
          <Text>Orta Seviye 1</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>Zor Seviye Testler</Text>
        </ListItem>
        <ListItem>
          <Text>Zor Seviye 1</Text>
        </ListItem>
        <ListItem>
          <Text>Zor Seviye 2</Text>
        </ListItem>
        <ListItem>
          <Text>Zor Seviye 3</Text>
        </ListItem>
        <ListItem>
          <Text>Zor Seviye 4</Text>
        </ListItem>
      </List>
    );
  }
}

export default QuestinListComp;
