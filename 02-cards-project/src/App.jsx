import React from 'react'
import Card from './components/Card'
import { companies } from './data'

function App() {
  return (
    <div className='parent'>
      {companies.map((company)=>(
        <Card key={company.id} name={company.name} logo={company.logo} 
        posted={company.posted} position={company.position} type={company.type}
        level={company.level} salary={company.salary} location={company.location}
        />
      ))}
      
    </div>
  )
}

export default App