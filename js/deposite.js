//step 1 add click event handler with the subimt button 
document.getElementById('btn-deposite').addEventListener('click', function () {
    //console.log('deposite btn clicked')
    //step 2 get the deposite amount inside the deposite input field
    const depositefield = document.getElementById('Deposite-field')
    const newdepositeAmountstring = depositefield.value
    const newdepositeAmount = parseFloat(newdepositeAmountstring)


    //clear the deposite field
    depositefield.value = ''

    ///
    if (isNaN(newdepositeAmount)) {
        alert('please input a valid number')
        return
    }

    //
    // if (newdepositeAmountstring === null || newdepositeAmountstring === "") {
    //     alert('Enter a number')
    // }

    //step 3 get the depositetotal  inside the deopsite h2 field
    const depositetotalelement = document.getElementById('deositeTotal')
    const predepositeTotalstring = depositetotalelement.innerText
    const predepositeTotal = parseFloat(predepositeTotalstring)
    // ste 4 add num to set total deosite
    const currentdepositeTotal = predepositeTotal + newdepositeAmount
    //set in deosite field
    depositetotalelement.innerText = currentdepositeTotal

    //ste 5 get prebalance total

    const Balancefield = document.getElementById('Balancetotal')
    const Balancestring = Balancefield.innerText
    const balancetotal = parseFloat(Balancestring)
    // if (newdepositeAmount == ) {
    //     alert('dhbhddhbdhb')
    // }


    // ste 6 add num to set total balane
    const currentbalanceTotal = balancetotal + newdepositeAmount
    //set currentbalane in balanefield
    Balancefield.innerText = currentbalanceTotal




})

