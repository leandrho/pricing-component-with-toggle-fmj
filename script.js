const data = [
    {
        monthly: {
            basic: 19.99,
            professional: 24.99,
            master: 39.99,
        }
    },
    {
        annually: {
            basic: 199.99,
            professional: 249.99,
            master: 399.99,
        }
    }
];

const switchPricing = document.getElementById('switch-pricing');
switchPricing.addEventListener('change', ()=>{
    const basicprice = document.querySelector('#basic-price');
    const profprice = document.querySelector('#professional-price');
    const masterprice = document.querySelector('#master-price');
    
    if(switchPricing.checked){
        basicprice.innerHTML = data[0].monthly.basic;
        profprice.innerHTML = data[0].monthly.professional;
        masterprice.innerHTML = data[0].monthly.master;
    }
    else{
        basicprice.innerHTML = data[1].annually.basic;
        profprice.innerHTML = data[1].annually.professional;
        masterprice.innerHTML = data[1].annually.master;
    }
    basicprice.closest('.card-price').classList.add('fade-in');
    profprice.closest('.card-price').classList.add('fade-in');
    masterprice.closest('.card-price').classList.add('fade-in');
    setTimeout(() => {
        basicprice.closest('.card-price').classList.remove('fade-in');
        profprice.closest('.card-price').classList.remove('fade-in');
        masterprice.closest('.card-price').classList.remove('fade-in');
    }, 1000);
});