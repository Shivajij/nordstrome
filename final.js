function dropDown(a) {
    var show1 = document.querySelector("#main-content")
    var show = document.querySelector(`.${a}-content`)
    show1.style.display = "block";
    // show.style.display="block";
    show.style.height = "900px"

    var ele = document.getElementsByClassName("categoryType")

    for (var i = 0; i < ele.length; i++) {
        if (ele[i].textContent != a) {
            var eremo = document.querySelector(`.${ele[i].textContent}-content`)
            eremo.style.height = "0px";

            ele[i].style.color = "rgba(0, 0, 0, 0.3)"
            ele[i].style.textDecoration = "none"
        } else {
            ele[i].style.color = "#393939"
            ele[i].style.textDecoration = "underline"
        }
    }
}

function searchBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "70px";
}

function removeBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "0px";
}

function signBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "block";
}

function removeSignBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "none";
}

function removeDropdown() {
    var show = document.querySelector("#main-content")
    show.style.display = "none";
    var reset = document.getElementsByClassName("categoryType")
    for (var i = 0; i < reset.length; i++) {
        if (reset[i].textContent != "Sale") {
            reset[i].style.color = "#393939"
        }
        reset[i].style.textDecoration = "none"
    }
}



// sign in create**********************************
(function () {
    var updateButton = document.getElementById('homesign');
    // var cancelButton = document.getElementById('cancel');
    var dialog = document.getElementById('favDialog');
    // dialog.returnValue = 'favAnimal';

    function openCheck(dialog) {
        if (dialog.open) {
            console.log('Dialog open');
        }
    }

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function () {
        dialog.showModal();
        openCheck(dialog);
    });

    // Form cancel button closes the dialog box


})();


document.querySelector("#keshav").addEventListener("click", signIn);
var regdUsers = JSON.parse(localStorage.getItem("userData")) || [];
function signIn(e) {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var flag = false
    for (var i = 0; i < regdUsers.length; i++) {
        if (regdUsers[i].email == email && regdUsers[i].password == pass) {
            flag = true;
            window.location.href = "home.html";

            break;
        }
    }
    if (flag == true) {
        alert("Sign in Succesfull");
    } else if (flag == false) {
        alert("wfwef");
    }



}
// sivanshuu home*********************************
document.getElementById("broadImg").addEventListener("mouseenter", showAnother)
document.getElementById("broadImg").addEventListener("mouseleave", showThat)

function showAnother() {
    document.getElementById("broadImg").innerHTML = "<img src = 'https://n.nordstrommedia.com/id/1f5aa17b-91c9-4924-ad70-7c5857b2a063.jpeg?h=400&w=1608' height= 100% width = 100%>"

}
function showThat() {
    var x = document.getElementById("broadImg")
    x.innerHTML = `  <div id = "intextImg"> 
        <h1>New VICI: Exclusively Here</h1>
        <h2>Bold knits, figure-flaunting sweater dresses—the brand's latest styles exude an easy femininity.</h3>
            <h2><u>VICI</u></h2>
    </div>`;
}

document.getElementById("wishes").addEventListener("mouseenter", changeWish)
function changeWish() {
    document.getElementById("wishes").style.backgroundImage = `url("https://n.nordstrommedia.com/id/182e11e3-2b67-4e28-8170-e01e1b7358be.png?h=200&w=1608")`

}
document.getElementById("wishes").addEventListener("mouseleave", revWish)
function revWish() {

    document.getElementById("wishes").style.backgroundImage = `url("https://n.nordstrommedia.com/id/04db1e88-e25c-4762-90e8-2192df10333d.png?h=200&w=1608")`

}

