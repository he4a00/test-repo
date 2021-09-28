let myClose = document.querySelector(".close");

myClose.onclick = function() {
    document.querySelector(".alert").style.display = "none";
    document.querySelector(".box").style.display = "block";
}







let myDiv = document.querySelector(".counter"),
    myBtn1 = document.querySelector(".btn-1");
    

    myBtn1.onclick = function() {
        counter = setInterval(countdown, 1000);
        function countdown() {
            myDiv.innerHTML -= 1;
            if(myDiv.innerHTML === "0") {
                clearInterval(counter);
                alert("Your Count Done");
                
            }
            
        }

        myDiv.style.left = "0px"

    }



   let  myDiv1 = document.querySelector(".counter1"),
        myBtn2 = document.querySelector(".btn-2");


    

    myBtn2.onclick = function() {
        counter = setInterval(countdown, 1000);
        function countdown() {
            myDiv1.innerHTML -= 1;
            if(myDiv1.innerHTML === "0") {
                clearInterval(counter);
                alert("Your Count Done");
                
            }
            
        }

        myDiv1.style.left = "0px"

    }


    myDiv2 = document.querySelector(".counter2"),
    myBtn3 = document.querySelector(".btn-3");


    myBtn3.onclick = function() {
        counter = setInterval(countdown, 1000);
        function countdown() {
            myDiv2.innerHTML -= 1;
            if(myDiv2.innerHTML === "0") {
                clearInterval(counter);
                alert("Your Count Done");
                
            }
            
        }

        myDiv2.style.left = "0px"

    }


    myDiv3 = document.querySelector(".counter3"),
    myBtn4 = document.querySelector(".btn-4");



    myBtn4.onclick = function() {
        counter = setInterval(countdown, 1000);
        function countdown() {
            myDiv3.innerHTML -= 1;
            if(myDiv3.innerHTML === "0") {
                clearInterval(counter);
                alert("Your Count Done");
                
            }
            
        }

        myDiv3.style.left = "0px"

    }


    let myClear = document.querySelector(".clear");

    myClear.onclick = function() {
        window.location.reload();
    }