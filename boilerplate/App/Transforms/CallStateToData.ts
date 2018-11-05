interface callData {
  text: string,
  color: string,
  icon: string,
}

export default function callStateDataChooser (state: number) : callData {
  switch (state){
    case 0 : return {
      text: 'No response',
      color: 'red',
      icon: 'call-missed'
    };
    case 1: return {
      text: 'Successful',
      color: 'green',
      icon: 'call-made'
    };
    case 2: return {
      text: 'Rejected',
      color: 'red',
      icon: 'call-missed-outgoing'
    };
    default: return {
      text: 'Unknown',
      color: 'red',
      icon: 'call-missed-outgoing'
    }
  }
}
