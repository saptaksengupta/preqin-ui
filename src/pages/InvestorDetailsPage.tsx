import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import InvestorCommitmentInfo from '../components/InvestorCommitmentInfo';
import InvestorApiService from '../services/InvestorApiServices';
import { IInvestorCommitment } from '../types/InvestorCommitment';


const InvestorDetailsPage: React.FC = () => {
  const { investorId } = useParams();
  const ASSET_CLASSES = {
    'PE': 'PE',
    'PD': 'PD',
    'RE': 'RE',
    'INF': 'INF',
    'NR': 'NR',
    'HF': 'HF',
  };


  const [assetClass, setAssetClass] = useState(ASSET_CLASSES.PD);
  const [investorCommitment, setInvestorCommitment] = useState<IInvestorCommitment>();


  const onAssetChange = (e: any) => {
    const value = e.target.value;
    if (value && investorId) {
      setAssetClass(value);
    }
  }

  useEffect(() => {
    InvestorApiService.fetchInvestorCommitmentDetails(Number(investorId), assetClass)
      .then((resp: IInvestorCommitment) => {
        setInvestorCommitment(resp);
      })
  }, [investorId, assetClass]);

  return (
    <div>
      <h1>Investor Commintments </h1>
      <div>
        <label>Select AssetClass: </label>
        <select onChange={onAssetChange}>
          <option value={ASSET_CLASSES.PE}>Private Equity</option>
          <option value={ASSET_CLASSES.PD}>Private Debt</option>
          <option value={ASSET_CLASSES.RE}>Real Estate</option>
          <option value={ASSET_CLASSES.INF}>Infrastructure</option>
          <option value={ASSET_CLASSES.NR}>Natural Resources</option>
          <option value={ASSET_CLASSES.HF}>Hedge Fund</option>
        </select>
      </div>
      <div className='commitment-container'>
        {investorCommitment && (<InvestorCommitmentInfo commitmentDetails={investorCommitment} />)}
      </div>
    </div>
  )
}

export default InvestorDetailsPage;
