import { Link } from 'react-router-dom';

export const HeroCard = ({ 
    id,
    name,
    comics,
    thumbnail
}) => {

    const { path, extension } = thumbnail
    return (
        <div className="col-md-4 col-xs-12 animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ `${ path }.${extension}` } className="card-img" alt={ name } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ name }</h5>

                            <p className="card-text">
                                <small className="text-muted"> Numero de comics: { comics.available }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Más..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
