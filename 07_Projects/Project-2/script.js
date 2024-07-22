const form = document.querySelector('form');

// This usecase will give you empty value
// const height = Number(document.querySelector('#height').value);
// const weight = Number(document.querySelector('#weight').value);

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const category = document.querySelector('#category');
    
    if(height === '' || height <=0 || isNaN(height)){
        results.innerHTML = `Please Give a Valid Height ${height}`;
    }

    else if(weight === '' || weight <=0 || isNaN(weight)){
        results.innerHTML = `Please Give a Valid Weight ${weight}`;
    }

    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span> ${bmi} </span>`;
        if(bmi<18.6){
            category.innerHTML = "Under Weight";
        }
        else if(bmi>18.6 && bmi<24.9){
            category.innerHTML = "Normal Weight";
        }
        else{
            category.innerHTML = "Over Weight";
        }
    }

});