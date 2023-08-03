import SubscriptionCard from "@/Components/SubscriptionCard"
import Authenticated from "@/Layouts/Authenticated/index"
import { Head } from "@inertiajs/react";

export default function SubscriptionPlan () {
    return (
        <Authenticated>
            <Head title="Payment" />
            <div className="py-10 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        name="Basic"
                        price="2999000"
                        durationInMounth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                    <SubscriptionCard isPremium />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}