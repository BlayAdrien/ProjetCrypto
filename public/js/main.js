var rootURL = "http://localhost:3000/crypto";

var currenturl;

findAll();

$('#suppr').click(function () {
        supprime();
        return false;
});

$('.insert').click(function () {
    if ($('.cryptochoix').val() == '')
        addTransaction();
    else
        update();
    return false;
});

function addTransaction() {
    $.ajax({
        type:'POST',
        url: rootURL,
        dataType: "json",
        data: formToJSON(),
        success: function (data, textStatus, jqXHR){
            alert('OK inséré');
            window.location.reload();
        }
    })
}

function update() {
    console.log('update');
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: rootURL,
        dataType: "json",
        data: formToJSON(),
        success: function (data, textStatus, jqXHR) {
            alert('url updated successfully');
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('updateurl error: ' + textStatus);
        }
    });
}

function supprime() {
    console.log('supprimer');
    $.ajax({
        type: 'GET',
        url: rootURL + '/' + $('#ID_TRANSACTIONS').val(),
        success: function (data, textStatus, jqXHR) {
            alert('url deleted successfully');     
            window.location.reload();      
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('deleteurl error');
        }
    });
    
}

function findAll() {
    console.log('findAll');
    $.ajax({
        type: "get",
        url: rootURL,
        success: function(data) {
            console.log(data);
            var DATE = [];
            var NOMBRES_CRYPTOS = [];
            var somme = 0;
            for(var i in data) {
              DATE.push("Date : " + data[i].DateT);
              somme += parseInt(data[i].prixCrypto*data[i].NOMBRES_CRYPTOS);
              NOMBRES_CRYPTOS.push(somme);
            }
      
            var chartdata = {
              labels: DATE,
              datasets : [
                {
                  label: 'Crypto',
                  backgroundColor: 'rgba(200, 200, 200, 0.75)',
                  borderColor: 'rgba(200, 200, 200, 0.75)',
                  hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                  hoverBorderColor: 'rgba(200, 200, 200, 1)',
                  data: NOMBRES_CRYPTOS
                }
              ]
            };
      
            var ctx = document.getElementById('myChart');
            var ctx = document.getElementById('myChart').getContext('2d');
            var ctx = $('#myChart');
            var ctx = 'myChart';
      
            var line = new Chart(ctx, {
              type: 'line',
              data: chartdata,
              options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Nombres de Crypto en fonction du temps en €'
                    }
                }
             }
            });
          },
          
    })
    .done(function(data){
        for (var i=0; i< data.length; i++){
           
            $('#crypto-select').append('<option value=' + data[i].nomCrypto + '>'+ data[i].nomCrypto + '</option>');
            $('.cryptochoix').append('<option value=' + data[i].nomCrypto + '>'+ data[i].nomCrypto + '</option>'); 
           /* $('#cryptochoix').append('<option value=' + data[i].ID_Crypto + '>'+ data[i].nomCrypto + '</option>');*/
            $('#affichage').append('<p value=' + data[i].ID_TRANSACTIONS + '> Crypto : &nbsp;' + data[i].nomCrypto + ', &nbsp; nombre : ' + data[i].NOMBRES_CRYPTOS + '&nbsp; au prix de :' + data[i].prixCrypto + '&nbsp; le : ' + data[i].DateT + '</p>');
            $('#ID_TRANSACTIONS').append('<option value=' + data[i].ID_TRANSACTIONS + '>' + data[i].ID_TRANSACTIONS + ',' + data[i].nomCrypto + '</option>'); 
        }
    })
    $("#crypto-select").change(function(){
        $.ajax({
            type: "post",
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
        /*"cryptochoix": $('#cryptochoix').val(),*/
        "nomCrypto": $('.cryptochoix').val(),
        "NOMBRES_CRYPTOS": $('.NOMBRES_CRYPTOS').val(),
        "prixCrypto": $('.prixCrypto').val(),
    });
}
