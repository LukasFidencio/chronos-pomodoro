import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading>Teste de children</Heading>
      <p>Loren ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </>
  );
}
