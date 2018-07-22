import React from "react";
import {Text} from 'react-native';

export interface Props { 
  name?: string;
}
interface State {
  
}

export class Greeting extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
    }
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
  }