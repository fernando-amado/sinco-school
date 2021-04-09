const options = Array.from(document.querySelectorAll('a'));
const sections = Array.from(document.querySelectorAll('section'));
const seccionprofesores= document.getElementById("profesor");
const seccionmaterias = document.getElementById("materia")
const welcome = document.getElementById('welcome');
const materia = document.getElementById('materia');
const profesor = document.getElementById('profesor');

// const gestionarAlumnos = document.querySelector('.gestionarAlumnos');
// const asignarNotas = document.querySelector('.asignarNotas');
// const verReporte = document.querySelector('.verReporte');
// const gestionarProfesor = document.querySelector('.gestionarProfesor');
// const asignarMateriaProfesor = document.querySelector('.asignarMateriaProfesor');


options.forEach((option) => {
    option.addEventListener('click',()=>{
        welcome.classList.add('hidden');
            sections.forEach(section => {  
                    if(section.classList.contains(`${option.id}`)){
                        section.classList.toggle('hidden');
                    }else{
                        section.classList.add('hidden');
                    }
                })
        })
})


    