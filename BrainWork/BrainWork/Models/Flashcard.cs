using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BrainWork.Models
{
    public class Flashcard
    {
        public string Term { get; set;}
        public string Definition { get; set; }
    }
}
