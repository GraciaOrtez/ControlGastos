let listaNombreGastos = [];
let listaValoresGastos = [];

//esta funcion se invoca al momento de que el usuario hace click al boton

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValoresGastos);

    //alert('click de usuario')
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]); 
        let estilo = '';
        let textoAdicional = '';

        if (valorGasto > 150){
            estilo = 'style="color: red;"';
            textoAdicional = '(Presupuesto excedido)';
        }
        htmlLista += `<li>${elemento} - USD ${valorGasto} ${textoAdicional}
           
          <button onclick="eliminarGasto(${posicion});">Eliminar</button>
          <button onclick="editarGasto(${posicion});">Editar</button>
        
        </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);
    })

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar ();

}

function limpiar () {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto (posicion) {
    listaNombreGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1)
    actualizarListaGastos();
}

function editarGasto(posicion) {
    const nuevoValor = prompt("Ingrese el nuevo valor del gasto:", listaValoresGastos[posicion]);
    if (nuevoValor !== null && nuevoValor !== "") {
        if (!isNaN(nuevoValor)) { // Validación para asegurar que sea un número
            listaValoresGastos[posicion] = nuevoValor;
            actualizarListaGastos();
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
    }
}
