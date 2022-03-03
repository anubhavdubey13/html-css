const buttonCookie = document.getElementById("btn-accept");

const buttonClickCallback = () => {
    //console.log("button clicked");
    if(document.cookie) {
        //alert("cookies present");
        return console.log("cookies already present:", document.cookie);
    } else {
        //alert("cookies not present");
        document.cookie = "name=Anubhav";
        document.cookie = "max-age=60*60*24";
        //alert("cookoes noew present");
        return console.log("Success");
    }
}

buttonCookie.addEventListener("click", buttonClickCallback);

/*
console.log(document.cookie ? "A" :"B");
//console.log(document.cookie === null);
console.log(document.cookie);
//console.log(document.cookie===undefined);
document.cookie = "name=Anubhav";
document.cookie = "max-age=60*60"
console.log(document.cookie);
//console.log(document.cookie===undefined);
//console.log(document.cookie === null);
console.log(document.cookie ? "A" :"B");
*/