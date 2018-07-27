import React from 'react';
import {shallow, mount} from 'enzyme';

import { GuessForm } from './guess-form';
import { makeGuess} from '../actions';
import { wrap } from 'module';

describe('<GuessForm/>', () => {
	it('Should render without crashing', () => {
		shallow(<guessForm/>)
	});

	it('Should dispatch makeGuess', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch}/>);
		const guess = '33';
		wrapper.find('input[type="number"]').instance().value = guess;
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
	});

	it('Shouold clear the input field after submit', () => {
		const wrapper = mount(<GuessForm dispatch={() => {}} />);
		const input = wrapper.find('input[type="number"]');
		input.instance().value = '10';
		wrapper.simulate('submit');
		expect(input.instance().value).toEqual('')
	});
});