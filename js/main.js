var rootURL = "http://localhost/crypto";

var currenturl;
findAll();

function findAll() {
    console.log('findAll');
    $.ajax({
        type: 'GET',
        url: rootURL,
        dataType: "json", // data type of response
        success: function(data){
            console.log(data)
        }
    });
}