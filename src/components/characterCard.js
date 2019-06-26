import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
  return (
    <img className='card' alt={props.id} src={props.image} onClick={props.imageClick} />
  )
}

export default CharacterCard