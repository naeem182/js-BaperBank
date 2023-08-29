

//
function getinputfieldvaluebyid(inputid) {
    const inputfield = document.getElementById(inputid)
    const inputfieldvaluestring = inputfield.value
    const inputfieldvalue = parseFloat(inputfieldvaluestring)
    inputfield.value = ''
    return inputfieldvalue
}
//
function gettextvaluebyid(textid) {
    const textfield = document.getElementById(textid)
    const textfieldvaluestring = textfield.innerText
    const textfieldvalue = parseFloat(textfieldvaluestring)
    return textfieldvalue
}
//set
function settextvaluebyid(elementid, newvalue) {

    const textelement = document.getElementById(elementid)
    textelement.innerText = newvalue
}
//
document.getElementById('btn-deposite').addEventListener('click', function () {
    //
    const newdepositeAmount = getinputfieldvaluebyid('Depositefield')
    if (isNaN(newdepositeAmount)) {
        alert('nsdjndjndn')
        return
    }
    //
    const predepositeTotal = gettextvaluebyid('depositeTotal')
    //
    const currentdepositeTotal = newdepositeAmount + predepositeTotal
    //set
    settextvaluebyid('depositeTotal', currentdepositeTotal)
    //
    const prebalancetotal = gettextvaluebyid('Balancetotal')

    //



    //
    const currentbalaneTotal = prebalancetotal + newdepositeAmount
    //
    settextvaluebyid('Balancetotal', currentbalaneTotal)

})
//for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function () {

    const newwithdrawamount = getinputfieldvaluebyid('withdrawField')

    if (isNaN(newwithdrawamount)) {
        alert('please input a valid number')
        return
    }

    const prewithdrawtotal = gettextvaluebyid('withdrawtotal')

    const agerbalancetotal = gettextvaluebyid('Balancetotal')
    if (newwithdrawamount > agerbalancetotal) {
        alert('baper bank e eto tk nai')
        return

    }

    const currentwithdrawtotal = prewithdrawtotal + newwithdrawamount
    const latestbalanceTotal = agerbalancetotal - newwithdrawamount
    settextvaluebyid('withdrawtotal', currentwithdrawtotal)

    settextvaluebyid('Balancetotal', latestbalanceTotal)

})