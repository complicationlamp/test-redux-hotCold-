import React from 'react';
import {shallow} from 'enzyme';

import { InfoSection } from './info-section';

describe('<info-section/>', () => {
	it('Should render without crashing', () => {
		shallow(<infoSection/>)
	});
});