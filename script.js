document.querySelector("#push").onclick =function(){
    if(document.querySelector('#newtask input').value.length == 0){
alert("please enter a task")

    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">
         ${document.querySelector
            ("#newtask input").value}


        </span>
        <button class="delete"> <i class='bx bx-x'></i>
        </button>
        </div>
        `;
        var currentTasks =document.querySelectorAll(".delete")

   
   for (var i = 0; i<currentTasks.length;i++){
    currentTasks[i].onclick = function(){
        this.parentNode.remove();
    }
   }
   var tasks = document.querySelectorAll(".task");
   for(var i =0; i<tasks.length; i++){
    tasks[i].onclick = function () {
        this.classList.toggle("completed")
    }
   }
   document.querySelector("#newtask input").value = ""
    }
}