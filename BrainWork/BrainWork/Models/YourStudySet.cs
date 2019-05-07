using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;

namespace BrainWork.Models
{
    public class YourStudySet
    {
        public int Id { get; set; }
        public string Title { get; set; }
        //public Flashcard[] FlashcardSet = new Flashcard[] { new Flashcard { Term = "testiterm", Definition = "testidef" } };
        
        public IList<Flashcard>  FlashcardSet { get; set; }

    }
}
