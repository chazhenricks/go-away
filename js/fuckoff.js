var responseDiv = document.getElementById("response");
var sendRequest = document.getElementById("submit");
var userName = document.getElementById("name");
var userNoun = document.getElementById("noun");
var fuckoff = "https://www.foaas.com";


function fuckOffRequest(name, noun) {
    console.log("URL IS ", `${fuckoff}/greed/${noun}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            url: `${fuckoff}/thumbs/${noun}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};




sendRequest.addEventListener("click", function(){

    fuckOffRequest(userName.value, userNoun.value)
    .then(function(response){
        showData(response);
    });
});




function showData(data){
    var fuckoffResponse = "<p>";
    fuckoffResponse += data;
    fuckoffResponse += "</p>";
    response.innerHTML = fuckoffResponse;
};