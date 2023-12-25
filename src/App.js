import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1> My portfolio</h1>
      <Navbar></Navbar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default App;
