import { IInvestor } from "./Investor";
import { IInvestorCommitment } from "./InvestorCommitment";

export type CastingFunction = (data: any) => IInvestor | IInvestorCommitment;