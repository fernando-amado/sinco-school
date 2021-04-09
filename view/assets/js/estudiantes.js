const tablaAlumno = document.querySelector(".tbodyAlumno");

const btnGuardarAlumno = document.getElementById("guardarAlumno");
const NombreAlumno= document.getElementById("nombreAlumno");
const ApellidoAlumno= document.getElementById("apellidoAlumno");
const estadoAlumno = document.getElementById("estadoAlumno");
const idAlumno= document.getElementById("idAlumno");
const btnlimpiarAlumno= document.getElementById("limpiar");


btnGuardarAlumno.addEventListener("click",()=>{
    if (idAlumno.value != "") {
        EditarAlumno(idAlumno.value,NombreAlumno.value,ApellidoAlumno.value,estadoAlumno.value);
      } else {
        AgregarEstudiante(NombreAlumno.value,ApellidoAlumno.value,estadoAlumno.value)
      }
})


function listarAlumno(){
    fetch("https://localhost:44379/api/Alumnos/")
    .then(response=>response.json())
    .then(alumnos => alumnos.forEach(alumno=>{
        llenarTablaAlumno(alumno)
    } ))
}

function llenarTablaAlumno(a){
    let nAlumno= document.createElement('tr');
    nAlumno.innerHTML += `<td>${a.Nombre}</td>
    <td>${a.Apellido}</td>
    <td>${a.EstadoAlumno ? "Activo" : "Inactivo"}</td>
    <td><i class="btnEditar far fa-edit" onclick="AbrirEditarAlumno(${
			a.IdAlumno
		},'${a.Nombre}','${a.Apellido}',${
			a.EstadoAlumno == "Activo" ? 1 : 0
		})"></i>
    <i class="fas fa-trash-alt btnEliminar" onclick="EliminarAlumno(${
			a.IdAlumno
		})"></i></td>`;
    nAlumno.setAttribute("data-id",a.IdAlumno)
    tablaAlumno.appendChild(nAlumno);
}

function AgregarEstudiante(nombre,apellido,estado){
    fetch("https://localhost:44379/api/Alumnos", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"POST",
        body: JSON.stringify({
            Nombre: nombre,
            Apellido:apellido,
            EstadoAlumno: parseInt(estado)
        })
    }).then(response=> response.json())
    .then(data=>llenarTablaAlumno(data),cerrarModal(event))
}

function AbrirEditarAlumno(id,nombre,apellido,estado){
    editar(event);
    idAlumno.value=id;
    NombreAlumno.value= nombre;
    ApellidoAlumno.value= apellido;
    estadoAlumno.value = estado;
}

function EditarAlumno(id,nombre,apellido,estado){
    fetch("https://localhost:44379/api/Alumnos/"+id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"PUT",
        body: JSON.stringify({
            IdAlumno:id,
            Nombre: nombre,
            Apellido:apellido,
            EstadoAlumno: parseInt(estado)
        })
    }).then(()=>{
        let tr=document.querySelector(`tr[data-id="${id}"]`)
        tr.innerHTML = `<td>${nombre}</td>
        <td>${apellido}</td>
        <td>${estado==1 ? "Activo" : "Inactivo"}</td>
        <td><i class="btnEditar far fa-edit" onclick="AbrirEditarAlumno(${id},'${nombre}','${apellido}',${estado})"></i>
        <i class="fas fa-trash-alt btnEliminar" onclick="EliminarAlumno(${id})"></i></td>`;
    }),cerrarModal(event)
}

function EliminarAlumno(id){
    fetch("https://localhost:44379/api/Alumnos/"+id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"DELETE",
        body: JSON.stringify({
            IdAlumno: parseInt(id)
        })
    }).then(()=>{
        let tr=document.querySelector(`tr[data-id="${id}"]`)
        tablaAlumno.removeChild(tr);
    })
}

listarAlumno()