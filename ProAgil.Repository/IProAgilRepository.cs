using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        //Geral
         void Add<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
         Task<bool> SaveChancesAsync();

         //Eventos
         Task<Evento[]> GetAllEventosAsyncByTema(string tema, bool includePalestrantes);
         Task<Evento[]> GetAllEventosAsync(bool includePalestrantes);
         Task<Evento> GetEventosAsyncById(int EventoId, bool includePalestrantes);

         //Palestrante
         Task<Palestrante[]> GetPalestrantesAsyncByNome(string name, bool includeEventos);
         Task<Palestrante> GetPalestrantesAsync(int PalestranteId, bool includeEventos);
    }
}