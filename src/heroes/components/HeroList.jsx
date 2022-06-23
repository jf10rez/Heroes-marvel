import { useEffect, useMemo, useState } from "react";
import { HeroCard } from "./";
import { createHash } from "../helpers/createHash";
import InfiniteScroll from "react-infinite-scroll-component";

export const HeroList = () => {

  const [heroes, setHeroes] = useState([]);
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const hash = createHash();
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${
        import.meta.env.VITE_TS
      }&apikey=${import.meta.env.VITE_API_KEY}&hash=${hash}&limit=${counter}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { results } = data.data;
        setHeroes(results);
      });
  }, [counter]);

  const handleMoreData = () => setCounter(counter + 20);

  if (heroes.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <InfiniteScroll
      dataLength={heroes.length}
      next={handleMoreData}
      hasMore={heroes.length > 99 ? false : true}
      loader={<h4>Cargando...</h4>}
    >
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
      {
        heroes.length > 99 && <h1>Máximo de heroes permitidos</h1>
      }
    </InfiniteScroll>
  );
};
