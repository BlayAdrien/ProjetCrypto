var rootURL = "http://localhost:3000/crypto";

var currenturl;

findAll();


/*
$('#btnCrypto').click( function () {
    console.log('testS')
    console.log($('#crypto').val());
});*/


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
        }
    })
    $("#crypto-select").change(function(){
        $.ajax({
            type: "get",
            url: rootURL + '/' + $(this).val(),
            dataType: "json",
        })
        .done(function(data){
            $('#result').append('<p> Vous avez : ' + data[0].nbCrypto + '</p>');
        })
    //var str = "";

//   $("#crypto-select option:selected").each(function () {
//         str += $(this).text() + " ";
//       });
//   $("#result").text(str);
// })
// .trigger('change');

    
    
    })
}

$("#btnCrypto").click(function () {
    console.log('testS')
    console.log($('#crypto').value());
})