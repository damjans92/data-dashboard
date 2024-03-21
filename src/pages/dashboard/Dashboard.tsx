import React from 'react'
import { Box, Grid } from '@mui/material'
import DataRibbon from '@/components/Dashboard/DataRibbon'
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay'
import TransactionsBottomRow from '@/components/Dashboard/TransactionsBottomRow'

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionsBottomRow />
    </Box>
  )
}

export default Dashboard
