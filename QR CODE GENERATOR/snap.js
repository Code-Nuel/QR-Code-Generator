

function showIt()
{
    //let myalert= document.getElementById('atext').value;
    //alert(myalert);
    let display = document.getElementById('message');
    let selectbro = document.getElementById('myselect').value;
    

    if (selectbro == 'goat') {

        display.innerHTML = 'THIS IS A GOAT';
    }
    else if (selectbro == 'cow') {

        display.innerHTML = 'Na cow be this';
    }

    else if (selectbro == 'sheep') {
        display.innerHTML = ' Sheep is white and black kind of';
    }

    else if (selectbro == 'hen') {
        display.innerHTML = 'CROW crow Crow';
    }
}

