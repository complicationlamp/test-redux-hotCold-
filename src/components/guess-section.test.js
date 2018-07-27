import React from 'react';
import {shallow} from 'enzyme';

import { GuessSection } from './guess-section';

describe('<Guess-section/>', () => {
	it('Should render without crashing', () => {
		shallow(<guessSection/>)
	});