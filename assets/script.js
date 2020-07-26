
if(document.getElementsByTagName("li").length<=1)
     {
        $.notify("Add Some Habits","success");
    
     }



document.addEventListener("click",function(e){
     

    if(e.target.className=="fa fa-ban"){
        $.notify("Done!",{ autoHideDelay: 500});
    
    e.target.className="fa fa-check";
    let value= e.target.children[0].value="done";
    console.log(value);

    }
   else if(e.target.className=="fa fa-check"){
    $.notify("Not Done!",{ autoHideDelay: 500});

    e.target.className="fa fa-times";
    let value= e.target.children[0].value="notDone";
    console.log(value);

   }
   else if(e.target.className=="fa fa-times"){
    $.notify("No Action",{ autoHideDelay: 500});

    e.target.className="fa fa-ban";
   let value= e.target.children[0].value="";
    console.log(value);

   }

})

