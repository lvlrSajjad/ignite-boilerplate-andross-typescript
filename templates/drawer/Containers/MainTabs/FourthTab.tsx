import * as React from 'react'
import {Component} from 'react';
import {Col, Container, Grid, Row} from 'native-base';
import metrics from "../../Themes/Metrics";
import styles from "../Styles/LaunchScreenStyles";
import {Images} from "../../Themes";
import {
  ScrollView, Text, Image, View
} from "react-native";
import {connect} from "react-redux";
import NavHeaders from "../../Components/NavHeaders";
import { DrawerActions } from 'react-navigation-drawer';

class FourthTab extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
        <NavHeaders onPress={()=>{this.props.navigation.dispatch(DrawerActions.toggleDrawer())}} title="Fourth"/>

        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              FourthTab.
            </Text>
          </View>

        </ScrollView>
      </View>
    );
  }
  // render() {
  //   return (
  //     <Container>
  //       <Content>
  //         <FlatList
  //           data={dummyChatsData}
  //           keyExtractor={item => item.id.toString()}
  //           renderItem={({item}) => this.renderListItems(item)}
  //         />
  //       </Content>
  //     </Container>
  //
  //   );
  // }
  renderListItem() {
    return (
      <Container>
        <Grid>
            <Col style={{backgroundColor: '#00CE9F', width:2*metrics.screenWidth/3, height: '100%'}}/>
            <Col>
            <Row style={{backgroundColor: '#635DB7', height: '50%'}}/>
            <Row style={{backgroundColor: '#00CE9F', height: '50%'}}/>
            </Col>
        </Grid>
      </Container>
    );
  }
}
//const mapStateToProps = state => ({});

//const mapDispatchToProps = dispatch => ({});

export default connect(/**mapStateToProps*/ null,/** mapDispatchToProps*/null)(FourthTab);
