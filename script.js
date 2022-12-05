function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("email").value;
    let y = document.getElementById("name").value;
    let z = document.getElementById("message").value;
    // If x is Not a Number or less than one or greater than 10
    if (y==null || y==""){  
        alert("Name can't be blank");  
        return false;  
    }
    if (x==null || x==""){  
        alert("Email can't be blank");  
        return false;  
    }
    if (z==null || z==""){  
        alert("Please type a message");  
        return false;  
    }
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    }  
}