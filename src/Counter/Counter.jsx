import './Counter.css';
import React from 'react';
import { useContext, useRef } from 'react';
import { Context } from '../Components/Functions/context';

export const Counter = () => {
    const { state: { count, setCount } } = useContext(Context);

    return (
        <div className="counter">
            <div>
                <span>2</span>
            </div>
            <div>
                <button>✙</button>
                <button>ー</button>
            </div>
            <button className='res'>resultat</button>
        </div>
    )
}