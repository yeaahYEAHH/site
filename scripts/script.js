document.getElementById('btn').onclick = function () {
    calcCost();
}

function calcCost() {
    document.getElementById('info').style.display = 'block';
    var select = document.getElementById('select').value;
    var kolvo = document.getElementById('kolvo').value;
    var price = select * kolvo;
    document.getElementById('price').innerHTML = price;

    if( select == 0){
        document.getElementById('info').style.display = 'none';
        alert('Укажите количество')
        return;
    }
}

