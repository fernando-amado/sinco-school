//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SincoSchool
{
    using System;
    using System.Collections.Generic;
    
    public partial class MateriaAlumno
    {
        public int IdMateriaAlumno { get; set; }
        public int Materia_IdMateria { get; set; }
        public int Alumnoes_IdAlumno { get; set; }
    
        public virtual Alumnos Alumnos { get; set; }
        public virtual Materias Materias { get; set; }
    }
}
