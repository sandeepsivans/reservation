function validate()
{
    let name =document.getElementById("a").value;
    let nregx = /^[a-z A-Z]{2,15}$/;
    let email =document.getElementById("b").value;
    let person= document.getElementById("p").value;
    let pregx =/^[0-9]$/;
    let eregx = /^[a-z A-Z 0-9+_.-]+@[a-z A-Z]+\.[a-z A-Z]{2,4}$/;
    let date =document.getElementById("dt").value;
    let dregx = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    let go = document.getElementById("tour").value;
    if(name=="")
    {
        alert("name filed is mandatory");
        return false;
    }
    else if(!nregx.test(name)){
        alert("enter a vaild name");
        return false;
    }
    else if(email==""){
        alert("email filed is mandatory");
        return false;
    }
    else if(!eregx.test(email)){
        alert("enter a vaild name");
        return false;
    }
    else if(go=="0"){
        alert("please select a vaild tour package");
        return false;
    }


    else if(person==""){
        alert("person filed is mandatory");
        return false;
    }
    else if(!pregx.test(person)){
        alert("enter a vaild number");
        return false;
    
    }
    else if(
        document.getElementById("board").checked == false &&
        document.getElementById("food").checked == false&&
        document.getElementById("seeing").checked == false){
            alert("Select any avail");
            return false;
        }

    else if(date==""){
        alert("date filed is mandatory");
        return false;
    }
    else if(!dregx.test(date)){
        alert("enter a vaild date");
        return false;
    }
    else if(
        document.getElementById("agree").checked == false &&
        document.getElementById("disagree").checked == false){
            alert("chooes an option");
            return false;
        }

    


}