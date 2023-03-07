import './App.css';
import Desc from './Desctop'
import Mob from './Mobile'
import useScreenType from "react-screentype-hook";

function App() {

const screenType = useScreenType();
  return (
<>
{screenType.isMobile ?  <Mob/> : <Desc/>}
</>
  );
}

export default App;
