//@ts-check

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Table } from 'table-oc-graphigreg'
import { EmployeesContext } from '../../utils/context'
import data from '../../mocks'

/**
 *
 * @returns {React.ReactElement}
 */
function EmployeesList() {
  const labels = data.labels
  const { employees } = React.useContext(EmployeesContext)

  return (
    <div id="employees" className="container">
      <h1>Current Employees</h1>
      <Table data={employees} labels={labels} pagination={10} />
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
    </div>
  )
}

export default EmployeesList
