import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utilities/routes';

function App() {
  return (
    <section className='app'>
      <RouterProvider router={router}></RouterProvider>
    </section>

  )
}

export default App;
