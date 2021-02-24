const btn = document.querySelector('#ActionBtn');

btn.addEventListener("click", function(){

    let name = document.querySelector('#name').value
    let level = document.querySelector('#level').value
    let age = document.querySelector('#age').value
    let howLong = document.querySelector('#howLong').value


    if(name == 0 || level == 0){
        alert("musi Pani wypełnić wszystkie pola")
    }

    let readyText ="Druhna " + name + " jest u nas w drużynie już od " + howLong +" Ma " + age +" lat. Ma stopień " + age + ". Jest jedynakem, jest ambitna, ciekawska i dociekliwa i skormna. Jest bardzo enegiczną osobą, wnoszącą dużo radości i ciepła. Jest dość małomówna, wycowana, bardzo bezpośrednia i towarzyska. Ma wielu przyjaciół ale nikt jej nie lubi bo jest holerykiem, nigdy nie podnosi głosu, jest ostoją spokoju. Jest bardzo zagażowane społecznie, ma wiele pasji i zaintersowań. Chodzi do dobrej szkoły, uczy się dobrze i bardzo mało. Często się przechwala i opowiada o sowich licznych osiągnieciach. Jest niepoprawnym optymistą, często płacze i martwi się o przyszłość planety. Jest Wege, uwielbia gotować jej ulubinym daniej jest schabowy."

    const mainDiv = document.querySelector(".readyText");
    mainDiv.innerHTML = readyText;
})