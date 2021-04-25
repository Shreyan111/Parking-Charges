function doCalculation(){
    var addCustomer = 'ADD';
    let sum = 0;
    while (addCustomer == 'ADD'){
        const hours = prompt('Input the number of hours');
        if(hours<=3){
            charges = 2;            
        }
        else if (hours>3 && hours<=19){
            let i = hours - 3;
            charges = (i*0.5)+2;
        }
        else{
            charges = 10;
        }
    
        document.getElementById("charges").value = charges;

        var Item = document.getElementById("charges").value;
        localStorage.setItem("storedItem", Item);
        //document.getElementById("savedText").innerHTML = Item + "SAVED"
        Item = parseFloat(Item);
        sum = parseFloat(sum);
        sum = sum + Item;
        document.getElementById("showText").innerHTML = "$"+sum;

        addCustomer = prompt("Add a Customer? Type 'ADD' and To Break, press any letter", 'ADD');
    }

}