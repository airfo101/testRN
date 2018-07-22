import React from "react";
import {Text} from 'react-native';

export interface Props {
    text: string;
  }
  
  interface State {
    isShowingText: boolean;
  }

export class Blink extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {isShowingText: true };
  
      //Toggle the state
      setInterval(() => {
        this.setState(previousStage => {
          return { isShowingText: !previousStage.isShowingText }
        })
      }, 1000);
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text: ' ';
      return (
        <Text style={{ color: '#ff8000'}}>{display}</Text>
      );
    }
  }