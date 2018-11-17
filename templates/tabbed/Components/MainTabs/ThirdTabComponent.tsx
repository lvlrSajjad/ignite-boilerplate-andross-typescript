import * as React from 'react'
import {Component} from 'react';
import ExampleComponent from '../ExampleComponent'

export default class ThirdTabComponent extends Component {
  render() {
    return (<ExampleComponent title='SecondTab'/>);
  }
}
