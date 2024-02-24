import React from 'react'
import InvestorTable from '../components/InvestorTable';

const InvestorDashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Our Investors</h1>
      <div>
        <InvestorTable />
      </div>
    </div>
  )
}

export default InvestorDashboardPage;