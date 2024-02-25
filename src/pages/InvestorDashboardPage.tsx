import React from 'react'
import Header from '../components/Header';
import InvestorTable from '../components/InvestorTable';

const InvestorDashboardPage: React.FC = () => {
  return (
    <div>
      <Header heading='Our Investors' />
      <div>
        <InvestorTable />
      </div>
    </div>
  )
}

export default InvestorDashboardPage;