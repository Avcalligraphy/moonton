import Authenticated from "@/Layouts/Authenticated/Index";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Link, Head, useForm } from "@inertiajs/react";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Create ({auth}) {
    const {  setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
        // console.log(data)
    };
    return (
        <Authenticated user={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a New Movie</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <Label forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                />
                <InputError message={errors.name} className="mt-2" />
                <Label forInput="category" value="Category" className="mt-4" />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    onChange={(e) => setData("category", e.target.value)}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                />
                <InputError message={errors.category} className="mt-2" />
                <Label
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    onChange={(e) => setData("video_url", e.target.value)}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />
                <Label
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={(e) =>
                        setData(
                            "thumbnail",
                            e.target.type === "file"
                                ? e.target.files[0]
                                : e.target.value
                        )
                    }
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <Label forInput="rating" value="Rating" className="mt-4" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    onChange={(e) => setData("rating", e.target.value)}
                    placeholder="Enter the Rating of the movie"
                    isError={errors.rating}
                />
                <div className="flex mt-4 items-center">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="mt-4"
                    processing={processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}