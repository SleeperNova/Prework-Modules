document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor ="blue";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").innerHTML = " ";

});

document.getElementById("button5").addEventListener("click", function(){

    document.getElementById("box").innerHTML = Date();
    document.getElementById("box").style.textAlign = "left";

});

document.getElementById("button6").addEventListener("click", function(){

    document.getElementById("box").innerText = "Hello World";
    document.getElementById("box").style.backgroundColor = "yellow";
    document.getElementById("box").style.textAlign = "center";
});