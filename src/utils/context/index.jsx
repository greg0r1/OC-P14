import React, { useState } from 'react'
import data from '../../mocks'

export const EmployeesContext = React.createContext()

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data.employees)
  const saveEmployee = (newEmployee) => {
    setEmployees(employees.concat(newEmployee))
  }

  return (
    <EmployeesContext.Provider value={{ employees, saveEmployee }}>
      {children}
    </EmployeesContext.Provider>
  )
}
