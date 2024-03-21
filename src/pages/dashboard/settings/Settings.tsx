import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const Settings = () => {
  const [showRevenue, setShowRevenue] = useState(true)
  const [showProfit, setShowProfit] = useState(true)
  const [showOrders, setShowOrders] = useState(true)
  const [showCustomers, setShowCustomers] = useState(true)

  const handleShowRevenueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(e.target.checked)
  }
  const handleShowProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowProfit(e.target.checked)
  }
  const handleShowOrdersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOrders(e.target.checked)
  }
  const handleShowCustomersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomers(e.target.checked)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>Settings</h1>
      <Box>
        <Typography variant='h4' gutterBottom>
          Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showRevenue}
                      onChange={handleShowRevenueChange}
                    />
                  }
                  label='Revenue'
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showProfit}
                      onChange={handleShowProfitChange}
                    />
                  }
                  label='Profit'
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showOrders}
                      onChange={handleShowOrdersChange}
                    />
                  }
                  label='Orders'
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showCustomers}
                      onChange={handleShowCustomersChange}
                    />
                  }
                  label='Customers'
                />
              </FormGroup>
            </Grid>
            <Grid xs={12}>
              <Button type='submit' variant='contained' color='primary'>
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
