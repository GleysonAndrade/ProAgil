namespace ProAgil.Domain
{
    public class PalestranteEvento
    {
        public int PalestranteId { get; set; }
        public Palestrante Palestrante { get; set; }
        public int EventoId { get; set; }
        public Evento Evento { get; set; }
    }
}

//PalestranteId === EventoId
//      1               1
//      1               2
//      1               3
//      2               1
//Cardinalidade N x N