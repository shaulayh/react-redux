import React from 'react';
import Details from '../Details';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import {shallow, render} from 'enzyme'



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

    it('calls correct function to save the information', () => {
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(
            <Details
                onSubmit={onButtonClickMock}
            />,
        );

        const buttonMock = wrapper.contains('[type="submit"]'); // step 1 above


        // expect(onButtonClickMock).toHaveBeenCalledTimes(1); // step 3
        // expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });

});


