import React from 'react';

class Content extends React.Component {
  render() {
    const paragraphStyle = {
        textIndent: '25px',
        };
    return (
      <div>
        <p>Хоббі:</p>
        <ul>
            <li>Комп'ютерні ігри</li>
            <li>Японська мова</li>
            <li> <div id="para1" onclick="changeColor1()">Кіно та аніме</div></li>
            <li> <div onclick="changeColor2()">Музика</div></li>
        </ul>
        <p>Улюблені книги:</p>
        <ol>
            <li>Анджей Сапковський "Відьмак"</li>
            <li>Стівен Кінг "Христина"</li>
            <li>Джордж Орвелл"Колгосп Тварин"</li>
        </ol>
        <p style={paragraphStyle}>Токіо - це захоплююче місто, що розташоване на східному узбережжі Японії. Воно є одним з найбільших і найбільш населених міст у світі.
            Токіо вражає своєю різноманітністю і контрастами: тут ви знайдете старовинні храми і сучасні небоскреби, традиційну японську культуру
            і глобальну поп-культуру, спокійні сади і жваві торгові вулиці.
            Місто славиться своєю гастрономією, де можна спробувати найрізноманітніші страви, такі як суші, рамен, темпура та багато інших.
            Токіо також є мекою для шопінгу, де ви зможете знайти відомі бренди, антикваріат та авангардну моду.
            Місто відоме своєю інноваційною технологічною сферою, включаючи електроніку, робототехніку та інформаційні технології.
            Токіо також володіє вражаючою системою громадського транспорту, яка забезпечує зручність переміщення по місту.
            Місцями відпочинку і культурні скарби включають Киото, Асакусу, Меїдзі-дзінгу та Палац Імператора.
            В цьому місті завжди відбувається щось цікаве і захоплююче, що робить Токіо одним із найцікавіших та енергійних міст світу.</p>
      </div>
    );
  }
}

export default Content;
