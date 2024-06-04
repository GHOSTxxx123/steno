import { Dialog } from "@/comp/dialog/dialog";
import { FC } from "react";
import { useRouter } from "next/router";


const Dialogs: FC<{}> = () => {


    const router = useRouter();
    const { dialog } = router.query;

    return (
        <>
            <div className="flex justify-center items-center ">
                <Dialog id={dialog}/>
            </div>
        </>
    );
}

export default Dialogs