import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NavigationBar from '../../../_components/Common/NavigationBar';

const setUp = (props = {}) => {
    const component = shallow(<NavigationBar {...props} />);
    return component;
};

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Navigation bar component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });
});
