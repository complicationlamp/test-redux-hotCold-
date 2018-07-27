import React from 'react';
import {shallow} from 'enzyme';

import { GuessCount } from './guess-count';

describe('<Guess-count/>', () => {
	it('Should render without crashing', () => {
		shallow(<guessCount/>)
	});

	it('renders a non-plural feedback', () => {
		let count = 1;
		const wrapper = shallow(<GuessCount guessCount={count}/>)
		//add a wrapper; the wrapper allows us to pull in the data 
		//from the 'count' and asign it to guessCount, which is used
		//in the .js file as props.guessCount//
		expect(wrapper.text()).toEqual(`You've made ${count} guess!`);
	})

	it('renders a plural feedback', () => {
		let count = 13;
		const wrapper = shallow(<GuessCount guessCount={count}/>)
		//add a wrapper; the wrapper allows us to pull in the data 
		//from the 'count' and asign it to guessCount, which is used
		//in the .js file as props.guessCount//
		expect(wrapper.text()).toEqual(`You've made ${count} guesses!`);
	})
})