import React from 'react';
import {shallow} from 'enzyme';

import { Feedback } from './feedback';

describe ('feedback', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback/>);
	});

	it('Renders the feedback with no guess', () => {
		let TEST_FEEDBACK = 'You are listening to a game!';

		let wrapper	= shallow(<Feedback feedback={TEST_FEEDBACK} />);
		expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true)

		// const key = [0];
		// const text = 'Make your guess!'
		// expect(feedback.props()).toEqual(text);
	});


})