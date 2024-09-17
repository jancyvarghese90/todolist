const listContainer=document.getElementById("list-container");
fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>
{
return data.json();
}).then((completedata)=>{
    //  console.log(completedata[2].title);
 let data1="";
 
// completedata.map((values)=>{
completedata
    for(i=0;i<10;i++){
         if(completedata[i].completed==false){
           data1+=` <li >${completedata[i].title}</li>`;
           
        
 //data1.innerHTML=completedata[i].title;
 document.getElementById("list-container").innerHTML=data1;
         }
         
    }
    
     listContainer.addEventListener("click",function(e){
        if(e.target.tagName==='LI'){
          let count= e.target.classList.toggle("checked");

                }
     });
});


