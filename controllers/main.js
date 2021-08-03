import WorkService from "../services/WorkService.js";
import UndoneWork from "../models/UndoneWorks.js";
import DoneWork from "../models/DoneWorks.js";


const workService = new WorkService();


const getEle = id => document.getElementById(id)

const renderUndoneWorks = (undoneWork) =>  {
    let content = '';

    if(Object.keys(undoneWork).length === 0 && undoneWork.constructor === Object) {
        location.reload();
        return;
    }
    undoneWork.map(item => {
        content += `
            <li>
                <p>${item.work}</p>
                <div class="groupButton">
                    <button onclick="delWork(${item.id})"><i class="fa fa-trash-alt"></i></button>
                    <button onclick="checkWork(${item.id})"><i class="fa fa-check-circle"></i></button>
                </div>
            </li>
        `
        getEle('todo').innerHTML = content;
    });
};

const getWorkList = () => {
    workService.fetchWork().then(res => {
        renderUndoneWorks(res.data)
    }).catch((error) => {
        console.log(error);
    });
};



const renderDoneWork = (doneWork) => {
    let content = '';

    doneWork.map(item => {
        content += `
            <li>
                <p>${item.work}</p>
                <div class="groupButton">
                    <button onclick="delWorkDone(${item.id})"><i class="fa fa-trash-alt"></i></button>
                    <button><i class="fa fa-check-circle"></i></button>
          
                </div>
            </li>
        `

        getEle('completed').innerHTML = content;
    });
};

const getDoneWork = function() {
    workService.getDoneWork().then(res => {
        renderDoneWork(res.data);

    }).catch((error) => {
        console.log(error);
    });
};


getWorkList();
getDoneWork();

getEle('addItem').addEventListener('click', () => {
    const newTask = getEle('newTask').value;
    const workToDo = new UndoneWork(newTask);
    workService.addWorks(workToDo).then(res => {
        getWorkList();
        getEle('newTask').value = '';
    }).catch((error) => {
        console.log(error);
    });
    
});


getEle('two').addEventListener('click', () => {
    workService.sortAcs().then(res => {
        renderUndoneWorks(res.data);
    });
});

getEle('three').addEventListener('click', () => {
    workService.sortDesc().then(res => {
        renderUndoneWorks(res.data);
    });
});

getEle('all').addEventListener('click', () => {
    getWorkList();
});


const delWork = (id) => {
   
    workService.delWork(id).then(res => {
        getWorkList();
        
    }).catch((error) => {
        console.log(error);
    });
};

const delWorkDone = (id) => {
   
    workService.delWorkDone(id).then(res => {
        getDoneWork();
        
    }).catch((error) => {
        console.log(error);
    });
};

const checkWorks = (id) => {

    workService.getOneWork(id).then(res => {
        const doneWork = new DoneWork(res.data.work);
        workService.checkWorks(doneWork).then(res => {
            getDoneWork();
            delWork(id);
        });
    });
};

window.checkWork = checkWorks;
window.delWork = delWork;
window.delWorkDone = delWorkDone;
