/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { Blink } from './components/Blink';
import { Greeting } from './components/Greeting';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}

interface State {
  isLoading: boolean;
  tableData: Array<row>;
}

interface row {
  名稱: string;
  簡介: string;
  位置地址: string;
  分類: string;
  聯絡電話: string;
  開放時間: string;
}

export default class App extends React.Component<Props, State> {
  // url:string = 'https://data.hsinchu.gov.tw/OpenData/GetFile.aspx?GUID=297144dc-b8f1-47de-b120-e465a091e413&FM=json';
  url: string = 'https://data.hsinchu.gov.tw/OpenData/GetFile.aspx?GUID=0570716c-9457-4dd0-be91-faf0d2e70248&FM=json';

  myState: State = { isLoading: false, tableData: [] };

  constructor(props: Props) {
    super(props);
    this.state = this.myState;  //init
  }

  showLoading = (isLoading: boolean) => { 
    this.myState.isLoading = isLoading;
    this.setState(this.myState);
  }

  getData() {
    this.showLoading(true);

    fetch(this.url)
        .then(resp => resp.json())
        .then(r => {

            this.showLoading(false);
            this.myState.tableData = r.Table;
            
            // for (let r of this.myState.tableData) {
            //   console.log('row ', r.名稱);
            // }
            this.setState(this.myState);
        })
        .catch(err => console.log(`Error: `, err));
  }

  onPress = () => this.getData();

  componentDidMount() { }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} size="large" color="#0000ff"
                           style = {{ opacity : this.state.isLoading ? 1 : 0 }}>
        </ActivityIndicator>
        <Button onPress={ this.onPress } title="Get Data" color="#841584" disabled={ this.state.isLoading }
                accessibilityLabel="Learn more about this purple button"></Button>
        { this.state.tableData.length > 0 &&
      //   <FlatList
      //   data={[{key: 'a'}, {key: 'b'}]}
      //   renderItem={({item}) => <Text>{item.key}</Text>}
      // />
        <FlatList data={ this.state.tableData}
            renderItem={({item}) => <Text> {item.名稱}</Text>}
        >
        </FlatList>
          // <FlatList data={ this.state.tableData}>
          //     renderItem={({item}) => <Text> {item.名稱}</Text>}
          // </FlatList>
        }

        {/* <Blink text="Blink text"></Blink>
        <Greeting name="Greeting Compoent text"></Greeting>
        <Text style={styles.welcome}>
          Welcome to Chifu!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#80ff80'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
