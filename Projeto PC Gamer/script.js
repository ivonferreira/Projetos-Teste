let mem1 = document.querySelector('#mem1');
let mem2 = document.querySelector('#mem2');
let mem3 = document.querySelector('#mem3');
let ssd = document.querySelector('#ssd');
let cpuc = document.querySelector('#cpuc');
let fans = document.querySelector('#fans');
let cpu = document.querySelector('#cpu');
let wifi = document.querySelector('#wifi');
let comboAorus = document.querySelector('#comboAorus');
let aorus = document.querySelector('#aorus');
let comboAsus = document.querySelector('#comboAsus');
let asus = document.querySelector('#asus');
let mem1v = document.querySelector('#mem1v');
let mem2v = document.querySelector('#mem2v');
let mem3v = document.querySelector('#mem3v');
let ssdv = document.querySelector('#ssdv');
let cpucv = document.querySelector('#cpucv');
let fansv = document.querySelector('#fansv');
let cpuv = document.querySelector('#cpuv');
let wifiv = document.querySelector('#wifiv');
let comboAorusv = document.querySelector('#comboAorusv');
let aorusv = document.querySelector('#aorusv');
let comboAsusv = document.querySelector('#comboAsusv');
let asusv = document.querySelector('#asusv');
let total = document.querySelector('#total');
let campos = [mem1,mem2,mem3,ssd,cpuc,fans,cpu,wifi,comboAorus,aorus,comboAsus,asus];
let valores = [mem1v,mem2v,mem3v,ssdv,cpucv,fansv,cpuv,wifiv,comboAorusv,aorusv,comboAsusv,asusv];

/*
function memory(){
    if (mem1.checked){
        return mem1v.value;
    }else if(mem2.checked){
        return mem2v.value;
    }else if (mem3.checked){
        return mem3v.value;
    }
}
function ssdf(){
    if (ssd.checked){
        return ssdv.value;
    }else{
        return 0
    }
}
function cpucf(){
    if (cpuc.checked){
        return cpucv.value;
    }else{
        return 0
    }
}
function fansf(){
    if (fans.checked){
        return fansv.value;
    }else{
        return 0
    }
}*/
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
    for(let i in valores){
        if (campos[i].checked){
            sum += Number(valores[i].value);
            
        }
    }
   
    total.innerHTML= sum;
})