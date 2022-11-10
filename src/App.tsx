import React, { useEffect, useState } from 'react';
import './App.css';
import armenia from './Armenia-travel-AP73256745.jpg';
import privet from './privet.jpg';
import rabbit from './rabbit.jpg';
import samocvet from './samocvet.jpg';
import ararat from './Armenia-travel-AP73256745.jpg'
import shaurma from './shaurma.jpg'
import noi from './noi.jpg'
import ice from './icecream.jpg'
import siska from './siska.jpg'
import tern from './tern.jpg'
import rockstar from './rockstar.jpg'
import final from './final.jpg'

function App() {
    const [isStart, setIsStart] = useState(true)
    const [isZayac, setIsZayac] = useState(false)
    const [isSamocvet, setIsSamocvet] = useState(false)
    const [isArarat, setIsArarat] = useState(false)
    const [isShaurma, setIsShaurma] = useState(false)
    const [isNoi, setIsNoi] = useState(false)
    const [isIce, setIsIce] = useState(false)
    const [isSiska, setIsSiska] = useState(false)
    const [isTern, setIsTern] = useState(false)
    const [isRockstar, setIsRockstar] = useState(false)
    const [isFinish, setIsFinish] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const [toastText, setToastText] = useState('Это что за покемон?')
    const showToast =(text:string)=>{
        setToastText(text)
        setIsToast(true);
        setTimeout(() => setIsToast(false), 2000)
    }

    return (
        <div className="App">
            { isToast && <div className={ 'toast' }>{ toastText }</div> }
            { isStart && <header className="App-header">
                <img src={ privet } className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Привет Васюль! С днем рождения!
                    </p>
                    <button className="button-20" onClick={()=>{setIsStart(false);setIsZayac(true)}}>
                        Пойти за подарочком
                    </button>
                    <button className="button-30" onClick={ () => {
                        showToast('Это что, котик играть не хочет? ' +
                            'Сломали котика!')
                    } }> Мои полномочия все
                    </button>
                </div>
            </header>
            }

            { isZayac && <header className="App-header">
                <img src={ rabbit } className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Я приготовила тебе замечательный подарочек! Чтобы его получить надо припомнить основные события этого года!
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'втулкоухий'){setIsSamocvet(true);setIsZayac(false)} else {
                            showToast('Неа! Что это у него на ушах?')
                        }}} type="text" className="form__field" placeholder="Как зовут этого зайчика?" name="name" id='name' required/>

                    </div>
                </div>
            </header>
            }

            { isSamocvet && <header className="App-header">
                <img src={ samocvet } className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Что в Миассе искал Бейзил на горе?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'самоцвет'){setIsSamocvet(false);setIsArarat(true)} else {
                            showToast('Неа! Что там на Урале прячется в горах?')
                        }}} type="text" className="form__field" placeholder="Как ищет Бейзил?"  required/>
                    </div>
                </div>
            </header>
            }

            { isArarat && <header className="App-header">
                <img src={ ararat} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Cколько у Арарата пиков?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === '2'){setIsArarat(false);setIsShaurma(true)} else {
                            showToast('Неа! Может побольше?')
                        }}} type="text" className="form__field" placeholder="Арарат арарат арарат?"  required/>
                    </div>
                </div>
            </header>
            }

            { isShaurma && <header className="App-header">
                <img src={ shaurma} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Что тут написано?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'шаурма'){setIsShaurma(false);setIsNoi(true)} else {
                            showToast('Неа! Это можно скушать?')
                        }}} type="text" className="form__field" placeholder="Армянский алфавитик барамжес?"  required/>
                    </div>
                </div>
            </header>
            }

            { isNoi && <header className="App-header">
                <img src={ noi} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        A что тут написано?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'ной'){setIsNoi(false);setIsIce(true)} else {
                            showToast('Неа! Это человек с Арарата?')
                        }}} type="text" className="form__field" placeholder="Армянский алфавитик барамжес?"  required/>
                    </div>
                </div>
            </header>
            }

            { isIce && <header className="App-header">
                <img src={ ice} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Что мы в Турции брали на обед и хомячили в беседке?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'мороженое'){setIsIce(false);setIsSiska(true)} else {
                            showToast('Неа! Это такое надо было попросить!')
                        }}} type="text" className="form__field" placeholder="Пишется с буквой Е"  required/>
                    </div>
                </div>
            </header>
            }

            { isSiska && <header className="App-header">
                <img src={ siska} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Что ты нашел?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'шишка'){setIsSiska(false);setIsTern(true)} else {
                            showToast('Неа! Ты постоянно это находишь и везли даже с ' +
                                'Курилл!')
                        }}} type="text" className="form__field" placeholder="?"  required/>
                    </div>
                </div>
            </header>
            }

            { isTern && <header className="App-header">
                <img src={ tern} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Мы ходили смотреть котиков в Эдинбурге и видели это. Что это?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'терн'){setIsTern(false);setIsRockstar(true)} else {
                            showToast('Неа! Это еще в Черкесске расло и продавалось!')
                        }}} type="text" className="form__field" placeholder="Слива такая дикая что ли?"  required/>
                    </div>
                </div>
            </header>
            }

            { isRockstar && <header className="App-header">
                <img src={ rockstar} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Где у Рокстара звездочка рисуется?
                    </p>

                    <div className="form__group field">
                        <input onChange={(inptext)=>{if(inptext.target.value === 'внизусправа'){setIsRockstar(false);setIsFinish(true)} else {
                            showToast('Неа! грансевтото?')
                        }}} type="text" className="form__field" placeholder="Однимсловомслитно?"  required/>
                    </div>
                </div>
            </header>
            }

            { isFinish && <header className="App-header">
                <img src={ final} className="App-logo" alt="logo"/>
                <div className="App-input">
                    <p className="App-text">
                        Молодец Васюль! От таких мозгов смотри какие волосы выросли!
                    </p>
                    <button className="button-20" onClick={()=>{setIsStart(false);setIsZayac(true)}}>
                        Получить подарочек
                    </button>
                    <button className="button-30" onClick={ () => {
                        showToast('Это что, котик играть не хочет? ' +
                            'Сломали котика!')
                    } }> Мои полномочия все
                    </button>
                </div>
            </header>
            }

        </div>
    );
}

export default App;
