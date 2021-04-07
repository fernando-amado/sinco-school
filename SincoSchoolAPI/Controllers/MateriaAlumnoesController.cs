using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SincoSchoolAPI.Models;

namespace SincoSchoolAPI.Controllers
{
    public class MateriaAlumnoesController : ApiController
    {
        private SincoSchoolDBEntities db = new SincoSchoolDBEntities();

        // GET: api/MateriaAlumnoes
        public IQueryable<MateriaAlumno> GetMateriaAlumno()
        {
            return db.MateriaAlumno;
        }

        // GET: api/MateriaAlumnoes/5
        [ResponseType(typeof(MateriaAlumno))]
        public IHttpActionResult GetMateriaAlumno(int id)
        {
            MateriaAlumno materiaAlumno = db.MateriaAlumno.Find(id);
            if (materiaAlumno == null)
            {
                return NotFound();
            }

            return Ok(materiaAlumno);
        }

        // PUT: api/MateriaAlumnoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMateriaAlumno(int id, MateriaAlumno materiaAlumno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != materiaAlumno.IdMateriaAlumno)
            {
                return BadRequest();
            }

            db.Entry(materiaAlumno).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MateriaAlumnoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MateriaAlumnoes
        [ResponseType(typeof(MateriaAlumno))]
        public IHttpActionResult PostMateriaAlumno(MateriaAlumno materiaAlumno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MateriaAlumno.Add(materiaAlumno);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = materiaAlumno.IdMateriaAlumno }, materiaAlumno);
        }

        // DELETE: api/MateriaAlumnoes/5
        [ResponseType(typeof(MateriaAlumno))]
        public IHttpActionResult DeleteMateriaAlumno(int id)
        {
            MateriaAlumno materiaAlumno = db.MateriaAlumno.Find(id);
            if (materiaAlumno == null)
            {
                return NotFound();
            }

            db.MateriaAlumno.Remove(materiaAlumno);
            db.SaveChanges();

            return Ok(materiaAlumno);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MateriaAlumnoExists(int id)
        {
            return db.MateriaAlumno.Count(e => e.IdMateriaAlumno == id) > 0;
        }
    }
}