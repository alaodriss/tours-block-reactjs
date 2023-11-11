import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [IsLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id)
      setTours(newTours)
  }


  const fetchTours = async () => {
        setIsLoading(true)
        try{
          const reponse = await fetch(url);
          const tours = await reponse.json(); 
          setTours(tours)
        }catch (error){
          console.log(error)
        }
        setIsLoading(false)
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(IsLoading) {
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button style={{marginTop:"2rem"}} className="btn" type="button" onClick={() => fetchTours() }>Refetchgit </button>
      </div>
    </main>
  }


  return <main>

    <Tours tours={tours} removeTour={removeTour}/>


  </main>;
};
export default App;
