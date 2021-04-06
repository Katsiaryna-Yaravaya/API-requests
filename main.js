fetch('http://api.citybik.es/v2/networks').then(res => {
    res.json().then(data => {
        const renderArr = data.networks.map((item) => {
            return {
                id: item.id,
                name: item.company,
                location: item.location.city
            }
        })
        renderTable(renderArr)
    })
});

const onRowClick = (id) => {
    fetch(`http://api.citybik.es/v2/networks/${id}`).then(res => {
        res.json().then(data => {
            const renderClickArr = data.network.stations.map((item) => {
                console.log(item)
                return {
                    networkName: data.network.name,
                    stationName: item.name || 'default text',
                    amountFreeBikes: item.free_bikes || 'default text',
                    amountSlots: item.extra?.slots || 'default text'
                }
            })
            console.log(renderClickArr)
            renderTable(renderClickArr)
        })
    })
};

const renderTable = (items) => {
    console.log(items)
    const table = document.querySelector('.table')
    const oldTableBody = document.getElementById('data')
    oldTableBody?.remove();
    const newTableBody = document.createElement('tbody')
    table.appendChild(newTableBody)
    newTableBody.id = 'data'

    items.forEach((network, index) => {
        if (index > 19) return
        const row = document.createElement('tr');
        row.onclick = network.id?() => onRowClick(network.id) : null

        for (let key in network) {
            if (key !== 'id') {
                const cell = document.createElement('td');
                cell.innerText = network[key]
                row.appendChild(cell)
            }
        }

        newTableBody.appendChild(row);
    })
}
