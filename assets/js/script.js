let listaNombreGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let editarIndex = null; 

//esta funcion se invoca al momento de que el usuario hace click al boton

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value; // agrega una descripcion a los gastos
    
    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto); 

    if (editarIndex !== null) {
        // Actualizar el gasto existente
        listaNombreGastos[editarIndex] = nombreGasto;
        listaValoresGastos[editarIndex] = valorGasto;
        listaDescripcionGastos[editarIndex] = descripcionGasto;
        editarIndex = null; // ultimo cambio
    }

    else {

    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGasto);
    }

    console.log(listaNombreGastos);
    console.log(listaValoresGastos);
    console.log(descripcionGasto);

    //alert('click de usuario')
    limpiar();
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]); 
        const descripcionGasto = listaDescripcionGastos[posicion];
       
        let estilo = '';
        let textoAdicional = ''; // Asegúrate de definir esta variable aquí

        if (valorGasto > 150) {
            estilo = 'style="color: red;"';
            textoAdicional = '(Presupuesto excedido)';
        
        }
            
        htmlLista += `<li>
            ${elemento} - USD ${valorGasto} ${textoAdicional} <br>
            Descripción: ${descripcionGasto}
           
          <button onclick="eliminarGasto(${posicion});">Eliminar</button>
          <button onclick="editarGasto(${posicion});">Editar</button>
        
        </li>`;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar ();

}

function limpiar () {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto (posicion) {
    listaNombreGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    editarIndex = posicion; // Guardar índice del gasto a editar
    document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGastos[posicion];
}
