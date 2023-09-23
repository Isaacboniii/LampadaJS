const turnOn = document.getElementById ( "turnOn" );
const turnOff = document.getElementById ( "turnOff" );
const lampada = document.getElementById ( "lampada" );

function lampadaOn () {
    if ( !isLampadaBroken () ) {
    lampada.src = `./ligada.jpg`
    }
}

function lampadaOff () {
    if ( !isLampadaBroken () ) {
    lampada.src = `./desligada.jpg`
    }
}

function lampadaBroken () {
    lampada.src = `./quebrada.jpg`
}

function isLampadaBroken () {
    return lampada.src.indexOf ( "quebrada" ) > -1
}

turnOn.addEventListener ( "click", lampadaOn )
turnOff.addEventListener ( "click", lampadaOff )
lampada.addEventListener ("mouseover", lampadaOn)
lampada.addEventListener ("mouseleave", lampadaOff)
lampada.addEventListener ("dblclick", lampadaBroken)
