import './App.css'
import {IMAGES} from '../../images/images'
import {Grid} from '@mui/material'

function App() {
  return (
    <Grid
      container
      justifyContent={'center'}
      flex={'max-content'}
      align={'center'}
    >
      <Grid item>
        <img src={IMAGES.logo} className='App-logo' alt='logo' />
      </Grid>
      <Grid item>
        <p>
          Modifier <code>src/pages/App.js</code> et sauvegarder pour actualiser
          la page.
        </p>
      </Grid>
      <Grid item>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </Grid>
    </Grid>
  )
}

export default App
