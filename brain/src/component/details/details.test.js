import React from 'react';
import Details from '../Details';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import {shallow} from 'enzyme'


describe('Details shown', () => {
    it('render App', () => {
        const wrapper = shallow(<Details/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('render the message', () => {
        const wrapper = shallow(
            <Details message="Form builder"/>
        );
        expect(wrapper.prop('message')).toEqual('Form builder');
    });
});


