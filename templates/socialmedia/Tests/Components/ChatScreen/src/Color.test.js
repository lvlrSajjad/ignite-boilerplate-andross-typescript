import Color from '../../../../App/Components/ChatScreen/src/Color'

it('should compare Color with snapshot', () => {
  expect(Color).toMatchSnapshot()
})
