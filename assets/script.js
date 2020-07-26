// getting no. of habits in list 
//if no habit found then display a  error notification 
if(document.getElementsByTagName("li").length<=1)
     {
        $.notify("Add Some Habits","success");
    
     }


// adding a onclick listener to status toggle button
document.addEventListener("click",function(e){
     
//if class is ban then do it check
    if(e.target.className=="fa fa-ban"){
        $.notify("Done!",{ autoHideDelay: 500});
    
    e.target.className="fa fa-check";
    let value= e.target.children[0].value="done";
    console.log(value);

    }
//if class is check then do it times

   else if(e.target.className=="fa fa-check"){
    $.notify("Not Done!",{ autoHideDelay: 500});

    e.target.className="fa fa-times";
    let value= e.target.children[0].value="notDone";
    console.log(value);

   }

//   if class is times then do it ban
   else if(e.target.className=="fa fa-times"){
    $.notify("No Action",{ autoHideDelay: 500});

    e.target.className="fa fa-ban";
   let value= e.target.children[0].value="";
    console.log(value);

   }

})

