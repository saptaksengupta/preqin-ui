import React from 'react'
import { IInvestorCommitment } from '../types/InvestorCommitment';
import InvestorCommitmentCard from './InvestorCommitmentCard';
import "./investor.style.css";

interface InvestorCommitmentInfoProps {
    commitmentDetails: IInvestorCommitment[]
}

const InvestorCommitmentInfo: React.FC<InvestorCommitmentInfoProps> = (props: InvestorCommitmentInfoProps) => {
    const commitmentDetails = props.commitmentDetails;
    return (
        <div className='commitment-container'>
            {
                (commitmentDetails && commitmentDetails.length > 0)
                && commitmentDetails.map(item => <InvestorCommitmentCard key={item.id} {...item} />)
            }
        </div>
    )
}

export default InvestorCommitmentInfo;