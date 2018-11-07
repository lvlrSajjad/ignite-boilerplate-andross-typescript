/**
 * The questions to ask during the install process.
 */
const questions = [
  {
    name: 'login-screen',
    message: 'Choose Login Screen ',
    type: 'list',
    choices: ['No Login Screen','Simple Login Screen', 'Sms Login Screen']
  },
  {
    name: 'main-screen',
    message: 'Choose Main Screen ',
    type: 'list',
    choices: ['Simple Screen','Tabbed Screen', 'Navigation Drawer Screen','Social Media Screen']
  },
]

/**
 * The max preset.
 */
const max = {
  'dev-screens': 'Yes',
  'vector-icons': 'react-native-vector-icons',
  i18n: 'react-native-i18n',
  animatable: 'react-native-animatable',
  'redux-persist': 'Yes'
}

/**
 * The min preset.
 */
const min = {
  'dev-screens': 'No',
  'vector-icons': 'none',
  i18n: 'none',
  animatable: 'none',
  'redux-persist': 'No'
}

module.exports = {
  questions,
  answers: { min, max }
}
