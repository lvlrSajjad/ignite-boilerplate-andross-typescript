import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import { GiftedAvatar } from '../../../../App/Components/ChatScreen/src/GiftedChat'

it('should render <GiftedAvatar /> and compare with snapshot', () => {
  const tree = renderer.create(<GiftedAvatar />).toJSON()

  expect(tree).toMatchSnapshot()
})
