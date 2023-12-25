import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <h1> My portfolio</h1>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default App;
