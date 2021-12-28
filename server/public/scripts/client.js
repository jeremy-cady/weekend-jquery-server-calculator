console.log('in client.js');

$(document).ready(onReady);

let operator = '';


function onReady() {
    console.log('so ready');

    // listeners
    $('#equalsButton').on('click', newCalculation);
    $('.calcButtons').on('click', chooseOperator);
    $('#clearButton').on('click', clearFields);
    getAllCalcs();
    
};




function newCalculation(event) {
    console.log('inside newCalculation')
    
    const calculation = {
        num1: $('#inputOne').val(),
        num2: $('#inputTwo').val(),
        operator: operator
    }

    console.log('calculation is:', calculation);
    
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: calculation
    })
        .then((response) => {
            console.log('POST response', response);
            refresh();
        })
        .catch((error) => {
            console.log("POST failed", error);
            alert('Something is busted! 😭');
        });
}




function refresh() {
    console.log('in refresh');
    
    let ajaxOptions = {
        method: 'GET',
        url: '/calculator'
    };
    $.ajax(ajaxOptions)
        .then((response) => {
            console.log('AJAX request complete!', response);
            render(response);
        })
        .catch((error) => {
            console.log("GET request failed!", error);
            alert('Something busted! 🤬');
        })
}




function render(calculations) {
    console.log('in render');
    $('#calcsList').empty();
    
    // render current result
    $('#currentTotal').text(calculations[calculations.length -1].result);

    // render each calculation
    for(let calculation of calculations){ 
        $('#calcsList').append(`
            <li>
                ${calculation.num1} 
                ${calculation.operator}   
                ${calculation.num2} =
                ${calculation.result}    
            </li>    
        `)
    }
}




function chooseOperator() {
    console.log('in chooseOperator');
    operator = $(this).text();
}


function clearFields() {
    console.log('in clearFields');

    $('.inputFields').val('');
    
}

function getAllCalcs() {
    console.log('in getAllCalcs');
    
    $.ajax({
        method: 'GET',
        url: '/calculator',
    })
    .then((response) => {
        console.log('AJAX request complete!', response);
        render(response);
    })
    .catch((error) => {
        console.log("GET request failed!", error);
        alert('Something busted! 🤬');
    })
}


