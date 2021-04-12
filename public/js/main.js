var rootURL = "http://localhost:3000/crypto";

var currenturl;

findAll();
$('#insert').on("click", function (){
    addTransaction();
})



function addTransaction() {
    $.ajax({
        type:'POST',
        url: rootURL,
        dataType: "json",
        data: formToJSON(),
        success: function (data, textStatus, jqXHR){
            alert('Cest inséré la veine');
        }
    })
}


function findAll() {
    console.log('findAll');
    $.ajax({
        type: 'GET',

        url:rootURL,
        
        dataType: "json", // data type of response
    })
    .done(function(data){
        for (var i=0; i< data.length; i++){
            $('#crypto-select').append('<option value=' + data[i].ID_CRYPTO + '>'+ data[i].NOM_CRYPTO + '</option>');
            $('#cryptochoix').append('<option value=' + data[i].ID_CRYPTO + '>'+ data[i].NOM_CRYPTO + '</option>');

        }
    })
    $("#crypto-select").change(function(){
        $.ajax({
            type: "get",
            url: rootURL + '/' + $(this).val(),
            dataType: "json",
        })
        .done(function(data){
            $('#result').html("");
            $('#result').append('<p> Vous avez : ' + data[0].nbCrypto + '</p>');
        })    
    })
}

function formToJSON() {
    return JSON.stringify({
        "cryptochoix": $('#cryptochoix').val(),
        "transaction": $('#transaction').val(),
        "nombre": $('#nombre').val()
    });
}
