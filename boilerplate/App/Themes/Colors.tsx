const colors = {
  background: "#1F0808",
  clear: "rgba(0,0,0,0)",
  facebook: "#3b5998",
  transparent: "rgba(0,0,0,0)",
  silver: "#F7F7F7",
  steel: "#CCCCCC",
  error: "rgba(200, 0, 0, 0.8)",
  ricePaper: "rgba(255,255,255, 0.75)",
  frost: "#D8D8D8",
  cloud: "rgba(200,200,200, 0.35)",
  windowTint: "rgba(0, 0, 0, 0.4)",
  panther: "#161616",
  charcoal: "#595959",
  coal: "#2d2d2d",
  bloodOrange: "#fb5f26",
  snow: "white",
  ember: "rgba(164, 0, 48, 0.5)",
  fire: "#e73536",
  drawer: "rgba(30, 30, 29, 0.95)",
  eggplant: "#251a34",
  border: "#483F53",
  banner: "#5F3E63",
  text: "#E0D7E5",
};

export const primaryColor='#0087EA';
export const primaryColorLight='#0095E1';

//const mode = 2;

export interface ColorScheme {
  fullToneText: string,
  midToneText: string,
  lightText: string,
  fullToneBackground: string,
  midToneBackground: string,
  lightBackground: string,
  cardBackground: string,
  mapStyleUrl: string,
  tabBarBackground: string,
  containersBackground: string
}

export function colorScheme(isDarkMode: boolean): ColorScheme {
  if (!isDarkMode) {
    return {
      fullToneText: '#212121',
      midToneText: '#424242',
      lightText: '#9E9E9E',
      fullToneBackground: '#FAFAFA',
      midToneBackground: '#EEEEEE',
      lightBackground: '#E0E0E0',
      cardBackground: '#FAFAFA',
      mapStyleUrl: 'mapbox://styles/mapbox/light-v9',
      tabBarBackground: '#FAFAFA',
      containersBackground: '#E0E0E0'
    }
  } else {
    return {
      fullToneText: '#FAFAFA',
      midToneText: '#EEEEEE',
      lightText: '#E0E0E0',
      fullToneBackground: '#212121',
      midToneBackground: '#424242',
      lightBackground: '#9E9E9E',
      cardBackground: '#424242',
      mapStyleUrl: 'mapbox://styles/mapbox/dark-v9',
      tabBarBackground: '#424242',
      containersBackground: '#212121'

    }
  }
}

export default colors;
