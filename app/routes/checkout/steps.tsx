import { Step, Stepper } from "@material-tailwind/react";
import { Outlet, useMatches, type RouteMatch } from "@remix-run/react";

export default function CheckoutStepsPage() {
    const matches: RouteMatch[] = useMatches();
    const activeRoute = matches[matches.length-1].pathname;
    const activeStep = activeRoute.split("/")[matches.length-1].split("-")[1];

    return (
        <>
            <StepperWithContent step={Number(activeStep)} />
        </>
    )
}

interface StepperProps {
    step: number
}

function StepperWithContent({ step }: StepperProps) {
    return (
        <div className="w-full px-24 py-4">
            <Stepper activeLineClassName="!bg-delivereat-secondary"
                activeStep={step-1}
            >
                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary">
                    1
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>

                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary">
                    2
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>

                <Step activeClassName="!bg-delivereat-primary" completedClassName="!bg-delivereat-secondary">
                    3
                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                    </div>
                </Step>
            </Stepper>

            <Outlet />
        </div>
    );
}
