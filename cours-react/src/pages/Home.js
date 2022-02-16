import Countries from "../components/Countries";
import Navigation from "../components/Navigation";

const Home = () =>{
  return(
      <div className="home">
        <Navigation />
        <Countries />
      </div>
          
    )
}

export default Home;