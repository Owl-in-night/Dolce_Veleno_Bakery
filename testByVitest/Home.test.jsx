import Globals from './Globals'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/Home'
describe('Home', () => {
  it('renders Home component', () => {
    render(<Home title='Nosotros' />)
    screen.debug()
  })
})
