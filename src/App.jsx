import { Card } from './components/Card/Card';
import Counter from './components/Counter';
import { Usuario } from './components/Usuario/Usuario';

function App() {
  return (
    <div>
      <Usuario nombre="Alvaro" edad="20" nacionalidad="Argentina"/>
      <Card/>
      <Counter/>
    </div>
  );
}

export default App;
