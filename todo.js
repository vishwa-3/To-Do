const heading = document.getElementById('title');

const input = document.getElementById('task');
const addBtn = document.getElementById('add');

const taskList = document.querySelector('.task-list');
const lists = document.querySelectorAll('.text');
const delBtn = document.querySelectorAll('.del');



const title = prompt("Enter the title");
if (title !== '') {
   heading.textContent = title.toUpperCase();
}

addBtn.addEventListener('click',addList);
input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter') addList(e);
});

function addList(e){
    const inputText = input.value.trim();
    if (e.type === 'click' || e.type === 'keypress'){
        if(inputText!=''){
            
            const newList = document.createElement('div');
            newList.classList.add('list');

            const newLable = document.createElement('label');
            newLable.classList.add('text');
            newLable.textContent = inputText;

            const newDelBtn = document.createElement('button');
            newDelBtn.classList.add('del',"material-symbols-outlined");
            newDelBtn.textContent = 'close';

            newList.appendChild(newLable);
            newList.appendChild(newDelBtn);

            taskList.appendChild(newList);

            input.value='';

        }
    }
}

taskList.addEventListener('click',(e)=>{
    const target = e.target;
    if(target.classList.contains('text'))
        target.parentElement.classList.toggle('completed-list');
    
    if(target.classList.contains('del'))    
        target.parentElement.remove();
});
