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

        //public IList<Flashcard>  FlashcardSet { get; set; }

        public List<Flashcard> FlashcardSet = new List<Flashcard>
        {
            new Flashcard{Term="Vabadussõda", Definition="1918 a"},
            new Flashcard{Term="Jüriöö ülestõus", Definition="1343 a"},
            new Flashcard{Term="Esimene maailmasõda", Definition="1914 a"},
            new Flashcard{Term="Teine maailmasõda", Definition="1939 a"},
            new Flashcard{Term="Põhjasõda", Definition="1700 a"},
            new Flashcard{Term="Prantsuse revolutsioon", Definition="1789 a"},
            new Flashcard{Term="Antiikaeg", Definition="Ajalooperiood, mis kestis Lääne-Riima riigi langusest uusaja riikide tekkeni (V - XVI saj.)"},
            new Flashcard{Term="Vasall", Definition="Feodaal, kes sai oma senjöörilt maad"},
            new Flashcard{Term="Loonusrent", Definition="Koormis, mida talupeog tasus oma põllult kogutud saagiga"}

        };

    }
}
