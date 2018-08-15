import React from 'react';
import Details from './component/details';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

import {shallow} from 'enzyme'


describe('Component render', () => {
    it('Form was render ', () => {
        const wrapper = shallow((
            <Details>
                <form/>
            </Details>
        ));
        expect(wrapper.contains(<form/>)).toEqual(true);
    });

    it('should be defined', () => {
        expect(Details).toBeDefined();
    });
});