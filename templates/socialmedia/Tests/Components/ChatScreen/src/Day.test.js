import 'react-native'
import React from 'react'
import createComponentWithContext from '../context'

import { Day } from '../../../../App/Components/ChatScreen/src/GiftedChat'

it('should render <Day /> and compare with snapshot', () => {
  const component = createComponentWithContext(<Day />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
