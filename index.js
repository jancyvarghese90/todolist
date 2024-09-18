
let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let pwd=document.getElementById("pwd").value;
    let name=document.getElementById("name").value;
validateform(name,pwd,(message)=>{
    alert(message);
 
})
});

let validateform=(name,pwd,callback)=>{
    if(name==''||pwd==''){
        callback("please enter all fields");
return ;
    }

    else if(name!='admin'||pwd!='12345'){
        callback("please enter valid name and password");
return ;
    }
    else{
        callback("form is submitted");
      
       window.location.assign('home.html')
    }
    
}
