import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import CourseList from '../CourseList/CourseList';

describe('Basic React Tests - <App />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should contain the Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Notifications')).toHaveLength(1);
	});

	it('Should contain the Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header')).toHaveLength(1);
	});

	it('Should contain the Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Login')).toHaveLength(1);
	});

	it('Should contain the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer')).toHaveLength(1);
	});

	it('Should check that CourseList is not displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('CourseList')).toHaveLength(0);
	});
});

describe('Basic React Tests - When isLoggedIn is true,', function() {
	it('Should verify that the Login component is not included', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find('Login')).toHaveLength(0);
	});

	it('Should verify that the CourseList component is included', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find('CourseList')).toHaveLength(1);
	});
});