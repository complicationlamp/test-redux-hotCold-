import React from 'react';
import {shallow} from 'enzyme';

import { StatusSection } from './status-section';

describe('<Status-section/>', () => {
	it('Should render without crashing', () => {
		shallow(<statusSection/>)
	});
});