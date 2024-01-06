import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
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
                <h1>{esporteData.nome}</h1>
            </header>

            {
                esporteData.campeonatos.map(campeonato => (
                    <div key={campeonato.nome}>
                        <div>
                            <h2>{campeonato.nome}</h2>
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