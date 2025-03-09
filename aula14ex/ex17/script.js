function tabuada() {
    var num = Number(document.querySelector('#num').value)
    var tab = document.querySelector('#seltab')
    var res = document.querySelector('#res')

    if (num == '' || isNaN(num)) {
        res.innerHTML = 'Digite um número!'
        return
    }
    
    var multi = Number(1)
    
    tab.innerHTML = ''

    while (multi <= 10) {
        var item = document.createElement('option')
        
        item.text = `${num} x ${multi} = ${num * multi}`
        item.value = `tab${multi}`

        tab.appendChild(item)
        
        multi++
    }
}