

function disabled() {
    document.querySelector('#chexkbtn1').disabled = true;
    document.querySelector('#chexkbtn2').disabled = true;
    document.querySelector('#chexkbtn3').disabled = true;
    document.querySelector('#chexkbtn4').disabled = true;
    document.querySelector('#chexkbtn5').disabled = true;
    document.querySelector('#chexkbtn6').disabled = true;
    document.querySelector('#leversbtn1').disabled = true;
    document.querySelector('#leversbtn2').disabled = true;
    document.querySelector('#leversbtn3').disabled = true;
    document.querySelector('#leversbtn4').disabled = true;
    document.querySelector('#leversbtn5').disabled = true;
    document.querySelector('#launch').disabled = true;



}

function enabled() {
    if (document.getElementById('psw').value === 'TrustNo1') {

        document.querySelector('#chexkbtn1').disabled = false;
        document.querySelector('#chexkbtn2').disabled = false;
        document.querySelector('#chexkbtn3').disabled = false;
        document.querySelector('#chexkbtn4').disabled = false;
        document.querySelector('#chexkbtn5').disabled = false;
        document.querySelector('#chexkbtn6').disabled = false;
        document.querySelector('#leversbtn1').disabled = false;
        document.querySelector('#leversbtn2').disabled = false;
        document.querySelector('#leversbtn3').disabled = false;
        document.querySelector('#leversbtn4').disabled = false;
        document.querySelector('#leversbtn5').disabled = false;
        document.getElementById('psw').disabled = true;
        document.getElementById('ok').disabled = true;
    }
}


function launchEnable() {
    if (document.getElementById('chexkbtn1').checked && document.getElementById('chexkbtn2').checked
        && document.getElementById('chexkbtn3').checked && document.getElementById('chexkbtn4').checked
        && document.getElementById('chexkbtn5').checked && document.getElementById('chexkbtn6').checked
        && document.getElementById("leversbtn1").value === "0" && document.getElementById("leversbtn2").value === "0"
        && document.getElementById("leversbtn3").value === "0" && document.getElementById("leversbtn4").value === "0"
        && document.getElementById("leversbtn5").value === "0") {

        document.querySelector('#launch').disabled = false;
    }
}

function startRocket() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 350;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 850) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.bottom = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}