import React from 'react';
import {shallow, mount} from 'enzyme';

import { TopNav } from './top-nav';
import { RESTART_GAME } from '../actions';

describe('<TopNav/>', () => {
	it('Should render without crashing', () => {
		shallow(<topNave/>)
	});

	it('Should dispatch restartGame', () => {
		const dispatch = jest.fn();
		const wrapper =shallow(<TopNav dispatch={dispatch}/>);
		const link = wrapper.find('.new');
		link.simulate('click');
		expect(dispatch).toHaveBeenCalled();
		const action = dispatch.mock.calls[0][0];
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(action.correctAnswer).toBeLessThanOrEqual(100);
	})
});