const currency1=document.getElementById("currency1");
const currency2=document.getElementById("currency2");
const amount1=document.getElementById("amount1");
const amount2=document.getElementById("amount2");
const rate=document.getElementById("rate");
const swap=document.getElementById("swap");


function calculate(){
    const currOne = currency1.value;
    const currTwo = currency2.value;
    fetch(`http://api.exchangeratesapi.io/api/latest?access_key=7213037eeb3f378ce787c0ab96abb6b5`)
    .then(res=>res.json())
    .then(data=>{

        const curr2_in_euro=data.rates[currTwo];
        const euro_in_curr1=1 / data.rates[currOne];
        const curr2_in_curr1 = curr2_in_euro * euro_in_curr1;

        


        rate.innerText = `1 ${currOne} = ${curr2_in_curr1} ${currTwo}`;
        amount2.value=(amount1.value*curr2_in_curr1).toFixed(2);



    })
}


currency1.addEventListener('change',calculate);
currency2.addEventListener('change',calculate);
amount1.addEventListener('change',calculate);
amount2.addEventListener('change',calculate);
swap.addEventListener('click',()=>{
    const temp = currency1.value;
    currency1.value=currency2.value;
    currency2.value=temp;
    calculate();
});

calculate();




// 7213037eeb3f378ce787c0ab96abb6b5