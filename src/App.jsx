import { useEffect, useState, useContext } from 'react'
import { StarshipContext } from './contexts/starshipContext.jsx'
import './App.css'
import ProductCard from './components/productCard.jsx';
import Grid from './components/grid.jsx';
import Notifier from './components/notifier.jsx';
import StarryNight from './components/starryNight.jsx';

function App() {
  const { fetchStarships, isLoading } = useContext(StarshipContext);
  const [starships, setStarships] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchStarships(pageNumber).then((data) => {
      setStarships(data.results);
    })
  }, [pageNumber]);

  return (
    <div style={{ width: "100%" }}>
      <StarryNight >
        {isLoading &&
          <h1>Loading Starships...</h1>
        }
        <Grid>
          {starships.map((starship) => (
            <ProductCard key={starship.name} product={starship} />
          ))}
        </Grid>
        <Notifier />
      </StarryNight>
    </div>
  )
}

export default App
