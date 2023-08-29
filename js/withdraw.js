document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdrawField')
    const newwithdrawamountstring = withdrawField.value
    const newwithdrawamount = parseFloat(newwithdrawamountstring)

    //clear field
    withdrawField.value = ''
    ///
    if (isNaN(newwithdrawamount)) {
        alert('please input a valid number')
        return
    }

    //
    const withdrawelement = document.getElementById('withdrawtotal')

    const prewithdrawamountstring = withdrawelement.innerText

    const prewithdrawamount = parseFloat(prewithdrawamountstring)
    //balance
    const balancefield = document.getElementById('Balancetotal')
    const balancetotalstring = balancefield.innerText
    const balancetotal = parseFloat(balancetotalstring)
    //
    if (newwithdrawamount > balancetotal) {
        alert('baper bank e eto tk nai')
        return

    }
    //
    const withdrawamount = prewithdrawamount + newwithdrawamount


    //
    withdrawelement.innerText = withdrawamount






    //
    const currentbalanceTotal = balancetotal - newwithdrawamount
    balancefield.innerText = currentbalanceTotal





})