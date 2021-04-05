// const response = fetch('http://api.citybik.es/v2/networks')
//     .then(response => response.json())
//     .then(data => renderTable(data));
//
// function renderTable() {
//
// }

fetch('http://api.citybik.es/v2/networks').then(res => {
    res.json().then(data => {
        console.log(data);

        if (data.networks.length > 0) {
            let temp = "";
            data.networks.forEach((item, index) => {
                if (index > 19) {
                    return
                }
                temp += '<tr>';
                temp += '<td>' + item.company + '</td>';
                temp += '<td>' + item.location.city + '</td></tr>';

             /*   //дожидаемся полной загрузки страницы
                window.onload = function () {

                    //получаем идентификатор элемента
                    var a = document.getElementById('switch');

                    //вешаем на него событие
                    a.onclick = function () {
                        //производим какие-то действия
                        if (this.innerHTML === 'On') this.innerHTML = 'Off';
                        else this.innerHTML = 'On';
                        //предотвращаем переход по ссылке href
                        return false;
                    }
                }*/

               /* item.company.onclick = function () {
                    temp += '<tr>';
                    if (temp += '<td>' + item.company + '</td>') {
                    temp += '<td>' + item.name + '</td>';
                    }else if (temp += '<td>' + item.location.city + '</td>') {
                        temp += '<td>' + item.extra.free-bikes + '</td>';
                        temp += '<td>' + item.extra.slots + '</td></tr>';
                    } else {
                        temp += '<td>' + item.company + '</td>';
                        temp += '<td>' + item.location.city + '</td></tr>';
                    }
                }*/
            })
            document.getElementById('data').innerHTML = temp;
        }
    });
})
