using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BrainWork.Models;

namespace BrainWork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YourStudySetsController : ControllerBase
    {
        private readonly BrainWorkContext _context;

        public YourStudySetsController(BrainWorkContext context)
        {
            _context = context;
        }

        // GET: api/YourStudySets
        [HttpGet]
        public IEnumerable<YourStudySet> GetYourStudySet()
        {
            return _context.YourStudySet;
        }

        // GET: api/YourStudySets/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetYourStudySet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var yourStudySet = await _context.YourStudySet.FindAsync(id);

            if (yourStudySet == null)
            {
                return NotFound();
            }

            return Ok(yourStudySet);
        }

        // PUT: api/YourStudySets/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutYourStudySet([FromRoute] int id, [FromBody] YourStudySet yourStudySet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != yourStudySet.Id)
            {
                return BadRequest();
            }

            _context.Entry(yourStudySet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YourStudySetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/YourStudySets
        [HttpPost]
        public async Task<IActionResult> PostYourStudySet([FromBody] YourStudySet yourStudySet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.YourStudySet.Add(yourStudySet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetYourStudySet", new { id = yourStudySet.Id }, yourStudySet);
        }

        // DELETE: api/YourStudySets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteYourStudySet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var yourStudySet = await _context.YourStudySet.FindAsync(id);
            if (yourStudySet == null)
            {
                return NotFound();
            }

            _context.YourStudySet.Remove(yourStudySet);
            await _context.SaveChangesAsync();

            return Ok(yourStudySet);
        }

        private bool YourStudySetExists(int id)
        {
            return _context.YourStudySet.Any(e => e.Id == id);
        }
    }
}