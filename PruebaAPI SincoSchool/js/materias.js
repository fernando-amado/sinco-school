const tabla= document.getElementById("tabla")
const tbody = document.getElementById("lista");
const boton = document.getElementById("guardar");
const inputNombre= document.getElementById("nombreMateria");
boton.addEventListener("click",()=>{
    console.log("click funcional")
    console.log(inputNombre.value)
    Agregar(inputNombre.value)
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

listarMateria();