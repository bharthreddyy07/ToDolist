document.getElementById("taskadder").addEventListener("click", function() {
    let task = document.getElementById("taskinput").value.trim();
    
    if (task !== "") {
        let tasklist = document.getElementById("tasklist");
        let tasks = document.querySelectorAll("#tasklist li span");
        let taskExists = false;

        tasks.forEach(function(existingTask) {
            if (existingTask.textContent === task) {
                taskExists = true;
            }
        });

        if (taskExists) {
            alert("This task is already present in the list.");
        } else {
            let li = document.createElement("li");

            let taskspan = document.createElement("span");
            taskspan.textContent = task;
            li.appendChild(taskspan);

            let dltbtn = document.createElement("button");
            dltbtn.textContent = "Delete";
            dltbtn.className = "dltbtn";
            li.appendChild(dltbtn);

            dltbtn.addEventListener("click", function() {
                tasklist.removeChild(li);
            });

            tasklist.appendChild(li);
            document.getElementById("taskinput").value = "";
        }
    }
});
