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
    choices: [
      'Simple Screen',
      'Collapsible Toolbar Screen',
      'Material Backdrop Screen',
      'Bottom Tabbed Screen',
      'Top Tabbed Screen',
      'Navigation Drawer Screen',
      'Collapsible Toolbar Screens With Drawer Navigation',
      'Social Media Screen'
    ]
  },
]

const nologin = {
  'login-screen': 'No Login Screen'
}

const smslogin = {
  'login-screen': 'Sms Login Screen'
}

const simplelogin = {
  'login-screen': 'Simple Login Screen'
}

const simple = {
  'main-screen': 'Simple Screen'
}

const collapsible = {
  'main-screen': 'Collapsible Toolbar Screen'
}

const backdrop = {
  'main-screen': 'Material Backdrop Screen'
}

const bottom = {
  'main-screen': 'Bottom Tabbed Screen'
}

const top = {
  'main-screen': 'Top Tabbed Screen'
}

const drawer = {
  'main-screen': 'Navigation Drawer Screen'
}

const cdrawer = {
  'main-screen': 'Collapsible Toolbar Screens With Drawer Navigation'
}

const smedia = {
  'main-screen': 'Social Media Screen'
}
/**
 * The min preset.
 */
const min = {
  'login-screen': 'No Login Screen',
  'main-screen': 'Simple Screen'
}

module.exports = {
  questions,
  answers: { min, nologin, simplelogin, smslogin, simple, collapsible,backdrop,bottom,top,drawer,cdrawer,smedia }
}
