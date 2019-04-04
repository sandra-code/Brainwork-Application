using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BrainWork.Models
{
    public class BrainWorkContext : DbContext
    {
        public BrainWorkContext (DbContextOptions<BrainWorkContext> options)
            : base(options)
        {
        }

        public DbSet<YourStudySet> YourStudySet { get; set; }
    }
}
