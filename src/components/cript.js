import React from 'react'
import Creditcard from './components/creditard';

const cards = document.querySelectorAll ('.credit-card');

function flipcard() {
    this.classList.toggle('flip');

}

cards.forEach(card => card.addEventListner('click', flipCard));

export default Cript;