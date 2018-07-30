import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './Registration.css'
import MainBlock from "./MainBlock"
import EducationBlock from "./EducationBlock";
import AdditionalBlock from "./AdditionalBlock";

// const internUrl = "http://localhost:3004/people";
const routes = require('../Main/Routes');
// const internUrl = routes.serverPeople;
const internUrl = routes.serverRegistration;



// const blocksCount = 3;

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuId:1,
            redirect:false,
            isFormValid:false,
            isLoaded:true,
            isResponseValid:true,
            person: {
                firstName: {elementType:'input',
                    elementConfig: {
                    type:'text',
                        placeholder:'Ім\'я'
                    },
                    required:true,
                    value:'',
                },

                lastName: {elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Прізвище'
                    },
                    required:true,
                    value:'',
                },

                password: {elementType:'input',
                    elementConfig: {
                        type:'password',
                        placeholder:'Пароль'
                    },
                    required:true,
                    value:'',
                },

                repeatPassword: {elementType:'input',
                    elementConfig: {
                        type:'password',
                        placeholder:'Підтвердити пароль'
                    },
                    required:true,
                    value:'',
                },

                email: {elementType:'input',
                    elementConfig: {
                        type:'email',
                        placeholder:'Email'
                    },
                    required:true,
                    value:'',
                },
                phone: {elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Телефон'
                    },
                    required:true,
                    value:'',
                },
                birth_date:{elementType:'date',
                    elementConfig: {
                        type:'date',
                    },
                    required:true,
                    label:'Дата народження:',
                    value:'',
                },
                english:{elementType:'select',
                    elementConfig: {
                        type:'text',
                        options: [
                            "початковий (читаю та пишу зі словником)",
                            "середній (вільно читаю та пишу, можу розмовляти на певні теми)",
                            "продвинутий (вільно спілкуюся на будь-які теми)"
                        ],
                    },
                    label:'Знання англійскої',
                    value:'початковий (читаю та пишу зі словником)',
                },
                basics: {elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Що ви знаєте з основ програмування?'
                    },
                    value:'',
                },

                university:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'ВНЗ'
                    },
                    value:'',
                },
                faculty:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Факультет'
                    },
                    value:'',
                },
                course:{elementType:'select',
                    elementConfig: {
                        type:'text',
                        options: [1,2,3,4,5,6],
                    },
                    value:'1',
                    label:'Курс:',
                },
                events:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Чи відвідували ви додаткові курси чи івенти?'
                    },
                    value:'',
                },
                literature:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Які статті чи книги у сфері IT ви прочитали за останній рік?'
                    },
                    value:'',
                },
                whyIT:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Чому Ви хочете працювати в IT?'
                    },
                    value:'',
                },
                technologies:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Якими технологіями Ви цікавитесь?'
                    },
                    value:'',
                },
                mainInJob:{elementType:'select',
                    elementConfig: {
                        type:'text',
                        options:[
                            'Висока заробітня плата',
                            'Можливість навчатись та розвиватись',
                            'Дружній колектив',
                            'Можливість реалізувати себе',
                            'Стабільність'
                        ]
                    },
                    label:'Що, на Ваш погляд, найважливіше у майбутній роботі?',
                    value:'Висока заробітня плата',
                },
                positiveSides:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Вкажіть свої 5 позитивних рис характеру'
                    },
                    value:'',
                },
                negativeSides:{elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Вкажіть свої 5 негативних рис характеру'
                    },
                    value:'',
                },

                test:"test"
            }
        }
    }

    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return (<MainBlock person={this.state.person} changeHandler={this.onChangeHandler}/>);
        }

        if(menuId === 2) {
            return (<EducationBlock person={this.state.person } changeHandler={this.onChangeHandler}/>);
        }

        if(menuId === 3) {
            return (<AdditionalBlock person={this.state.person} changeHandler={this.onChangeHandler}/>);
        }
    };

    nextMenu = (event) => {
        event.preventDefault();
        let id = event.target.value;
        if(id <= 2) {
            id++;
            this.setState({menuId:id,isFormValid:id===3});
        }
    };

    previousMenu = (event) => {
        event.preventDefault();
        let id = event.target.value;
        if(id > 0) {
            id--;
            this.setState({menuId:id,isFormValid:id===3});
        }
    };

    registrationHandler = (event) => {
        this.setState({isLoaded:false});
        let person=this.state.person;
        let transferPerson =  {};
        for(let key in person) {
            transferPerson = {...transferPerson, [key]:person[key].value}
        }
        axios.post(internUrl,transferPerson)
            .then((res) => {
                localStorage.setItem('id', res.data._id);
                localStorage.setItem('img', res.data.photo);
                this.setState({redirect:true})
            }).catch(e => {
            this.setState({isResponseValid: false, isLoaded:true});
            console.log(e)});
    };

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let field = this.state.person[event.target.name];

        this.setState({person: {
                ...this.state.person,
            [name]:{...field,
                    value:value}}});
    };

    render() {
        if(this.state.redirect) {
            return(<Redirect to='../../'/>);
        }

        return(
            <div className="registration">
                <h5>Create your InterLink Account</h5>
                {this.selectMenu()}
                <div className="warn-div">
                    {this.state.isResponseValid?<div className="white"></div>:
                        <span className={"warning"}> Червоні поля не повинні бути пустими</span>
                    }
                </div>

                <div className="dots">
                    <span className="dot"> </span>
                    <span style={{order:this.state.menuId-2}} className="picked-dot"> </span>
                    <span className="dot"> </span>
                </div>
                <div className="buttons">
                    <button onClick={this.previousMenu} value={this.state.menuId} type="button"
                            className={this.state.menuId > 1?"btn btn-outline-info":"invisible"}>Назад</button>
                    <button onClick={this.registrationHandler} value={this.state.menuId} type="button"
                            className={this.state.isFormValid?"btn btn-outline-info":"invisible"}>Зареєструватися</button>
                    <button onClick={this.nextMenu} value={this.state.menuId} type="button"
                            className="btn btn-outline-info">Далі</button>

                </div>

            </div>
        )
    }
}

export default Registration;