import { Eye, EyeOff } from "lucide-react";
import { FC, useState } from "react";



export const ChatContact: FC<{}> = () => {

    const [dela, setDela] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [name, setName] = useState("")    
    const [dataofbirth, setDataOfBirth] = useState("")
    const [placeofresidence, setPlaceOfResidence] = useState("")
    const [telephone, setTelephone] = useState("")
    const [nationality, setNationality] = useState("")
    const [citizenship, setCitizenship] = useState("")
    const [placeofworkposition, setPlaceOfWorkPosition] = useState("")
    const [education, setEducation] = useState("")
    const [maritalstatus, setMaritalStatus] = useState("")
    const [passportorotherdocuments, setPassportOrOtherDocuments] = useState("")
    const [number, setNumber] = useState("")
    const [series, setSeries] = useState("")
    const [whenissued, setWhenIssued] = useState("")
    const [issuedbywhom, setIssuedByWhom] = useState("")
    const [languagetotestify, setLanguageToTestify] = useState("")
    const [criminalrecord, setCriminalRecord] = useState("")

    const [error, setError] = useState("");

  
  
    return (
        <>
            <div className="row-start-1 row-end-4 col-span-5 mt-10 mb-10 mr-10 rounded-md w-2/3  hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
                <div
                    className="flex justify-center mt-10 mb-5"
                >
                    <h1
                      className="font-bold text-4xl"
                    > 
                      Совещание
                  </h1>
                </div>
                { error && (		
					                <div className='bg-red-500 flex justify-center items-center ml-5 mr-5 text-white  text-md py-1 px-3 rounded-md mt-5 mb-5'>
					                	<p className='' > {error} </p>	
					                </div>	

					) }
              <div className="grid grid-cols-2 grid-flow-row justify-center items-center ml-5 mr-5">
                {/* <div className="flex flex-col mt-10 "> */}

                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        № Дела*
                      </span>
                      <input
                        value={dela}
                        onChange={(e) => setDela(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Фамилия*
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
                        Имя*
                      </span>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Отчество*
                      </span>
                      <input
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Дата Рождения*
                      </span>
                      <input
                        value={dataofbirth}
                        onChange={(e) => setDataOfBirth(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Место жительства*
                      </span>
                      <input
                        value={placeofresidence}
                        onChange={(e) => setPlaceOfResidence(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Телефон*
                      </span>
                      <input
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Национальность
                      </span>
                      <input
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Гражданство*
                      </span>
                      <input
                        value={citizenship}
                        onChange={(e) => setCitizenship(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                  <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Образование*
                      </span>
                      <input
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>

                {/* </div> */}
                {/* <div className="flex flex-col mt-5 "> */}

                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Место работы, должность
                      </span>
                      <input
                        value={placeofworkposition}
                        onChange={(e) => setPlaceOfWorkPosition(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                  <div className="mt-3 ml-2 mr-2 mb-3">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 mb-2">
                        Семейное положения*
                      </span>
                      <input
                        value={maritalstatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        placeholder=""
                        className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                      />
                    </label>
                  </div>
                <div 
                    className="flex flex-col col-span-2 justify-center"
                    >
                    
                        <div className="mt-3 ml-2 mr-2 mb-3 ">
                          <label className="block">
                              <span className="block text-sm font-medium text-slate-700 mb-1">
                                Пасторт или другие документы*
                              </span>
                              <select
                                value={passportorotherdocuments}
                                onChange={(e) => setPassportOrOtherDocuments(e.target.value)}
                                className="border-b-2 rounded-md h-9 w-full hover:shadow-md hover:shadow-purple-300 border-purple-200 focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 duration-300">
                                  <option value="">Удостоверение личности или пасторт</option>
                              </select>
                          </label>
                        </div>

                        <div className="flex justify-center">
                        <div className="mt-3 ml-2 mr-2 mb-3">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700 mb-2">
                              Номер*
                            </span>
                            <input
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              placeholder=""
                              className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                            />
                          </label>
                        </div>
                        <div className="mt-3 ml-2 mr-2 mb-3">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700 mb-2">
                              Серия(если пасторт)*
                            </span>
                            <input
                              value={series}
                              onChange={(e) => setSeries(e.target.value)}
                              placeholder=""
                              className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                            />
                          </label>
                        </div>
                          </div>
                          <div 
                              className="flex justify-center"
                              >
                        <div className="mt-3 ml-2 mr-2 mb-3">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700 mb-2">
                              Когда выдан*
                            </span>
                            <input
                              value={whenissued}
                              onChange={(e) => setWhenIssued(e.target.value)}
                              placeholder=""
                              className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                            />
                          </label>
                        </div>
                        <div className="mt-3 ml-2 mr-2 mb-3">
                          <label className="block">
                            <span className="block text-sm font-medium text-slate-700 mb-2">
                              Кем выдан*
                            </span>
                            <input
                              value={issuedbywhom}
                              onChange={(e) => setIssuedByWhom(e.target.value)}
                              placeholder=""
                              className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                            />
                          </label>
                        </div>
                        </div>
                    </div>
                    <div className="mt-3 ml-2 mr-2 mb-3">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 mb-2">
                          На каком языку желает давать показания*
                        </span>
                        <input
                          value={languagetotestify}
                          onChange={(e) => setLanguageToTestify(e.target.value)}
                          placeholder=""
                          className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                        />
                      </label>
                    </div>
                    <div className="mt-3 ml-2 mr-2 mb-3">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 mb-2">
                          Судимость*
                        </span>
                        <input
                          value={criminalrecord}
                          onChange={(e) => setCriminalRecord(e.target.value)}
                          placeholder=""
                          className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                        />
                      </label>
                    </div>
                {/* </div> */}
               </div>
               <div className="flex justify-center mt-5 mb-5">
                  <a
                    href="/create-chat-dial"
                  >
                  <button
                    type="button"
                    // onClick={recording ? handleStopRecording : handleStartRecording}
                    className={`flex items-center hover:shadow-xl rounded-md bg-purple-400 hover:shadow-purple-300 hover:bg-purple-500  h-14 pl-3 pr-3 space-x-2 duration-500`}>
                        
                        <span
                          className="text-xl font-bold hover:text-gray-100 text-white duration-300 "
                        >Далее</span>
                  </button>
                  </a>
                </div>
            </div>
      
        </>
    );

};