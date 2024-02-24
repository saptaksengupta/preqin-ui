import { IInvestor } from "../types/Investor";
import { IInvestorCommitment } from "../types/InvestorCommitment";

class InvestorApiService {
    private static readonly BASE_URL = 'http://localhost:8000';
    private static readonly API_PREFIX = 'api';

    private static getInvestorsApiUrl = () => {
        const path = 'investors';
        return `${this.BASE_URL}/${this.API_PREFIX}/${path}`;
    }

    private static getInvestorCommitmentApiUrl = (investorId: string, assetClass: string) => {
        const path = 'investor/commitment/';
        return `${this.BASE_URL}/${this.API_PREFIX}/${path}/${assetClass}/${investorId}`;
    }

    public static fetchInvestors(): Promise<IInvestor[]> {
        return fetch(InvestorApiService.getInvestorsApiUrl())
            .then(resp => resp.json())
            .then(InvestorApiService.transformInvestors);
    }

    public static fetchInvestorDetails(investorId: number, assetClass: string): Promise<IInvestor> {
        return fetch(InvestorApiService.getInvestorCommitmentApiUrl(investorId.toString(), assetClass))
            .then(resp => resp.json())
            .then()
    }

    private static transformInvestors(data: Array<any>) {
        const investors: IInvestor[] = [];
        if (data && data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                investors.push(InvestorApiService.getCastedInvestor(data[i]));
            }
        }
        return investors;
    }

    private static getCastedInvestor(data: any) {
        const investor: IInvestor = {
            firmId: data.firm_id,
            firmName: data.firm_name,
            type: data.firm_type,
            dateAdded: data.date_added,
            address: data.address
        }
        return investor
    }

    private static getCastedInvestorCommitment(data: any) {
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