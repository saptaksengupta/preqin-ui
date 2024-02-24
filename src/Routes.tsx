import React, { lazy } from "react";
import { Suspense } from "react";
import { RouteObject } from "react-router-dom";

const Loadable = (Component: React.FC) => (props: JSX.IntrinsicAttributes) => (
    <Suspense fallback={"...loading"}> 
        <Component {...props} />
    </Suspense>
)

const InvestorDashboardPage = Loadable(lazy(() => import('./pages/InvestorDashboardPage')));
const InvestorDetailsPage = Loadable(lazy(() => import('./pages/InvestorDetailsPage')));

const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <InvestorDashboardPage />
        )
    },
    {
        path: 'investors/:investorId',
        element: (
            <InvestorDetailsPage />
        )
    }
]

export default routes;