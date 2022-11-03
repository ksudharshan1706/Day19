const btn = document.createElement('button');
const fun1 = async(email) =>{
    const valu = await fetch(`https://avatars.abstractapi.com/v1/?api_key=64fbb512d3504d49968176421512b656&name=Claire Florentz`)
    const result = await valu.json()
    
}

const inputEle = document.getElementById('form');

inputEle.addEventListener('submit',(e)=>{
    btn.style.display = "none"
    e.preventDefault();
    const inputValue = document.getElementById('email')
    fun1(inputValue.value); 
})
