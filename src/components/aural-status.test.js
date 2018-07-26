import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';
import { prependOnceListener } from 'cluster';

describe('auralStatus', () => {
	it('renders without crashing', () => {
		shallow(<p id="status-readout"
		className="visuallyhidden"
		aria-live="assertive"
		aria-atomic="true"/>
		);
	})
})