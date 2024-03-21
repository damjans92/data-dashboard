import React from 'react'
import { IconButton, Paper, Tooltip, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import styles from './DataCard.module.scss'

export type DataCardProps = {
  title: string
  value: string
  description: string
}

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props

  return (
    <Paper className={styles.dataCard}>
      <div className={styles.header}>
        <Typography variant={'h6'} color={'lightslategray'}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {`${description} which is ${value} `}
            </Typography>
          }
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant={'h4'}>{value}</Typography>
    </Paper>
  )
}

export default DataCard
