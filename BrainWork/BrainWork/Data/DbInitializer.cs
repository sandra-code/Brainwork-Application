using BrainWork.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrainWork.Data
{
    public class DbInitializer
    {
        public static void Initialize(BrainWorkContext context)
        {
            context.Database.EnsureCreated();
            if (context.YourStudySet.Any())
            {
                return;
            }

            var yourStudySets = new YourStudySet[]
            {
                new YourStudySet{Title="Ajalugu"},
                new YourStudySet{Title="Muusika"},
                new YourStudySet{Title="Keemia valemid"},
                new YourStudySet{Title="Geograafia kordamisküsimused"}
            };

            foreach (YourStudySet set in yourStudySets)
            {
                context.YourStudySet.Add(set);
            }

            context.SaveChanges();
        }
           
    }
}
