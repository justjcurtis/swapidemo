import { useEffect, useState, useContext } from 'react'
import { StarshipContext } from './contexts/starshipContext.jsx'
import './App.css'
import ProductCard from './components/productCard.jsx';
import Grid from './components/grid.jsx';
import Notifier from './components/notifier.jsx';
import StarryNight from './components/starryNight.jsx';
import NavBar from './components/navbar.jsx';
import Paginator from './components/paginator.jsx';

const styles = {
  wrapper: {
    width: "100%",
    marginTop: "3rem",
  }
}

function App() {
  const { fetchStarships, isLoading, totalPages } = useContext(StarshipContext);
  const [starships, setStarships] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchStarships(pageNumber).then((data) => {
      setStarships(data.results);
    })
  }, [pageNumber]);

  return (
    <div style={styles.wrapper}>
      <StarryNight >
        {isLoading &&
          <h1>Loading Starships...</h1>
        }
        {!isLoading &&
          <>
            <Grid>
              {starships.map((starship) => (
                <ProductCard key={starship.name} product={starship} />
              ))}
              <NavBar />
            </Grid>
            <Paginator currentPage={pageNumber} totalPages={totalPages} onPageChange={(newPage) => setPageNumber(newPage)} />
            <Notifier />
          </>
        }
      </StarryNight>
    </div>
  )
}

export default App
