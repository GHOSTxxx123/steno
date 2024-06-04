import { FC, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { LogIn, ArrowLeft, Play, ArrowRight, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import Router from "next/router";
import { signIn } from 'next-auth/react';
import { urlinback } from "@/API/urlinback";
import { Login } from "@/API/login/login";



const inter = Inter({ subsets: ["latin"] });

 
const SignIn: FC<{}> = () => {
    
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState("")

    const [isHidden, setIsHidden] = useState<boolean>(true);


    const handleSignUp = () => { Router.replace("/sign/SignUp"); };

    const handleGoBack = () => {
        Router.back();
      };

      const HandlerSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if (!username) setError("Введите username");
        else if (!password) setError("Введите password");
        else {
            const log = await signIn('credentials', {
                username: username,
                password: password,
                redirect: false
            });
          
          
            if (!log?.ok) {
                setError(log?.error ?? "Произошла ошибка при входе в систему !!!");
            } else {
                Router.back();
            }
        } 
    }
    
    
    return (
        <>
            <div className="flex  justify-center pt-32 inset-0">
                
                <form onSubmit={HandlerSubmit}>
                  
                    <div className="flex flex-col justify-center items-center  w-96  bg-white rounded-md hover:shadow-2xl hover:shadow-purple-300 duration-300 ">
                        <div className="mt-3">
                            <button
                              type="button"
                              onClick={handleGoBack}
                              className={`flex items-center hover:shadow-xl rounded-md bg-white hover:shadow-purple-300 hover:bg-purple-500  h-10 pl-3 pr-3 space-x-2 duration-500`}>
                                  <ArrowLeft
                                    // className="rotate-180 hover:rotate-0"
                                  />
                                  
                            </button>
                        </div>
                        <div className="mt-3 mb-3 ">
                            <h1 className="font-medium text-2xl">
                                Sign IN
                            </h1>
                        </div>

                        { error && (		
					                <div className='bg-red-500 flex justify-center items-center  text-white  text-md py-1 px-3 rounded-md mt-5 mb-5'>
					                	<p className='' > {error} </p>	
					                </div>	

					              ) }

                        <div className="mt-3 ml-5 mr-5 mb-3">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700 mb-2">
                              Username
                            </span>
                            <input
                              value={username}
                              onChange={(e) => setUserName(e.target.value)}
                              placeholder=""
                              className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                            />
                          </label>
                        </div>

                        

                        <div className="mt-3 ml-5 mr-5 mb-3">
                            <div className='relative'>
			                      	<label className="block">
                                  <span className="block text-sm font-medium text-slate-700 mb-2">
                                    Password
                                  </span>
                                  <input
			                      	    	value={password}
			                      	    	onChange={(e) => setPassword(e.target.value)}
			                      	    	type={isHidden ? 'password' : 'text'}
			                      	    	className='border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300'
			                      	    	placeholder=' '
			                      	    />

			                      	    <div
			                      	    	tabIndex={0}
			                      	    	onClick={() => setIsHidden(!isHidden)}
			                      	    	onKeyDown={e => {
			                      	    		console.log(e);
			                      	    		e.code == 'Space' && setIsHidden(!isHidden);
			                      	    	}}
			                      	    	className='cursor-pointer absolute top-2/4 right-6 grid h-5 w-5  place-items-center text-gray-500'>
			                      	    	{isHidden ? <Eye size={20} /> : <EyeOff size={20} />}
			                      	    </div>
                              
			                      	</label>
			                      </div>
                        </div>
                        <div className="mt-10">
                        <div className="mb-5 mt-3 flex flex-col justify-center items-center">
                            <button
                              type="submit"
                              // onClick={recording ? handleStopRecording : handleStartRecording}
                              className={`flex items-center hover:shadow-xl rounded-md bg-white hover:shadow-purple-300 hover:bg-purple-500  h-14 pl-3 pr-3 space-x-2 duration-500`}>
                                  
                                  <span
                                    className="text-xl font-bold"
                                  >Вход</span>
                            </button>
                            <button
                              type="button"
                              onClick={handleSignUp}
                              className={`flex  text-center mt-3 hover:shadow-xl rounded-md bg-white hover:shadow-purple-300 hover:bg-purple-500   pl-3 pr-3 space-x-2 duration-500`}>
                                  
                                  <span
                                    className="text-lg  font-bold"
                                  >Авторизоваться</span>
                            </button>
                          </div>
                        </div>
                    </div>


                </form>
            </div>

        </>
    );

};
 
export default  SignIn;