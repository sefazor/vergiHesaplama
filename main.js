function years(){
    let currentDate = new Date();
    let year=currentDate.getFullYear();

    for(let i=year;i>=2000;i--){
        let yearOptions = document.createElement("option");
        document.querySelector('#modelYear').options.add(yearOptions);
        yearOptions.value=i;
        yearOptions.text=i;
    }
}

function calcTax() {
    let vehicleType;
    let carPower;
    let modelYear;
    let taxDebt;
    let i;

    // Araç Tipini Öğrenme
    for(i=0;i<document.querySelector('#vehicleType').length;i++){
        if(document.querySelector('#vehicleType').options[i].selected) {
            vehicleType = document.querySelector('#vehicleType').options[i].value;
        }
    } 

    // Motor Gücü Öğren

    for(i=0;i<document.getElementsByName("enginePower").length;i++){
        if(document.getElementsByName("enginePower")[i].checked) {
            carPower = document.getElementsByName("enginePower")[i].value
        } 
    }


    // Model Yılı Öğren

    for(i=0;i<document.querySelector('#modelYear').length;i++){
        if(document.querySelector('#modelYear').options[i].selected) {
            modelYear = document.querySelector('#modelYear').options[i].value;
        } 
    }


    // Araç tipi fiyatlandırması

    if(vehicleType =="motorbycle") {
        taxDebt = 1000;
    } else if(vehicleType=="car") {
        taxDebt = 2000;
    }



    // Motor Gücü Fiyatlandırması 

    if(carPower == "999cc"){
        taxDebt = taxDebt*1.5;
    } else if (carPower == "1000cc-2000cc"){
        taxDebt = taxDebt*2;
    } else if(carPower =="2000cc-3000cc"){
        taxDebt = taxDebt*2.5;
    }

    // Model Yılı Fiyatlandırması

    if(modelYear <= 2015){
        taxDebt = taxDebt/1.2;
    } else if (modelYear <= 2010) {
        taxDebt = taxDebt/1.4;
    }  else if (modelYear <= 2005) {
        taxDebt = taxDebt/1.6;
    }


    // Sonuç yazdırma

    document.querySelector('#result').innerHTML="Ödemeniz gereken vergi: "+taxDebt;
    result.style.color="#000";
    result.style.fontSize="18px";
    result.style.fontWeight="700";
    result.style.backgroundColor="#fff";
    result.style.padding="30px 15px";
    
}

