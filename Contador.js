function contar(){
    let ini = document.getElementById('start')
    let fim = document.getElementById('end')
    let passo = document.getElementById('step')    
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert(`[ERRO] Faltam dados!`)
        res.innerHTML=`Impossível contar`
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f ){
            for ( c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }         
        } else {
            for ( c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}