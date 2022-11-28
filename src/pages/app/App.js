import './App.css'
import {IMAGES} from '../../images/images'
import {Grid, Typography} from '@mui/material'

function App() {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      flex={'max-content'}
      spacing={2}
    >
      <Grid item>
        <img src={IMAGES.logo} className='App-logo' alt='logo' />
      </Grid>
      <Grid item>
        <Typography textAlign={'center'}>
          Modifier <code>src/pages/App.js</code> et sauvegarder pour actualiser
          la page.
        </Typography>
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
