import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import './index.css';



function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <section> 
        <Navbar></Navbar>
      </section>
      <section>Parallax</section>
      <section>Services</section> 
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default App;
