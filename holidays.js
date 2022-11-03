var globalData = []
const formElement = document.createElement('form')
var currentidx = 0
var maxIndex= 0


const tableDiv = document.createElement('div');
const stuDetailTable = document.createElement('table');
stuDetailTable.className = 'table table-bordered'
const stuThead = document.createElement('thead');
stuThead.classList.add("table-dark")
const stuTbody = document.createElement('tbody');
const stuTr = document.createElement('tr');



['HOLIDAYS'].map((obj)=>{
    const stuTd = document.createElement('td');
    stuTd.innerText = obj
    stuTd.style.textAlign = "Center"
    stuTr.append(stuTd)
})
stuThead.append(stuTr)


const btnsDiv = document.createElement('div');
const btnFields=[
    {type:"button",name:"prev",id:"prev"},
    {type:"button",name:"next",id:"next"}
]

btnFields.map((btn)=>{
    const newBtn = document.createElement('button');
    newBtn.id = btn.id;
    newBtn.style.margin = "20px"
    if(btn.name == "next"){
        newBtn.innerText = "Next";
        newBtn.setAttribute('onClick',"funnext()");
    }
    else{
        newBtn.innerText = "Prev";
        newBtn.setAttribute('onClick',"funprev()");
    }
    newBtn.style.width = '100px'
    btnsDiv.append(newBtn);  
})

stuDetailTable.append(stuThead,stuTbody)
tableDiv.append(stuDetailTable,btnsDiv)
tableDiv.style.textAlign = "center"
document.body.append(tableDiv)

const fun1 = async(code) =>{
    stuTbody.innerText = ""
    console.log("here")
    const valu = await fetch(`https://holidays.abstractapi.com/v1/?api_key=8be2efc6091148c099aac37e2a8ec6b4&country=${code}&year=2020`)
    const result = await valu.json()
    globalData = result
    console.log(globalData)
    maxIndex = result.length
    globalData.slice(0,5).map((holidays)=>{
        const innertr = document.createElement('tr');
        const innername = document.createElement('td');
        innername.innerText = holidays.name;
        innertr.append(innername)
        stuTbody.append(innertr)
        
    })
}

const funnext = () =>{
    currentidx += 5
    var nextidx = currentidx + 5
    if(currentidx < maxIndex){
        stuTbody.innerText = ""
        globalData.slice(currentidx,nextidx).map((holidays)=>{
            const innertr = document.createElement('tr');
            const innername = document.createElement('td');
            innername.innerText = holidays.name;
            innertr.append(innername)
            stuTbody.append(innertr)
            
        })
}
else{
    currentidx = maxIndex-5
}
}


const funprev = ()=> {
    currentidx -= 5
    var nextidx = currentidx + 5
    console.log(currentidx,nextidx)
    if(currentidx >= 0){
        stuTbody.innerText = ""
        globalData.slice(currentidx,nextidx).map((holidays)=>{
            const innertr = document.createElement('tr');
            const innername = document.createElement('td');
            innername.innerText = holidays.name;
            innertr.append(innername)
            stuTbody.append(innertr)
            
        })
    }
    else{
        currentidx = 0;
    }
}


const inputEle = document.getElementById('form');

inputEle.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue = document.getElementById('code')
    fun1(inputValue.value); 
})



