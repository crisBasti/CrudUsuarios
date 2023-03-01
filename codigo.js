const d = document;


let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: ''
}

let editando = false;

const formulario = d.querySelector('#formulario');
const nombreImput = d.querySelector('#nombre');
const puestoImput = d.querySelector('#puesto');
const btnAgregar = d.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreImput.value === '' || puestoImput.value === '') {
        alert('llene todos los campos');
        return
    }

    if(editando) {
        editarEmpleado();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreImput.value;
        objEmpleado.puesto = puestoImput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
}

function mostrarEmpleados() {

    limpiarHTML();

    const divEmpleados = d.querySelector('.div-empleados');

    listaEmpleados.forEach( empleado => {
        const {id, nombre, puesto} = empleado;

        const parrafo = d.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${puesto} - `;
        parrafo.dataset.id;

        const editarBoton = d.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = d.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = d.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);


    })
}

function cargarEmpleado(empleado) {
    const {id, nombre, puesto} = empleado;

    nombreImput.value = nombre;
    puestoImput.value = puesto;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarEmpleado() {

    objEmpleado.nombre = nombreImput.value;
    objEmpleado.puesto = puestoImput.value;

    listaEmpleados.map( empleado => {
        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;
        }
    });

    limpiarHTML();
    mostrarEmpleados();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}


function eliminarEmpleado(id) {
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}


function limpiarHTML() {
    const divEmpleados = d.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}
















// -----------------------------------------------------------------------------------------------------------------


// const d = document;

// let listaUsuarios = [];

// const objUsuarios = {
//     id: '',
//     usuario:'',
//     credito:''
// };

// let editando = false;

// const formulario =d.querySelector('#formulario');
// const usuarioInput = d.querySelector('#usuario');
// const creditoInput = d.querySelector('#credito');
// const btnAgregar = d.querySelector('#btnAgregar');

// formulario.addEventListener('submit', validarFormulario);

// function validarFormulario(e) {
//     e.preventDefault();

//     if(usuarioInput.value === '' || creditoInput.value === ''){
//         alert('Todos los campos deben llenarse');
//         return;
//     }

//     if(editando) {
//         editarUsuario();
//         editando = false;
//     } else {
//         objUsuarios.id = Date.now();
//         objUsuarios.usuario = usuarioInput.value;
//         objUsuarios.credito = creditoInput.value;

//         agregarUsuario();
//     }
// }

// function agregarUsuario() {
//     listaUsuarios.push = ({...objUsuarios});

//     mostrarUsuarios();
// }

// function mostrarUsuarios() {
//     const divUsuarios = d.querySelector('.div-usuarios')

//     listaUsuarios.forEach(usuarios => {
//         const {id, usuario, credito} = usuarios;

//         const parrafo = d.createElement('p');
//         parrafo.textContent = `${id} - ${usuario} - ${credito} -`;
//         parrafo.dataset.id = id;

//         const editarBoton = d.createElement('button');
//         // editarBoton.onclick = () => cargarUsuario(usuario);
//         editarBoton.textContent = 'Editar';
//         editarBoton.classList.add('btn', 'btn-editar');
//         parrafo.append(editarBoton);


//         const eliminarBoton = d.createElement('button');
//         // eliminarBoton.onclick = () => eliminarUsuario(id);
//         eliminarBoton.textContent = 'eliminar';
//         eliminarBoton.classList.add('btn', 'btn-eliminar');
//         parrafo.append(eliminarBoton);

//         const hr = d.createElement('hr');

//         divUsuarios.appendChild(parrafo);
//         divUsuarios.appendChild(hr);
//     });
// }