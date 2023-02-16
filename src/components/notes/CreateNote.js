import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../../redux/slices/notesSlice';

function CreateNote() {

    const [title, setTitle ] = useState("");
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(createNote({
            id: nanoid(10),
            title: title,
            desc: desc,
        }));
    }

    return (
        <div>
            <form>
                <input placeholder='title here' onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
                <input placeholder='description' onChange={(e) => setDesc(e.target.value)} type="text" value={desc} />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default CreateNote
