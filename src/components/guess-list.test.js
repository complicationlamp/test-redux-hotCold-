import React from 'react';
import {shallow} from 'enzyme';

import { GuessList } from './guess-list';

describe('<Guess-list/>', () => {
	it('Should render without crashing', () => {
		shallow(<guessList/>)
	});

	it('Should compare passed in guesses', () => {
		let value= [1, 50, 99];
		const wrapper = shallow(<GuessList guesses={value}/>);
		//wrapper is saying we're passing in guesses with the value = to
		// value, on the GuessList component
		const items = wrapper.find('li');
		//find the li tag, its where the guess is stored
		expect(items.length).toEqual(value.length);

		value.forEach((value, index) => {
			expect(items.at(index).text()).toEqual(value.toString());
			// change the value at each index of the array to a text, 
			//the call toEqual, BUT value has to be stringified so we can compare!
		})
		
	})

})