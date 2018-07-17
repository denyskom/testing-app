import Head from "./Head"
import React, { Component } from 'react';
import './Main.css'
import ActivityCard from "../Activity/ActivityCard";
import ActivityPresentationList from "../Activity/ActivityPresentationList";



const main = () => {
    return(
        <div>
            <Head/>
            <div className="under-header">
                <main className="custom-container">
                    <ActivityPresentationList/>
                </main>
            </div>
        </div>

    );
};

export default main;






//
// <ActivityCard name="9th season of InterLink inCamp"
//               description="Оголошуємо набір для студентів на 9 сезон інтернатури inCamp! На тебе очікує захоплююча подорож у розробку web-додатків. За 3 місяці ти отримаєш досвід frontend та backend розробки, командної роботи, застосуєш принципи Agile на практиці та прокачаєш свої soft skills. Глибоке занурення у технічні Наш ментор вже підготував для тебе ефективну та цікаву програму і чекає на заявки ;). Твоя кар’єра ближче, ніж ти очікуєш. Реєстрація триває до 27 травня!"
//               imageUrl="https://www.facebook.com/interlinkua/photos/a.933361700035296.1073741828.304082922963180/1775074885863969/?type=3"/>
// <ActivityCard name="9th season of InterLink inCamp"
// description="Оголошуємо набір для студентів на 9 сезон інтернатури inCamp! На тебе очікує захоплююча подорож у розробку web-додатків. За 3 місяці ти отримаєш досвід frontend та backend розробки, командної роботи, застосуєш принципи Agile на практиці та прокачаєш свої soft skills. Глибоке занурення у технічні Наш ментор вже підготував для тебе ефективну та цікаву програму і чекає на заявки ;). Твоя кар’єра ближче, ніж ти очікуєш. Реєстрація триває до 27 травня!"
// imageUrl="https://www.facebook.com/interlinkua/photos/a.933361700035296.1073741828.304082922963180/1775074885863969/?type=3"/>