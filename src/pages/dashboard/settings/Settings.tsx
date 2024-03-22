import React, { useState } from 'react'
import { useToggleContext } from '@/context/ToggleContext' // Assuming context folder is at 'context'
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@mui/material'

const Settings = () => {
  const {
    isTotalValueVisible,
    toggleTotalValue,
    isAvgOrderValueVisible,
    toggleAvgOrderValue,
    isConversionRateVisible,
    toggleConversionRate,
    isTransactionsUserTypeVisible,
    toggleTransactionsUserType,
  } = useToggleContext()

  const [localIsTotalValueVisible, setLocalIsTotalValueVisible] =
    useState(isTotalValueVisible)
  const [localIsAvgOrderValueVisible, setLocalIsAvgOrderValueVisible] =
    useState(isAvgOrderValueVisible)
  const [localIsConversionRateVisible, setLocalIsConversionRateVisible] =
    useState(isConversionRateVisible)
  const [
    localIsTransactionsUserTypeVisible,
    setLocalIsTransactionsUserTypeVisible,
  ] = useState(isTransactionsUserTypeVisible)

  const [settingsChanged, setSettingsChanged] = useState(false)

  const handleToggleChange = (feature: string, value: boolean) => {
    setSettingsChanged(true)
    switch (feature) {
      case 'isTotalValueVisible':
        setLocalIsTotalValueVisible(value)
        break
      case 'isAvgOrderValueVisible':
        setLocalIsAvgOrderValueVisible(value)
        break
      case 'isConversionRateVisible':
        setLocalIsConversionRateVisible(value)
        break
      case 'isTransactionsUserTypeVisible':
        setLocalIsTransactionsUserTypeVisible(value)
        break
      default:
        break
    }
  }

  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    toggleTotalValue(localIsTotalValueVisible)
    toggleAvgOrderValue(localIsAvgOrderValueVisible)
    toggleConversionRate(localIsConversionRateVisible)
    toggleTransactionsUserType(localIsTransactionsUserTypeVisible)

    setSettingsChanged(false)
  }

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant='h4' gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSaveSettings}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={localIsTotalValueVisible} />} // Use local state
                  label='Total Value'
                  onChange={() =>
                    handleToggleChange(
                      'isTotalValueVisible',
                      !localIsTotalValueVisible
                    )
                  }
                />
                <FormControlLabel
                  control={<Switch checked={localIsAvgOrderValueVisible} />} // Use local state
                  label='Avg. Order Value'
                  onChange={() =>
                    handleToggleChange(
                      'isAvgOrderValueVisible',
                      !localIsAvgOrderValueVisible
                    )
                  }
                />
                <FormControlLabel
                  control={<Switch checked={localIsConversionRateVisible} />} // Use local state
                  label='Conversion Rate'
                  onChange={() =>
                    handleToggleChange(
                      'isConversionRateVisible',
                      !localIsConversionRateVisible
                    )
                  }
                />
                <FormControlLabel
                  control={
                    <Switch checked={localIsTransactionsUserTypeVisible} />
                  } // Use local state
                  label='Transactions Per User Type'
                  onChange={() =>
                    handleToggleChange(
                      'isTransactionsUserTypeVisible',
                      !localIsTransactionsUserTypeVisible
                    )
                  }
                />
              </FormGroup>
            </Grid>
            {/* Conditionally disable Save button if no changes are made */}
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={!settingsChanged}
              >
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  )
}

export default Settings
