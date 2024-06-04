import { Check, Pause, Pencil, Play } from "lucide-react";
import { useSession } from "next-auth/react";
import { FC, useEffect, useRef, useState } from "react";

const Hello: FC<{}> = () => {

        return (
          <>
            <div className="row-start-1 row-end-4 col-span-5 mt-10 mb-10 mr-10 rounded-md w-2/3  hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
              <div className="flex justify-center items-center pt-20 mt-3 mb-20">

                  <h1
                      className="font-bold text-4xl"
                  > 
                      Добро Пожаловать
                  </h1>
                
               </div>
            </div>

          </>
        );

};

export default Hello;
