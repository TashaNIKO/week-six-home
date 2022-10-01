import { useState }  from "react";
import Dogs from "./Dogs";
import { data } from "./data";

function App() {
  const [dogs, setDogs] = useState(data);

  return (<div>
    <Dogs anyWord={dogs}/> 
    </div>
  )
}

export default App;
