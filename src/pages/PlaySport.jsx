import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import ErrorMensage from '../components/layout/content/ErrorMensage';

export default function PlaySport({ data }) {
  const { esporte } = useParams();
  const esporteData = data.esportes.find(e => e.slug.toLowerCase() === esporte.toLowerCase());

  if (!esporteData) {
    return <ErrorMensage description={'Esporte não encontrado'}/>;
  }

  return (
    <section className='py-4'>
        <div className="container-bet">
            <header className='mb-6'>
              <div className='flex items-center gap-4'>
                <div>
                  <img src={esporteData.logo} alt={esporteData.nome} className='w-12 rounded-full' />
                </div>
                <div>
                  <h1 className='text-2xl font-bold'>{esporteData.nome}</h1>
                </div>
              </div>
            </header>

            {
                esporteData.campeonatos.map(campeonato => (
                    <div key={campeonato.nome}>
                        <div className='py-3 px-4 bg-secondary text-white rounded mb-1'>
                            <h2>{campeonato.nome}</h2>
                        </div>
                        <div className="grid gap-1">
                        {campeonato.jogos.map(jogo => (
                            <div className="py-3 px-4 flex justify-between gap-4 items-center bg-zinc-50 hover:bg-zinc-100 rounded" key={jogo.id}>
                                <div className="flex gap-4 items-center js-game-name">
                                    <div className="text-center">
                                        <p className="text-xs">Hoje</p>
                                        <p className="text-xs">12h30</p>
                                    </div>
                                    <div className="games">
                                        <p className="truncate">{jogo.timeCasa}</p>
                                        <p className="truncate">{jogo.timeVisitante}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 w-full max-w-[172px] md:max-w-[224px]">
                                    <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                        <span className="hidden md:block text-xs">1</span>
                                        <p>{jogo.odds.casa}</p>
                                    </button>
                                    <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                        <span className="hidden md:block text-xs">x</span>
                                        <p>{jogo.odds.empate}</p>
                                    </button>
                                    <button className="bg-zinc-300 hover:bg-zinc-400 w-12 md:w-16 h-12 rounded">
                                        <span className="hidden md:block text-xs">2</span>
                                        <p>{jogo.odds.visitante}</p>
                                    </button>
                                </div>
                                
                                <p className="hidden md:block">
                                    <Link
                                        to={`/game/${jogo.id}`}
                                        className="underline text-sm hover:text-zinc-700 mr-4"
                                    >
                                        Mais sobre o jogo
                                    </Link>
                                </p>
                            </div>
                        ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  );
}

PlaySport.propTypes = {
  data: PropTypes.shape({
    esportes: PropTypes.arrayOf(PropTypes.shape({
      nome: PropTypes.string.isRequired,
      campeonatos: PropTypes.arrayOf(PropTypes.shape({
        nome: PropTypes.string.isRequired,
        jogos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          timeCasa: PropTypes.string.isRequired,
          timeVisitante: PropTypes.string.isRequired,
          horario: PropTypes.string.isRequired,
          odds: PropTypes.shape({
            casa: PropTypes.number,
            empate: PropTypes.number,
            visitante: PropTypes.number
          }),
          resultado: PropTypes.string
        }))
      }))
    }))
  }).isRequired
};