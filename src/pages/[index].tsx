import { FC, useEffect, useState } from "react";
import { Airplay, ArrowRightToLine, FileSliders, Film, LifeBuoy, LockKeyhole, RadioTower, Route, Settings, UserSquare, Users } from "lucide-react";
import Chat from "@/comp/chat/chatwin";
import AudioRecorderPlayer from "@/comp/chat/test";
import { useRouter } from "next/router";
import Hello from "@/comp/hello/hello";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Profile from "@/comp/profile/profile";
import { AllDialog } from "@/comp/list-dialog/alldialog";
import { ChatContact } from "@/comp/chat/chatcontact";
import { Dialog } from "@/comp/dialog/dialog";


export default function Home() {

  const {status, data: session} = useSession();

  // console.log(session?.user.access_token);

  const router = useRouter();
  const { index } = router.query;
  
  const [ismenu, setMenu] = useState(false);
  const [ismenul, setMenul] = useState(false);

  const handleOpenMne = () => setMenu(!ismenu);
  
  const handleOpenMnel = () => setMenul(!ismenul);

  // console.log(index);

  useEffect(() => {
    
    if (status === "unauthenticated") Router.replace("/sign/SignIn");

}, [status]);

  const handleWindow = () => {
    
    if (index === "create-chat-con") {
      return <ChatContact />;
    } else if ( index === "create-chat-dial" ) {
      return <Chat />;
    } else if (index === "profile") {
      return <Profile />;
    } else if (index === "list-dialog") {
      return <AllDialog />;
    } // else if (index === "dialog") {
    //   return <Dialog />;
    // } 
     else {
      return  <Hello />;
    }

  };


    if (session?.user.access_token) {
      return (
        <>
          <nav
            className="container bg-purple-600 min-w-full min-h-12 z-50"
          >
            <div 
              className="flex items-center justify-between p-4"
              >
              <div
                className="font-bold text-2xl"
              >
                  <a>
                    <span 
                      className="font-semibold text-3xl text-white"
                    >
                      Stenog
                    </span>
                  </a>
              </div>
              <div
                className=""
              >
                  <a 
                    href="/sign/SignIn"
                    className="flex  font-medium text-lg text-white"
                  >
                    <span
                      className=""
                    >
                      Log in  

                    </span>
                    <ArrowRightToLine className="mt-1 ml-2" />
                  </a>
              </div>
            </div>
          </nav>
      
        <div className="md:grid md:grid-rows-3 md:grid-cols-8 md:gap-4 h-full">
          <div className="md:row-span-3 md:col-span-3  md:row-start-2 w-1/2 bg-white  ml-5 shadow-2xl rounded-md mb-40 transition-transform -translate-x-full md:translate-x-0 ">
      
      
            <ul className="space-y-2 pl-2 pr-1 mt-3 mb-3 ">
              <li>
                <a
                  href="/profile"
                  className={`flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white  ${index === "profile" ? 'bg-gray-100' : 'hover:bg-gray-100'} dark:hover:bg-gray-700 group`}
                >

                  <UserSquare className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Профиль</span>
                </a>
              </li>
              <li>
                <a href="/create-chat-con">
                <button
                  type="button"
                  className={`flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group ${index === "create-chat-con" || index === "create-chat-dial" ? 'bg-gray-100' : 'hover:bg-gray-100'} dark:text-white dark:hover:bg-gray-700`}
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <RadioTower className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap"
                    >
                      Создать совещание
                    </span>

                </button>
                </a>
              </li>
              <li>
                <a href="/list-dialog">
                    <button
                      type="button"
                      className={`flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group ${index === "list-dialog" ? 'bg-gray-100' : 'hover:bg-gray-100'} dark:text-white dark:hover:bg-gray-700`}
                      aria-controls="dropdown-sales"
                      data-collapse-toggle="dropdown-sales"
                    >
                    
                      <Film className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="flex-1 ml-3 text-left whitespace-nowrap"
                        >
                          История совещаний
                        </span>
                    </button>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FileSliders className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Инструкция
                    </span>

                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-authentication"
                  data-collapse-toggle="dropdown-authentication"
                >

                  <LockKeyhole className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap"
                    >
                      Права доступа
                  </span>

                </button>
              </li>

            <ul
              className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
            >
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >

                  <Settings className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Настройки</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >

                  <Users className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Учасники</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >

                  <LifeBuoy className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">Помощь</span>
                </a>
              </li>
            </ul>
          </ul>
      
          </div>

              {handleWindow()}
          </div>
        </>
      );
    }
}   
