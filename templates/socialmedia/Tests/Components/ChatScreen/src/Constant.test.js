import * as Constant from '../../../../App/Components/ChatScreen/src/Constant'

it('should compare Constant with snapshot', () => {
  expect(Constant).toMatchSnapshot()
})
