import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { InputToolbar } from '../../../../App/Components/ChatScreen/src/GiftedChat'

it('should render <InputToolbar /> and compare with snapshot', () => {
  const tree = renderer.create(<InputToolbar />).toJSON()

  expect(tree).toMatchSnapshot()
})
