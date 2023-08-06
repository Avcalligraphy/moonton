import FlashMessage from "@/Components/FlashMessages";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";

export default function Index ({auth, flashMessage}){
    return (
        <Authenticated user={auth.user}>
            <Head title="Admin" />
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton type="button" className="w-40 mb-8">
                    Insert New Movie
                </PrimaryButton>
            </Link>
            {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
        </Authenticated>
    );
} 