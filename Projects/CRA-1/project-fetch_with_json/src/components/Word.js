import React from 'react';
import './Word.css'

const Word = props => (
    <li>English word is <strong>{props.english}</strong> <br />
        Translation: <strong>{props.polish}</strong>
    </li>

)

export default Word;