import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import InvestorCommitmentInfo from '../components/InvestorCommitmentInfo';
import InvestorApiService from '../services/InvestorApiServices';
import { IInvestorCommitment } from '../types/InvestorCommitment';
import { ASSET_CLASS_MAP } from '../utils/Constants';
import Header from '../components/Header';
import "./Pages.style.css"


const InvestorDetailsPage: React.FC = () => {
  const { investorId } = useParams();
  const [assetClass, setAssetClass] = useState(ASSET_CLASS_MAP['pe']['type']);
  const [investorCommitment, setInvestorCommitment] = useState<IInvestorCommitment[]>();
  const location = useLocation();
  const {state} = location;

  const onAssetChange = (e: any) => {
    const value = e.target.value;
    if (value && investorId) {
      setAssetClass(value);
    }
  }

  useEffect(() => {
    InvestorApiService.fetchInvestorCommitmentDetails(Number(investorId), assetClass)
      .then((resp: IInvestorCommitment[]) => {
        setInvestorCommitment(resp);
      })
  }, [investorId, assetClass]);

  return (
    <div>
      <Header heading={state.firmName + "'s Commitments"} />
      <div className='commitment-type-selctor'>
        <select onChange={onAssetChange} value={assetClass}>
          <option value={ASSET_CLASS_MAP['pe']['type']}>{ASSET_CLASS_MAP['pe']['label']}</option>
          <option value={ASSET_CLASS_MAP['pd']['type']}>{ASSET_CLASS_MAP['pd']['label']}</option>
          <option value={ASSET_CLASS_MAP['re']['type']}>{ASSET_CLASS_MAP['re']['label']}</option>
          <option value={ASSET_CLASS_MAP['inf']['type']}>{ASSET_CLASS_MAP['inf']['label']}</option>
          <option value={ASSET_CLASS_MAP['nr']['type']}>{ASSET_CLASS_MAP['nr']['label']}</option>
          <option value={ASSET_CLASS_MAP['hf']['type']}>{ASSET_CLASS_MAP['hf']['label']}</option>
        </select>
      </div>
      <div className='commitment-container'>
        {investorCommitment && (<InvestorCommitmentInfo commitmentDetails={investorCommitment} />)}
      </div>
    </div>
  )
}

export default InvestorDetailsPage;
