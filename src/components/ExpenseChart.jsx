import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory'

function ExpenseChart() {
  return (

    <VictoryPie data={[

      { x: "Rent", y: 1000 },
      { x: "Food", y: 200 },
      { x: "Transportation", y: 300 },
      { x: "Entertainment", y: 150 },
      { x: "Health", y: 200 },

    ]}
    />
  )
}

export default ExpenseChart