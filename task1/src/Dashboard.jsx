import React from 'react'
import UserProfile from './components/UserProfile' 

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile username="Alice" age={28} isAdmin={true} />
      <UserProfile username="May" age={35} isAdmin={false} />
      {/* using destructuring with default value for isAdmin */}
      <UserProfile username="Ronnie" age={22} />
    </div>
  )
}

export default Dashboard

