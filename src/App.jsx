import Text from "./components/Text";
import { Card } from './components/Card/Card';
import { Usuario } from './components/Usuario/Usuario';

function App() {
  return (
    <div>
      <Usuario nombre="Alvaro" edad="20" nacionalidad="Argentina"/>
      <Card/>
      <Text/>
    </div>
  );
}

export default App;
