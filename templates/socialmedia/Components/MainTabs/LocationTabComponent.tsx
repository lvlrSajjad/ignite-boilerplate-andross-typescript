import * as React from 'react'
import {Container} from "native-base";
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import MapboxConfig from "../../Config/MapboxConfig";
import {ColorScheme} from "../../Themes/Colors";

MapboxGL.setAccessToken(MapboxConfig.accessToken);

interface LocationTabProps {
  isDarkMode?:boolean,
  colorScheme:ColorScheme
}

export default class LocationTabComponent extends React.Component<LocationTabProps> {
  render() {
    const ColorScheme = this.props.colorScheme;

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
