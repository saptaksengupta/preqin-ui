import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InvestorApiService from '../services/InvestorApiServices';
import { IInvestor } from '../types/Investor';
import { formatDate } from "../utils/utility";

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

    const onInvestorClicked = (investor: IInvestor): void => {
        navigate(`investors/${investor.firmId}`, {state: {firmName: investor.firmName}})
    }   

    const getInvestorJsx = (investor: IInvestor) => (
        <div key={investor.firmId} className='investor-card' onClick={() => onInvestorClicked(investor)}>
            <h3>{investor.firmName}</h3>
            <div className='investor-address'>{investor.address}</div>
            <div>Asset Type: <b>{investor.type}</b></div>
            <div className='investor-date'>{formatDate(investor.dateAdded)}</div>
        </div>
    )

    return (
        <div className='investor-table-container'>
            {(investors && investors.length > 0) && investors.map(getInvestorJsx)}
        </div>
    )
}

export default InvestorTable;
