import React from 'react'
import { IInvestorCommitment } from '../types/InvestorCommitment';

interface InvestorCommitmentInfoProps {
    commitmentDetails: IInvestorCommitment
}

const InvestorCommitmentInfo: React.FC<InvestorCommitmentInfoProps> = (props: InvestorCommitmentInfoProps) => {
    const commitmentDetails = props.commitmentDetails;
    return (
        <div>
            <div>{commitmentDetails.id}</div>
            <div>{commitmentDetails.firmId}</div>
            <div>{commitmentDetails.amount}</div>
        </div>
    )
}

export default InvestorCommitmentInfo;