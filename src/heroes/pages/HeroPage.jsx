import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ComicInfo } from "../components/ComicInfo";
import { createHash } from "../helpers/createHash";
import InfiniteScroll from "react-infinite-scroll-component";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  const hash = createHash();

  const [heroM, setHeroM] = useState({});
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error404, setError404] = useState(false);
  const [maxComics, setMaxComics] = useState(null)

  useEffect(() => {

    fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=${
        import.meta.env.VITE_TS
      }&apikey=${import.meta.env.VITE_API_KEY}&hash=${hash}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data.results[0] || data.code === 200) {
          setIsLoading(false);
          setHeroM(data.data.results[0]);
        } else {
          setIsLoading(false);
          setError404(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError404(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${
        import.meta.env.VITE_TS
      }&apikey=${
        import.meta.env.VITE_API_KEY
      }&hash=${hash}&limit=${counter}`
    )
  .then((response) => response.json())
  .then((data) => {
    setComics( data.data.results )
    setMaxComics( data.data.count )
  })
  }, [counter])

  const handleNextComic = () => setCounter( counter + 5 )
  

  const { thumbnail, name, description } = heroM;

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error404) {
    return <h1>Not found...</h1>;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{name}</h3>
        {description ? (
          <>
            <h5 className="mt-3"> Descripción </h5>
            <p>{description}</p>
          </>
        ) : (
          <h5>No tiene descripción...</h5>
        )}

        <InfiniteScroll
          dataLength={comics.length}
          next={handleNextComic}
          hasMore={ true }
        >
          <ul className="list-group list-group-flush">
            {comics.map((comic) => (
              <ComicInfo
                key={comic.id}
                name={comic.title}
                resourceURI={comic.description}
              />
            ))}
          </ul>
        </InfiniteScroll>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
