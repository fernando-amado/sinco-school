const tabla = document.querySelector(".tbodyMateria");
const tbody = document.getElementById("lista");
const boton = document.getElementById("guardarMateria");
const inputNombre= document.getElementById("nombreMateria");
const inputId= document.getElementById("idMateria");
const botonlimpiar= document.getElementById("limpiar");

boton.addEventListener("click",()=>{
    if (inputId.value != "") {
        Editar(inputId.value,inputNombre.value);
      } else {
        Agregar(inputNombre.value)
      }
})

botonlimpiar.addEventListener("click", ()=>{
    inputId.value="";
    inputNombre.value="";
})

inputNombre.addEventListener("keyup",()=>{
    if(inputNombre.value==""){
        inputId.value="";
        console.log(inputId.value)
    }
})


function listarMateria(){
    fetch("https://localhost:44379/api/Materias/")
    .then(response=>response.json())
    .then(materias => materias.forEach(materia=>{
        llenarTabla(materia)
    } ))
}


function llenarTabla(m){
    let nMateria= document.createElement('tr');
    
    nMateria.innerHTML +='<td>'+m.Name+'</td>';
    nMateria.setAttribute("data-id",m.IdMateria)
    nMateria.innerHTML += `<td class="tdBoton "><i class="btnEditar far fa-edit"onclick="AbrirEditar(${m.IdMateria},'${m.Name}')"></i>
    <i class=" fas fa-trash-alt btnEliminar" onclick="Eliminar(${m.IdMateria})"></i></td>`;
    tabla.appendChild(nMateria);
    inputNombre.value="";
}

function Agregar(m){
    fetch("https://localhost:44379/api/Materias/", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"POST",
        body: JSON.stringify({
            Name: m
        })
    }).then(response=> response.json())
    .then(data=>llenarTabla(data) ),cerrarModal(event),
			limpiarDatos();
}

function AbrirEditar(id, nombre){
    inputId.value=id;
    inputNombre.value= nombre 
}

function Editar (id,nombre){
    fetch("https://localhost:44379/api/Materias/"+id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"PUT",
        body: JSON.stringify({
            IdMateria: parseInt(id),
            Name: nombre
        })
    }).then(()=>{
        let tr=document.querySelector(`tr[data-id="${id}"]`)
        tr.innerHTML=`<td>${nombre} 
        <td><i class="btnEditar far fa-edit" onclick="AbrirEditar(${id},'${nombre}')"></i>
        <i class=" fas fa-trash-alt btnEliminar" onclick="Eliminar(${id})"></i></td>`
    }),cerrarModal(event),
			limpiarDatos();
}

function Eliminar(id){
    if(window.confirm("¿Seguro de que quiere eliminar este registro?")){
        fetch("https://localhost:44379/api/Materias/"+id, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method :"DELETE",
        body: JSON.stringify({
            IdMateria: parseInt(id)
        })
    }).then(()=>{
        let tr=document.querySelector(`tr[data-id="${id}"]`)
        tabla.removeChild(tr);
        inputId.value="";
        inputNombre.value="";
    })
    }
    
}

listarMateria();