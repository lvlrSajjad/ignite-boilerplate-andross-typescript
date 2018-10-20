/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//jest.useFakeTimers();
