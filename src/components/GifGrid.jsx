import useFetchGifs from "../hooks/useFetchGifs";
import {GifItem} from "../components";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // console.log({images,isLoading})

  return (
    <>
      <h3>{category} </h3>

      {isLoading && <h2>cargando...</h2>}

      <div className="card-grid">
        {images.map((item) => (
        
          // <GifItem key={item.id} img={item.title} title={item.id}url={item.url} />
          <GifItem key={item.id} {...item} rest='hola' />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
