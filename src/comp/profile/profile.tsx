import { ProUser } from "@/API/profile/prouser";
import { Check, Eye, EyeOff, Pause, Pencil, Play, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { FC, useEffect, useRef, useState } from "react";

interface UserD {
  username: string,
  first_name: string,
  last_name: string,
  is_admin: true,
  is_superuser: true
}


const Profile: FC<{}> = () => {

  const {data: session} = useSession();

  const [datas, setData] = useState<UserD | null>(null);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [statusa, setStatusA] = useState(false)
  const [statuss, setStatusS] = useState(false)
  const [isHidden, setIsHidden] = useState<boolean>(true);


  useEffect(() => {

    const fetchData = async () => {
    try {

      const data = await ProUser(session?.user.access_token);
      // console.log(session?.user.access_token);
      setUsername(data?.username);
      setFirstName(data?.first_name);
      setLastName(data?.last_name);
      setStatusA(data?.is_admin);
      setStatusS(data?.is_superuser);
      setData(data);
      // console.log(datas?.first_name);
    } catch (err) {
      console.error("Error accessing audio devices:", err);
    }
  }

  fetchData();



  }, []);

        return (
          <>
            <div className=" mt-10 mb-10 max-md:mr-1 max-md:ml-1 md:mr-10 rounded-md md:w-2/3  hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
              <div className="flex flex-col justify-center items-center pt-20 mt-3 mb-20">

                  <h1
                      className="font-bold text-4xl"
                  > 
                      Профиль
                  </h1>

                <div className="flex mt-10 ">

                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Username
                      </span>
                      <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
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

                </div>
                <div className="flex mt-5 ">

                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </span>
                      <input
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </span>
                      <input
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>

                </div>

                <div className=" mt-5">
                    <p className="font-semibold text-xl mb-3">
                      Статус 
                      
                    </p>
                      <p className=" ml-5 font-semibold">
                        Admin : <span className={`${statusa ? 'text-lime-500' : 'text-red-500'} text-xl`}> {statusa ? 'True' : 'False'}</span>
                      </p>
                      <p className=" ml-5 font-semibold">
                        Superuser : <span className={`${statuss ? 'text-lime-500' : 'text-red-500'} text-xl`}> {statuss ? 'True' : 'False'} </span>
                      </p>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    // onClick={recording ? handleStopRecording : handleStartRecording}
                    className={`flex items-center hover:shadow-xl rounded-md bg-lime-400 hover:shadow-lime-300 hover:bg-lime-500  h-14 pl-3 pr-3 space-x-2 duration-500`}>
                        
                        <span
                          className="text-xl font-bold hover:text-gray-100 text-white duration-300 "
                        >Сохранить</span>
                  </button>
                </div>

               </div>
            </div>

          </>
        );

};

export default Profile;
