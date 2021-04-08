const tabla= document.querySelector(".tablaMateria")
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
    nMateria.innerText =m.Name;
    nMateria.setAttribute("data-id",m.IdMateria)
    nMateria.innerHTML+=`<button class="btnEditarMateria" onclick="AbrirEditar(${m.IdMateria},'${m.Name}')">Editar</button>`
    nMateria.innerHTML+=`<button class="btnEliminarMateria" onclick="Eliminar(${m.IdMateria})">Eliminar</button>`
    tabla.appendChild(nMateria);
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
    .then(data=>llenarTabla(data))
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
        tr.innerHTML=`${nombre} <button onclick="AbrirEditar(${id},'${nombre}')">Editar</button>`
        tr.innerHTML+=`<button onclick="Eliminar(${id})">Eliminar</button>`
    })
}

function Eliminar(id){
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

listarMateria();