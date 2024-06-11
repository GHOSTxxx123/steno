import { FC, useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { DialogGet } from "@/API/Dialog/Dialog";

interface DialogProps {
  id: string | string[] | undefined;
}

interface DialogData {
  id: string;
  name: string;
  path: string;
  text: string;
  time_from: number;
  time_to: number;
  dialog_id: string;
}

interface DialogResponse {
  id: string;
  name: string;
  dialog: DialogData[];
  path: string;
}

export const Dialog: FC<DialogProps> = ({ id }) => {
  const { data: session } = useSession();
  const [dialogMsg, setDialogMsg] = useState<string | undefined>();
  const [dialogName, setDialogName] = useState<string>();
  const [dialogData, setDialogData] = useState<DialogData[]>([]);
  const [error, setError] = useState<string>('');

  const handleEditMsg = (msg: string) => setDialogMsg(msg);

  useEffect(() => {
    const fetchData = async () => {
      if (!id || typeof id !== 'string') {
        // setError("Invalid ID");
        return;
      }

      try {
        const result: DialogResponse = await DialogGet(id, session?.user.access_token);
        console.log(result);
        setDialogName(result.name);
        setDialogData(result.dialog);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    if (session) {
      fetchData();
    }
  }, [id, session]);

  useEffect(() => {
    if (dialogData.length > 0) {
      validateInputs(dialogData);
    }
  }, [dialogData]);

  const validateInputs = (data: DialogData[]) => {
    if (data.length < 2 || data[0].path === data[1].path) {
      setError("Please select two different audio devices");
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen mt-10 mb-10 mr-10 rounded-md w-2/3 hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
      <div className="flex justify-center pt-10">
        <h1 className="font-bold text-2xl">Dialog: {dialogName}</h1>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {dialogData.length === 0 ? (
        <div className="flex justify-center mt-10 w-full">
          <p className="text-gray-500">No dialog data available</p>
        </div>
      ) : (
        <>
          <div className="flex justify-center mt-10 w-full">
            <div id="audioControlsUser1" className="audio-header">
              <audio src={dialogData[0].path} controls></audio>
            </div>
          </div>

          <div className="flex flex-col snap-y snap-mandatory max-h-screen justify-between items-center pt-10 mt-3 mb-20 overflow-y-auto">
            {dialogData.map((data, index) => (
              <div key={data.id} className={`flex items-start gap-2.5 mb-5 ${index % 2 === 0 ? 'md:mr-28' : 'md:ml-28'}`}>
                {index % 2 === 0 ? (
                  <>
                    <img className="w-8 h-8 rounded-full" src="https://avatars.mds.yandex.net/i?id=6e024fcf00d04d4d6dde264cd0bdfc4d889ac866-5332439-images-thumbs&ref=rim&n=33&w=300&h=300" alt="User avatar" />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{data.name}</span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{new Date(data.time_from * 1000).toISOString().substr(11, 8)}</span>
                      </div>
                      <div id={`audioControlsUser${index + 1}`} className="mt-2 audio-all">
                        <audio src={data.path} controls></audio>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{data.text}</p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Редактировать</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ees-xl dark:bg-gray-700">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{data.name}</span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{new Date(data.time_from * 1000).toISOString().substr(11, 8)}</span>
                      </div>
                      <div id={`audioControlsUser${index + 1}`} className="mt-2 audio-all">
                        <audio src={data.path} controls></audio>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{data.text}</p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Редактировать</span>
                    </div>
                    <img className="w-8 h-8 rounded-full" src="https://avatars.mds.yandex.net/i?id=a2329e84a9449ce5eee11e22ac2bc91e11576381-8607024-images-thumbs&ref=rim&n=33&w=300&h=300" alt="User avatar" />
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
