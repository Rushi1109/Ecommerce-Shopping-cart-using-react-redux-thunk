import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slices/messageSlice';

function Child1() {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        const inputTextValue = inputRef.current.value;
        dispatch(setMessage(inputTextValue));
    }

    const inputRef = useRef(null);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Child1
