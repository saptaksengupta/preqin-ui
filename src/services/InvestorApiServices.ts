import { IInvestor } from "../types/Investor";
import { IInvestorCommitment } from "../types/InvestorCommitment";
import { CastingFunction } from "../types/Common";

class InvestorApiService {
    private static readonly BASE_URL = 'http://localhost:8000';
    private static readonly API_PREFIX = 'api';

    private static getInvestorsApiUrl = () => {
        const path = 'investors';
        return `${this.BASE_URL}/${this.API_PREFIX}/${path}`;
    }

    private static getInvestorCommitmentApiUrl = (investorId: string, assetClass: string) => {
        const path = 'investor/commitment';
        return `${this.BASE_URL}/${this.API_PREFIX}/${path}/${assetClass}/${investorId}`;
    }

    public static fetchInvestors(): Promise<IInvestor[]> {
        return fetch(InvestorApiService.getInvestorsApiUrl())
            .then(resp => resp.json())
            .then((data) => InvestorApiService.transformArrAndCast<IInvestor>(data, InvestorApiService.getCastedInvestor));
    }

    public static fetchInvestorCommitmentDetails(investorId: number, assetClass: string): Promise<IInvestorCommitment[]> {
        return fetch(InvestorApiService.getInvestorCommitmentApiUrl(investorId.toString(), assetClass))
            .then(resp => resp.json())
            .then(data => InvestorApiService.transformArrAndCast<IInvestorCommitment>(data, InvestorApiService.getCastedInvestorCommitment));
    }

    private static transformArrAndCast<T>(data: Array<any>, castingFn: CastingFunction): Array<T> {
        const resultArr: Array<T> = [];
        if (data && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                resultArr.push(castingFn(data[i]) as T);
            }
        }
        return resultArr;
    }

    private static getCastedInvestor(data: any): IInvestor {
        const investor: IInvestor = {
            firmId: data.firm_id,
            firmName: data.firm_name,
            type: data.firm_type,
            dateAdded: data.date_added,
            address: data.address
        }
        return investor
    }

    private static getCastedInvestorCommitment(data: any): IInvestorCommitment {
        const investorCommitment: IInvestorCommitment = {
            firmId: data.firm_id,
            id: data.id,
            currency: data.currency,
            assetClass: data.asset_class,
            amount: data.amount
        }
        return investorCommitment;
    }
}

export default InvestorApiService;