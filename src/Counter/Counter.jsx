import './Counter.css';
import React from 'react';
import { useContext, useRef } from 'react';
import { Context } from '../Components/Functions/context';

export const Counter = () => {
    const { state: { count, setCount } } = useContext(Context);

    let ref = useRef(null);

    const handleClick = () => {
        console.log(ref.current);
    }

    return (
        <div className="counter">
            <div>
                <span ref={ref}>{count}</span>
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>✙</button>
                <button onClick={() => setCount(count - 1)}>ー</button>
            </div>
            <button className='res' onClick={handleClick}>resultat</button>
        </div>
    )
}