import { useTranslation } from 'react-i18next'
import { Box, Button } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

export interface ErrorHandlerProps {
  error?: Error | null
  message?: string | null
  reset?: () => void
}

const ErrorHandler = ({ error, message, reset }: ErrorHandlerProps) => {
  const { t } = useTranslation()
  return (
    <Box padding={4}>
      <Alert
        severity="error"
        action={
          reset ? (
            <Button color="inherit" size="small" onClick={reset}>
              {t('error.reset')}
            </Button>
          ) : null
        }
      >
        <AlertTitle>{t('error.title')}</AlertTitle>
        {error?.message || message}
      </Alert>
    </Box>
  )
}

export default ErrorHandler
