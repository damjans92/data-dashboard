import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import DataCard from '../DataCard'
import InfoIcon from '@mui/icons-material/Info'

import styles from './DataRibbon.module.scss'

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={styles.dataRibbon}>
      <Grid>
        <DataCard
          title={'Total Sales'}
          value={'462'}
          description={
            'The totals of all DataSoft products in the current financial year'
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Total Value'}
          value={'$25,732.53'}
          description={
            'The totals of all DataSoft products in the current financial year'
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Avg. Order Value'}
          value={'$159.30'}
          description={
            'The average order value fo all sales this current financial year'
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={'Conversion rate'}
          value={'0.61%'}
          description={'How many nitches become sales'}
        />
      </Grid>
    </Grid>
  )
}

export default DataRibbon
