import getSymbolFromCurrency from 'currency-symbol-map';
import React from 'react'
import { IInvestorCommitment } from '../types/InvestorCommitment';
import { ASSET_CLASS_MAP } from '../utils/Constants';
import "./investor.style.css";

const InvestorCommitmentCard = (props: IInvestorCommitment) => {
    const { currency, amount, assetClass, firmId, id } = props;
    return (
        <div className='commitment-info-card'>
            <div className='asset-class'>{ASSET_CLASS_MAP[assetClass]['label']}</div>
            <div className='commitment-amount-cont'>
                <div className='amount'>
                    {amount}<span className='currency-symbol'>{ getSymbolFromCurrency(currency)}</span>
                </div>
            </div>
        </div>
    )
}

export default InvestorCommitmentCard;
