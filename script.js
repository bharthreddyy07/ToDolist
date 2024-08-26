document.getElementById("taskadder").addEventListener("click",function(){
    let task = document.getElementById("taskinput").value;
    
    if (task!==""){
        let tasklist=document.getElementById("tasklist");

        let li = document.createElement("li");

        let taskspan=document.createElement("span");
        taskspan.textContent=task;
        li.appendChild(taskspan);


        let dltbtn=document.createElement("button");
        dltbtn.textContent="Delete";
        dltbtn.className="dltbtn";
        li.appendChild(dltbtn);

        dltbtn.addEventListener("click",function(){
            tasklist.removeChild(li);
        });
        
        tasklist.appendChild(li);
        taskinput.value="";

    }

    
});