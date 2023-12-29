const heading = document.getElementById('title');

const inputTask = document.getElementById('input-text');
const addButton = document.getElementById('add');

const taskContainer = document.querySelector('.task-container');
const delButton = document.querySelectorAll('.del');



const title = prompt("Enter the title");
if (title !== '') {
   heading.textContent = title.toUpperCase();
}

addButton.addEventListener('click',addTask);
inputTask.addEventListener('keypress',(e)=>{
    if(e.key==='Enter') addTask(e);
});

function addTask(e){
    const inputText = inputTask.value.trim();
    if (e.type === 'click' || e.type === 'keypress'){
        if(inputText!=''){
            
            const newList = document.createElement('div');
            newList.classList.add('list');

            const newLabel = document.createElement('label');
            newLabel.classList.add('text');
            newLabel.textContent = inputText;

            const newDelButton = document.createElement('button');
            newDelButton.classList.add('del',"material-symbols-outlined");
            newDelButton.textContent = 'close';

            newList.appendChild(newLabel);
            newList.appendChild(newDelButton);

            taskContainer.appendChild(newList);

            inputTask.value='';

        }
    }
}

taskContainer .addEventListener('click',(e)=>{
    const target = e.target;
    if(target.classList.contains('text'))
        target.parentElement.classList.toggle('completed-list');
    
    if(target.classList.contains('del'))    
        target.parentElement.remove();
});
