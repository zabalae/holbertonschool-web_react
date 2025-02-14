import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Basic React Tests - <Notifications />', function() {
	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
	];

	it('Should render without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render NotificationItem elements', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('NotificationItem')).toBeTruthy();
	});

	it('Should render the right html into the first NotificationItem element', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
		expect(wrapper.find('NotificationItem').first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>'
		);
	});

	it('Should render the correct string', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.Notifications p').text()).toEqual(
			('Here is the list of notifications')
		);
	});

	it('When displayDrawer is false - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

	it('When displayDrawer is false - Should check that the div.Notifications is not being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('div.Notifications')).toHaveLength(0);
	});

	it('When displayDrawer is true - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

	it('When displayDrawer is true - Should check that the div.Notifications is not being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('div.Notifications')).toHaveLength(1);
	});
});

describe('Basic React Tests - <Notifications list />', function() {
	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
	];

	it('Should check that Notifications renders correctly if pass an empty array', () => {
		const newArray = [];
		const wrapper = shallow(<Notifications displayDrawer listNotifications={newArray} />);
		expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
	});

	it('Should check that Notifications renders correctly if don’t pass the listNotifications property', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
	});

	it('When pass list of notifications - Should check that renders it correctly and with the right number of NotificationItem', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		expect(wrapper.find('NotificationItem')).toHaveLength(3);
	});

	it('When listNotifications is empty, Should check not renders the message "Here is the list of notifications"', () => {
		const newArray = [];
		const wrapper = shallow(<Notifications displayDrawer listNotifications={newArray} />);
		expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default">Here is the list of notifications</li>');
	});
});