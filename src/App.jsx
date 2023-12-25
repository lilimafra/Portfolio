import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Navbar></Navbar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}))

export default App;
