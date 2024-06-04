import { FC, useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { AllListDialog } from "@/API/Dialog/AllListDialog";

interface DialogData {
  id: number;
  name: string;
  last_modified: string;
  created_date: string;
  path: string;
}

export const AllDialog: FC<{}> = () => {
    const { data: session } = useSession();
    const [data, setData] = useState<DialogData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AllListDialog(session?.user.access_token);
                console.log(result);
                setData(result); // Assuming result is an array of DialogData
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [session]);

    return (
        <div className="row-start-1 row-end-4 col-span-5 mt-10 mb-10 mr-10 rounded-md w-2/3 hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
            <div className="flex flex-col justify-center pt-20 mt-3 mb-20">
                <h1 className="font-bold text-4xl text-center">История совещаний</h1>
                <table className=" mt-10 ">
                    <thead>
                        <tr>
                            <th>Имя допроса</th>
                            <th>Дата создания</th>
                            <th>Дата модифик</th>
                        </tr>
                    </thead>
                    <tbody className="text-center bg-gray-300 rounded-md ">
                        {data.map((item, index) => (
                            
                            <tr key={index}>
                                <a href={`/dialog/${item.id}`}>
                                <td>{item.name}</td>
                                </a>
                                <td>{new Date(item.created_date).toLocaleDateString()}</td>
                                <td>{new Date(item.last_modified).toLocaleDateString()}</td>
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={3}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
