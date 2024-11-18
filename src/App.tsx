import './App.css';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React Tsx</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <p className='bg-red-700'>Hola mundo! TWS</p>
      <Typography>Componente importado</Typography>
      <Button>Click me!</Button>
    </div>
  );
};

export default App;
