import { FC, useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { DialogGet } from "@/API/Dialog/Dialog";

export const Dialog: FC<{
  id: string | string[] | undefined;
}> = (id) => {

    const { data: session } = useSession();

    const [diallogmsg, setDialogMsg] = useState<string | undefined>();

    const handleEditMsg = (msg: string) => setDialogMsg(msg);

    console.log(id.id);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await DialogGet(id.id, session?.user.access_token);
              console.log(result);
              // setData(result); // Assuming result is an array of DialogData
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };
      fetchData();
  }, [session]);

    return (
        <>
            <div className="min-h-screen mt-10 mb-10 mr-10 rounded-md w-2/3 hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
              
              <div className="flex justify-center pt-10">
                <h1 className="font-bold text-2xl">Dialog</h1>
              </div>

                <div className="flex justify-center mt-10 w-full">
                    <div id="audioControlsUser1" className="audio-header">
                        <audio controls></audio>
                    </div>
                </div>

              <div className="flex flex-col snap-y snap-mandatory max-h-screen justify-between items-center pt-10 mt-3 mb-20">
                <div className="flex items-start gap-2.5 mb-5 md:mr-28">
                   <img className="w-8 h-8 rounded-full" src="https://avatars.mds.yandex.net/i?id=6e024fcf00d04d4d6dde264cd0bdfc4d889ac866-5332439-images-thumbs&ref=rim&n=33&w=300&h=300" alt="User avatar" />
                   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                         <span className="text-sm font-semibold text-gray-900 dark:text-white">Jese Green</span>
                         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                      </div>
                        <div id="audioControlsUser1" className="mt-2 audio-all">
                            <audio controls></audio>
                        </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Редактировать</span>
                   </div>
                </div>
                
                <div className="flex items-start gap-2.5 mb-5 md:ml-28">
                   <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ees-xl dark:bg-gray-700">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                         <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                         <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                      </div>
                      <div id="audioControlsUser2" className="mt-2 audio-all">
                            <audio controls></audio>
                        </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Редактировать</span>
                   </div>
                   <img className="w-8 h-8 rounded-full" src="https://avatars.mds.yandex.net/i?id=a2329e84a9449ce5eee11e22ac2bc91e11576381-8607024-images-thumbs&ref=rim&n=33&w=300&h=300" alt="User avatar" />
                </div>
              </div>
            </div>
        </>
    );
};
