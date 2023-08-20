let price = 0;
function buyNowParent(target) {
    const count = document.querySelector('#parentDiv').childElementCount;
    // get the name
    const getName = target.childNodes[5].childNodes[1].innerText;
    // create elemet
    const li = document.createElement('li');
    li.innerHTML = `
        ${count + 1}. ${getName}
    `
    // append child
    const parentDiv = document.querySelector('#parentDiv').appendChild(li);
    // set price
    let getPrice = parseFloat(target.childNodes[5].childNodes[3].innerText.split(" ")[0]);
    price = (getPrice + price);
    if (price > 0) {
        document.querySelector('#buy-btn').disabled = false;
    } if (price >= 200) {
        document.querySelector('#apply-btn').disabled = false;
    }
    document.querySelector('#price').childNodes[1].childNodes[1].innerText = price.toFixed(2) + ' TK';
    // total
    document.querySelector('#price').childNodes[5].childNodes[1].innerText = price.toFixed(2) + ' TK';

}
// discount part
document.querySelector('#apply-btn').addEventListener('click', () => {
    const code = document.querySelector('#coupne-code').value;
    if (code === 'SELL200') {
        const discountPrice = (price - (0.2 * price)).toFixed(2)
        const discount = (price - discountPrice).toFixed(2);
        document.querySelector('#price').childNodes[3].childNodes[1].innerText = discount + ' TK';
        document.querySelector('#price').childNodes[5].childNodes[1].innerText = discountPrice + ' TK';
    }
    document.querySelector('#coupne-code').value = '';
})

// reset class
function home(target) {
    console.log(price)
    price = 0;
    const removeStyle = document.querySelector('#parentDiv').innerHTML = "";
    console.log(removeStyle);
    const resetPrice = document.querySelector('#price').childNodes[1].childNodes[1].innerText = "00 TK";
    document.querySelector('#price').childNodes[3].childNodes[1].innerText = '00 TK';
    // total 
    document.querySelector('#price').childNodes[5].childNodes[1].innerText = '00 TK';
    document.querySelector('#buy-btn').disabled = true;
    document.querySelector('#apply-btn').disabled = true;
}