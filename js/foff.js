var responseDiv = document.getElementById("response");
var sendRequest = document.getElementById("submit");
var userName = document.getElementById("name");
var who = document.getElementById("who");
var great = document.getElementById("great");
var userNoun = document.getElementById("noun");
var userCoolGuy = document.getElementById("coolguy")
var fuckSelect = document.getElementById("fuckType");
var extraInfo = document.getElementById("extra");
var fuckoff = "https://www.foaas.com";


fuckSelect.addEventListener("change", function(){
    switch(fuckSelect.value){
        case "keep":
        who.classList.remove("hidden");
        userNoun.classList.remove("hidden");
        break;

        case "greed": 
        great.classList.remove("hidden");
        userCoolGuy.classList.remove("hidden");
        break;


        default: 
        who.classList.add("hidden");
        userNoun.classList.add("hidden");
        userCoolGuy.classList.add("hidden");
    }
});





sendRequest.addEventListener("click", function(){

    switch(fuckSelect.value){

        case "mornin":
            happyFuckOffRequest(userName.value, fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;
        case "keep":
            console.log(userNoun.value);
            keepFuckOffRequest(userName.value, userNoun.value,fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;
        case "maybe":
            maybeFuckOffRequest(userName.value, fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;
        case "looking":
            happyFuckOffRequest(userName.value, fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;
        case "greed":
            greedFuckOffRequest(userName.value, userCoolGuy.value, fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;
        case "fascinating":
           fascinatingFuckOffRequest(userName.value, fuckSelect.value)
            .then(function(response){
            showData(response)
            });
            break;

    }






    // fuckOffRequest(userName.value, userNoun.value, fuckSelect.value)
    // .then(function(response){
    //     showData(response);
    // });
});


//Happy Fuck off
function happyFuckOffRequest(name, type) {
    console.log("URL IS ", `${fuckoff}/${type}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};


//Keep Fuck Off
function keepFuckOffRequest(name,noun, type) {
    console.log("URL IS ", `${fuckoff}/${type}/${noun}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${noun}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};


//Maybe Fuck Off
function maybeFuckOffRequest(name,type) {
    console.log("URL IS ", `${fuckoff}/${type}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};


//Looking Fuck Off
function lookingFuckOffRequest(name, type) {
    console.log("URL IS ", `${fuckoff}/${type}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};


//Greed Fuck Off
function greedFuckOffRequest(name, noun, type) {
    console.log("URL IS ", `${fuckoff}/${type}/${noun}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${noun}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};


//Fascinating fuck off
function fascinatingFuckOffRequest(name,type) {
    console.log("URL IS ", `${fuckoff}/${type}/${name}`);
    return new Promise(function (resolve, reject){
        $.ajax({
            beforeSend: function(request) {
            request.setRequestHeader("Accept", "text/plain");
            },
            url: `${fuckoff}/${type}/${name}`
        }).done(function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
    });
};



function showData(data){
    var fuckoffResponse = "<p class='response-text'>";
    fuckoffResponse += data;
    fuckoffResponse = fuckoffResponse.replace(/fuck/g, 'f*ck');
    fuckoffResponse = fuckoffResponse.replace(/Fuck/g, 'F*ck');
    fuckoffResponse += "</p>";
    response.innerHTML = fuckoffResponse;
};
