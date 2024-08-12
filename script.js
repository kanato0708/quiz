'use strict';

const calScore = function() {
    let score =0;

    const selectedRadio1 = document.querySelector('input[name="q1"]:checked');
    const selectedRadio2 = document.querySelector('input[name="q2"]:checked');
    const selectedRadio3 = document.querySelector('input[name="q3"]:checked');
        
        if (selectedRadio1 && selectedRadio2 && selectedRadio3) {
            if (selectedRadio1.value === "パリ") {
                score++;
            }
            if (selectedRadio2.value === "インドネシア") {
                score++;
            }
            if (selectedRadio3.value === "ドイツ") {
                score++;
            }
        
        return score;
        };
    };

document.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const score = calScore();
        document.getElementById('answer').textContent = `あなたは3問中${score}問正解です。`;
    });
});