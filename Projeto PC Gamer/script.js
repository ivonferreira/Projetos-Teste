let campo = document.querySelectorAll(".campo");
let valor = document.querySelectorAll(".valor");
let total = document.querySelector('#total');
let comboAorus = document.querySelector('#comboAorus');
let comboAsus = document.querySelector('#comboAsus');
let aorus = document.querySelector('#aorus');
let asus = document.querySelector('#asus');
let wifi = document.querySelector('#wifi');
let cpu = document.querySelector('#cpu');

function combo(){
    if (comboAorus.checked || comboAsus.checked){
        cpu.checked = false;
    }else{
        cpu.checked = true;
    }
}
function nowifi(){
    if (comboAorus.checked || aorus.checked){
        wifi.checked = true;
    }
}
function wwifi(){
    if(comboAsus.checked || asus.checked){
        wifi.checked = false;
    }
}

document.querySelector('#calc').addEventListener('click',()=>{
    combo();
    nowifi();
    wwifi();
    let sum = 0
    for(let i in valor){
        if (campo[i].checked){
            sum += Number(valor[i].value);
            
        }
    }
   
    total.innerHTML= sum;
})