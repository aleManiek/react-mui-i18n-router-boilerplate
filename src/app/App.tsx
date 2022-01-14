import { Suspense } from 'react'
import { StylesProvider, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import { theme } from 'config'
import { Layout, Loader } from 'components/common'

function App() {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
