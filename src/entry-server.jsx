import { renderToString } from 'react-dom/server'
import Home from './pages/Home'

export async function render() {
  return renderToString(<Home />)
}
