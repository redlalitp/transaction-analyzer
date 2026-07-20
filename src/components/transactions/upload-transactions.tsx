"use client";


import {
    useState
} from "react";


import {
    Button
} from "@/components/ui/button";


import {
    Upload
} from "lucide-react";


import {
    toast
} from "sonner";


import {
    useUploadTransactions
} from "@/hooks/use-transactions";



export function UploadTransactions() {


    const [
        file,
        setFile
    ]
        =
        useState<File | null>(null);



    const uploadMutation =
        useUploadTransactions();



    function handleUpload() {


        if (!file) {

            toast.error(
                "Please select a file"
            );

            return;

        }



        uploadMutation.mutate(
            file,
            {

                onSuccess: () => {


                    toast.success(
                        "Transactions imported successfully"
                    );


                    setFile(null);


                },


                onError: () => {


                    toast.error(
                        "Failed to upload statement"
                    );


                }

            }
        );


    }



    return (

        <div
            className="
flex
items-center
gap-3
"
        >


            <input

                type="file"

                accept="
.csv,
.pdf
"

                onChange={
                    (e) => {

                        const selected =
                            e.target.files?.[0];


                        if (selected) {

                            setFile(selected);

                        }

                    }

                }

                className="
text-sm
"

            />



            <Button

                onClick={handleUpload}

                disabled={
                    uploadMutation.isPending
                }

            >


                <Upload
                    className="mr-2 h-4 w-4"
                />


                {
                    uploadMutation.isPending
                        ?
                        "Uploading..."
                        :
                        "Upload Statement"
                }


            </Button>


        </div>

    );


}