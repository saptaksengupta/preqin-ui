
import InvestorApiServices from "../services/InvestorApiServices";
import { IInvestor } from "../types/Investor";
import { mockInvestors } from "./Investors.mock";

describe("Unit test suit for Api Service", () => {
    let investors: IInvestor[] = [];
    beforeEach(async () => {
        investors = await InvestorApiServices.fetchInvestors();
    })
    
    it("It will fetch investors", () => {
        expect(investors).toEqual(mockInvestors);
    });
});

