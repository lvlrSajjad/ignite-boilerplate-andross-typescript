import * as React from 'react'
import {Component} from 'react';
import {connect} from "react-redux";
import {Container} from "native-base";
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MapboxConfig from "../../Config/MapboxConfig";
import {colorScheme} from "../../Themes/Colors";

MapboxGL.setAccessToken(MapboxConfig.accessToken);

interface LocationTabProps {
  isDarkMode?:boolean
}

class LocationTab extends Component<LocationTabProps> {
  render() {
    const ColorScheme = colorScheme(this.props.isDarkMode);

    return (
      <Container>
          <MapboxGL.MapView
            styleURL={ColorScheme.mapStyleUrl}
            zoomLevel={15}
            centerCoordinate={[51.3890,35.6892]}
            style={{flex:1}}
           >
          </MapboxGL.MapView>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDarkMode:state.isDarkMode.isDarkMode
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LocationTab);
