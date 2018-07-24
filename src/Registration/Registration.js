import React, {Component} from 'react';
import './Registration.css'
import MainBlock from "./MainBlock"
import EducationBlock from "./EducationBlock";
import AdditionalBlock from "./AdditionalBlock";

const blocksCount = 3;

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuId:1,
            person: {
                name: {elementType:'input',
                    elementConfig: {
                    type:'text',
                        placeholder:'Ім\'я'
                    },
                    value:'',
                },
                password: {elementType:'input',
                    elementConfig: {
                        type:'password',
                        placeholder:'Пароль'
                    },
                    value:'',
                },
                email: {elementType:'input',
                    elementConfig: {
                        type:'email',
                        placeholder:'Email'
                    },
                    value:'',
                },
                phone: {elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:'Телефон'
                    },
                    value:'',
                },
                birth_date:{elementType:'date',
                    elementConfig: {
                        type:'date',
                    },
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
                    value:'',
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
                    value:'',
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
                    value:'',
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
            }
        }
    }

    selectMenu = () => {
        let menuId = this.state.menuId;
        if(menuId === 1) {
            return (<MainBlock person={this.state.person}/>);
        }

        if(menuId === 2) {
            return (<EducationBlock person={this.state.person}/>);
        }

        if(menuId === 3) {
            return (<AdditionalBlock person={this.state.person}/>);
        }
    };

    nextMenu = (event) => {
        event.preventDefault();
        let id = event.target.value;
        if(id <= 2) {
            id++;
            this.setState({menuId:id});
        }
    };

    previousMenu = (event) => {
        event.preventDefault();
        let id = event.target.value;
        if(id > 0) {
            id--;
            this.setState({menuId:id});
        }
    };

    render() {
        return(
            <div className="registration">
                <h5>Create your InterLink Account</h5>
                {this.selectMenu()}
                <div className="dots">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
                <div className="buttons">
                    <button onClick={this.previousMenu} value={this.state.menuId} type="button"
                            className={this.state.menuId > 1?"btn btn-outline-info":"invisible"}>Назад</button>
                    <button onClick={this.nextMenu} value={this.state.menuId} type="button"
                            className="btn btn-outline-info">Далі</button>
                </div>

            </div>
        )
    }
}

export default Registration;