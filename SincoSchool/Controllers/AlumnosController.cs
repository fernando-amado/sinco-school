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
using SincoSchool;

namespace SincoSchool.Controllers
{
    public class AlumnosController : ApiController
    {
        private SincoSchoolDBContainer db = new SincoSchoolDBContainer();

        // GET: api/Alumnos
        public IQueryable<Alumnos> GetAlumnos()
        {
            return db.Alumnos;
        }

        // GET: api/Alumnos/5
        [ResponseType(typeof(Alumnos))]
        public IHttpActionResult GetAlumnos(int id)
        {
            Alumnos alumnos = db.Alumnos.Find(id);
            if (alumnos == null)
            {
                return NotFound();
            }

            return Ok(alumnos);
        }

        // PUT: api/Alumnos/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAlumnos(int id, Alumnos alumnos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != alumnos.IdAlumno)
            {
                return BadRequest();
            }

            db.Entry(alumnos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlumnosExists(id))
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

        // POST: api/Alumnos
        [ResponseType(typeof(Alumnos))]
        public IHttpActionResult PostAlumnos(Alumnos alumnos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Alumnos.Add(alumnos);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = alumnos.IdAlumno }, alumnos);
        }

        // DELETE: api/Alumnos/5
        [ResponseType(typeof(Alumnos))]
        public IHttpActionResult DeleteAlumnos(int id)
        {
            Alumnos alumnos = db.Alumnos.Find(id);
            if (alumnos == null)
            {
                return NotFound();
            }

            db.Alumnos.Remove(alumnos);
            db.SaveChanges();

            return Ok(alumnos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AlumnosExists(int id)
        {
            return db.Alumnos.Count(e => e.IdAlumno == id) > 0;
        }
    }
}