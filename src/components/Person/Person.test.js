import React from 'react'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Person} from "./Person";
import Spinner from '../Spinner/Sprinner'
import {Link, Redirect} from 'react-router-dom'
import routes from '../Main/Routes';
import * as ls from '../../utils/localStorage'

configure({adapter: new Adapter()});

describe('<Person />', () => {
    let wrapper;

    beforeEach(() => {
        ls.setLocalStorage();
        wrapper = shallow(<Person auth={auth} errors={errors}/>);
    });

    it('should redirect to login page if there is no jwtToken in localStorage', () => {
        localStorage.removeItem('jwtToken');
        wrapper = shallow(<Person auth={auth} errors={errors}/>);
        expect(wrapper.contains(<Redirect to={`../../${routes.appLoginRelative}`}/>)).toBeTruthy();
    });

    it('should redirect to logout page when state.redirect equal \'true\'', () => {
        wrapper.setState({redirect:true});
        expect(wrapper.contains(<Redirect to={`../../${routes.appLogoutRelative}`}/>)).toBeTruthy();
    });


    it('should render spinner is state.isLoaded false',
        () => {
            wrapper.setState({isLoaded: false});
            expect(wrapper.find(Spinner)).toHaveLength(1);
        });


});

const auth = {
    isAuthenticated: true,
    user: {
        id: '5b617856497f391861e432d8',
        photo: 'https://avatarfiles.alphacoders.com/974/97459.jpg',
        iat: 1533566819,
        exp: 1533570419,
        university: '',
        faculty: '',
        course: '1',
        events: '',
        whyIT: '',
        technologies: '',
        mainInJob: 'Висока заробітня плата',
        positiveSides: '',
        negativeSides: '',
        auth: 'user',
        _id: '5b617856497f391861e432d8',
        firstName: 'Mark',
        lastName: 'Ruffalo',
        password: '$2b$10$b1gHfI3wPv.lXmjSC3ruhO3p8ryV.0y87e8nwz1j1msqSCrgDIiYS',
        email: 'okhulk@gmail.com',
        phone: '0675523092',
        birth_date: '2018-08-08T00:00:00.000Z',
        english: 'початковий (читаю та пишу зі словником)',
        basics: '',
        literature: '',
        activities: [
            {
                isActive: false,
                _id: '5b6182206ab06f1d8b3b7c62',
                id: '5b518534b7081420082ec14f',
                title: '9th season of InterLink inCamp',
                description: 'Оголошуємо набір для студентів на 9 сезон інтернатури inCamp! На тебе очікує захоплююча подорож у розробку web-додатків. За 3 місяці ти отримаєш досвід frontend та backend розробки, командної роботи, застосуєш принципи Agile на практиці та прокачаєш свої soft skills. Глибоке занурення у технічні Наш ментор вже підготував для тебе ефективну та цікаву програму і чекає на заявки ;). Твоя кар’єра ближче, ніж ти очікуєш. Реєстрація триває до 27 травня!'
            }
        ],
        __v: 0
    }
};

const errors = {};