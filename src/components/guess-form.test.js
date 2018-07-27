import React from 'react';
import {shallow} from 'enzyme';

import guessForm, { GuessForm } from './guess-form';

describe('<GuessForm/>', () => {
	it('Should render without crashing', () => {
		shallow(<guessForm/>)
	});
});