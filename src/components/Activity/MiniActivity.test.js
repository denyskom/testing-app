import React from 'react'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MiniActivity from "./MiniActivity";
import {Link} from 'react-router-dom'
import routes from '../Main/Routes';



configure({adapter: new Adapter()});

describe('<MiniActivity /> :', () => {
    let wrapper;
    let activity = {
        title: 'Title',
        id: '1',
        description: "Activity description",
        isActive: true,
    };


    beforeEach(() => {
        wrapper = shallow(<MiniActivity activity={activity}/>);
    });


    it('should render activity card with class border-success if activity is active',
        () => {
            expect(wrapper.hasClass('min-activity card border-success')).toBeTruthy();
        });

    it('should render activity card with class border-secondary if activity is not active',
        () => {
            wrapper = shallow(<MiniActivity activity={{...activity, isActive: false}}/>);
            expect(wrapper.hasClass('min-activity card border-secondary')).toBeTruthy();
        });

    it(`should render h4 element with text equal to \'${activity.title}\'`,
        () => {
            expect(wrapper.find('h4').text()).toEqual(activity.title);
        });

    it(`should render Link component with prop \'to\' equal to \'${routes.appActivities}/${activity.id}\'`,
        () => {
            expect(wrapper.find(Link).prop('to')).toEqual(`${routes.appActivities}/${activity.id}`);
        });

    it(`should render \'p\' component with text equal to \'${activity.description}\'`,
        () => {
            expect(wrapper.find('p').text()).toEqual(activity.description);
        });

});