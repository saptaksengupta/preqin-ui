import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InvestorApiService from '../services/InvestorApiServices';
import { IInvestor } from '../types/Investor';
import "./investor.style.css";

const InvestorTable = () => {

    const [investors, setInvestors] = useState<Array<IInvestor>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        InvestorApiService.fetchInvestors()
            .then((data: Array<IInvestor>) => {
                if (data) {
                    setInvestors(data);
                }
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const onInvestorClicked = (investorId: string): void => {
        navigate(`investors/${investorId}`)
    }   

    const getInvestorJsx = (investor: IInvestor) => (
        <div key={investor.firmId} className='investor-card' onClick={() => onInvestorClicked(investor.firmId.toString())}>
            <h3>{investor.firmName}</h3>
            <div className='investor-address'>{investor.address}</div>
            <div>Asset Type: <b>{investor.type}</b></div>
        </div>
    )

    return (
        <div className='investor-table-container'>
            {(investors && investors.length > 0) && investors.map(getInvestorJsx)}
        </div>
    )
}

export default InvestorTable;
