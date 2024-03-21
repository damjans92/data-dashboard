import { LinearProgress } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import React from 'react'

const Data = () => {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 15,
  })

  return (
    <>
      <h1>Data</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
        dolorem repudiandae numquam id ex sapiente ut illo, facere expedita qui
        rem blanditiis laudantium, doloribus enim ea?
      </p>
      <div style={{ height: '600px', width: '100%' }}>
        <DataGrid
          slots={{ loadingOverlay: LinearProgress }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  )
}

export default Data
