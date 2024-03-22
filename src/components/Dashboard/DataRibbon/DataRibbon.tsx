import { Grid } from '@mui/material'
import React from 'react'
import DataCard from '../DataCard'

import styles from './DataRibbon.module.scss'
import { useToggleContext } from '@/context/ToggleContext'

const DataRibbon = () => {
  const {
    isTotalValueVisible,
    isAvgOrderValueVisible,
    isConversionRateVisible,
    isTransactionsUserTypeVisible,
  } = useToggleContext()
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
      {isTotalValueVisible && (
        <Grid>
          <DataCard
            title={'Total Value'}
            value={'$25,732.53'}
            description={
              'The totals of all DataSoft products in the current financial year'
            }
          />
        </Grid>
      )}
      {isAvgOrderValueVisible && (
        <Grid>
          <DataCard
            title={'Avg. Order Value'}
            value={'$159.30'}
            description={
              'The average order value fo all sales this current financial year'
            }
          />
        </Grid>
      )}
      {isConversionRateVisible && (
        <Grid>
          <DataCard
            title={'Conversion rate'}
            value={'0.61%'}
            description={'How many nitches become sales'}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default DataRibbon
