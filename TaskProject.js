

console.log(`
Welcome to JS TODO-APP
***************************
Select an action:
1) Add a new task
2) List all tasks
3) List completed tasks
4) Mark the task as done
5) Delete a task
6) Sort tasks by the due date
7) Sort tasks by priority
8) Clear all tasks
9) stop program
***************************
What's your choice?`);





function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  
  taskList=[];

  const readline = require('readline');
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  
  function displayActions(){
  rl.question("What is your choice? ", function(ch) {
      if(ch==1){
          addTask() ;
      }
      else if(ch==2){
        listTasks();
          
      }
      else if(ch==3){
        listCompletedTask();
        
      }
      else if(ch==4){
        completeTask() ;
          
      }
      else if(ch==5){
        deleteTask();
       
      }
      else if(ch==6){
        sortListBasdeDate();
      }
      else if(ch==7){
        sortListBasdepriority();
      }
      else if(ch==8){
        clearAllList();
      }
      else {
        process.exit();
            }
   
  });
  }
  

  function addTask() {
    rl.question('Enter task description: ', (description) => {
      rl.question('Enter due date (YYY-MMM-DDD): ', (dueDate) => {
        rl.question('Enter priority (1-10): ', (priority) => {
          taskList.push(new Task(description, dueDate, priority));
          console.log('\n added successfully!\n');
          displayActions();
        });
      });
    });
  }
  

  function completeTask() {
    rl.question('Enter task description: ', (description) => {
      const task = taskList.find((t) => t.description === description);
      if (task) {
        task.completed = true;
      } else {
        console.log('\nTask not found.\n');
      }
      displayActions();
    });
  }
  
 
  function deleteTask() {
    rl.question('Enter task description: ', (description) => {
      const index = taskList.findIndex((t) => t.description === description);
      if (index !== -1) {
        taskList.splice(index, 1);
        console.log('\nTask deleted successfully!\n');
      } else {
        console.log('\nTask not found.\n');
      }
      displayActions();
    });
  }
  
 
  function listTasks() {
    console.log('\nList of tasks:\n');
    taskList.forEach((task) => {
      console.log(`${task.description} (due: ${task.dueDate}, priority: ${task.priority}, completed: ${task.completed ? 'yes' : 'no'})`);
    });
    displayActions();
  }
  
 
  

  function listCompletedTask(){
    console.log('\nList completed task:\n')
    const tasks=taskList.filter(t=>t.completed);
   tasks.forEach((t)=>{
    console.log(`Description:${t.description}`)
   })
    displayActions();
  }


  function sortListBasdeDate(){
    console.log("Sort List By Date")
   taskList.sort(function(t1, t2) {
    console.log(new Date(t1.dueDate) - new Date(t2.dueDate));
        return new Date(t1.dueDate) - new Date(t2.dueDate);
      })
      
      console.log(taskList)
      displayActions();
  }



  function sortListBasdepriority(){
    taskList.sort(function(t1, t2) {
         return (t1.priority) - (t2.priority);
       })
       console.log(taskList);
       displayActions();
   }


   function  clearAllList(){
    taskList.splice(0, taskList.length);
    console.log("\n Clear all list Done!\n")
    displayActions();
   }
  displayActions();