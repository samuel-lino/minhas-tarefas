import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'
import Store from './store'
import Home from './pages/Home'
import Cadastro from './pages/cadastro'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={Store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={Rotas} />
      </Container>
    </Provider>
  )
}

export default App
