import { Grid } from '@mui/material'
import React from 'react'
import DataChart from '@/components/DataChart'
import Paper from '@mui/material/Paper'
import styles from './TransactionsBottomRow.module.scss'
import { doughnutChartData } from '../mockData'

const TransactionsBottomRow = () => {
  return (
    <Grid container className={styles.bottomRow}>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default TransactionsBottomRow
