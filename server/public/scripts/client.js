console.log('in client.js');

$(document).ready(onReady);


function onReady() {
    console.log('so ready');

    //get calculations from server


    // listeners
    $('#equalsButton').on('click', )
    
    
};


function enterData(event) {
    let calculation = {
        inputOne: $('#inputOne').val(),
        inputTwo: $('#inputTwo').val(),
        currentTotal: $('#totalField').val()

    };
    console.log('calculation:', calculation);
    
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: calculation
    })
        .then((response) => {
            console.log('POST response', response);
            refresh();
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
        });
}


function render(state) {
    console.log('in render');
    
}


