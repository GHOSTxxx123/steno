import { CreateDialog } from "@/API/Dialog/CreateDialog";
import { SendDialogAudio } from "@/API/Dialog/SendDialogAudio";
import { Check, Pause, Pencil, Play } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

const Chat: FC<{}> = () => {
  const { data: session } = useSession();

  const [title, setTitle] = useState("Совещание без имени");
  const [titleEdit, setTitleEdit] = useState(false);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [user1DeviceId, setUser1DeviceId] = useState<string>("");
  const [user2DeviceId, setUser2DeviceId] = useState<string>("");
  const [recording, setRecording] = useState<boolean>(false);
  const [audioURL1, setAudioURL1] = useState<string>('');
  const [audioURL2, setAudioURL2] = useState<string>('');
  const mediaRecorder1 = useRef<MediaRecorder | null>(null);
  const mediaRecorder2 = useRef<MediaRecorder | null>(null);
  const audioChunks1 = useRef<Blob[]>([]);
  const audioChunks2 = useRef<Blob[]>([]);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const getAudioDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputDevices = devices.filter(device => device.kind === "audioinput");
        setAudioDevices(audioInputDevices);
      } catch (err) {
        console.error("Error accessing audio devices:", err);
      }
    };

    getAudioDevices();
  }, []);

  const handleTitleEdit = () => setTitleEdit(!titleEdit);

  const handleStartRecording = async () => {
    if (user1DeviceId === user2DeviceId) {
      setError("Пожалуйста, выберите два разных микрофона для участников.");
      return;
    }

    setRecording(true);
    setError("");  // Clear any previous error messages

    try {
      const stream1 = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: user1DeviceId } });
      const stream2 = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: user2DeviceId } });

      mediaRecorder1.current = new MediaRecorder(stream1);
      mediaRecorder2.current = new MediaRecorder(stream2);

      mediaRecorder1.current.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks1.current.push(event.data);
        }
      };
      mediaRecorder2.current.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks2.current.push(event.data);
        }
      };

      mediaRecorder1.current.start();
      mediaRecorder2.current.start();
    } catch (error) {
      console.error("Error starting recording:", error);
      setRecording(false);
    }
  };

  const handleStopRecording = () => {
    setRecording(false);

    if (mediaRecorder1.current && mediaRecorder1.current.state !== "inactive") {
      mediaRecorder1.current.stop();
      mediaRecorder1.current.onstop = () => {
        const blob = new Blob(audioChunks1.current, { type: 'audio/wav' });
        const audioURL = URL.createObjectURL(blob);
        setAudioURL1(audioURL);
        audioChunks1.current = [];
      };
    }

    if (mediaRecorder2.current && mediaRecorder2.current.state !== "inactive") {
      mediaRecorder2.current.stop();
      mediaRecorder2.current.onstop = () => {
        const blob = new Blob(audioChunks2.current, { type: 'audio/wav' });
        const audioURL = URL.createObjectURL(blob);
        setAudioURL2(audioURL);
        audioChunks2.current = [];
      };
    }
  };

  const handleSend = async () => {
    if (title === "Совещание без имени") {
      setError("Введите названия совещания !!!");
    } else if (!name1) {
      setError("Введите имя участника 1 !!!");
    } else if (!name2) {
      setError("Введите имя участника 2 !!!");
    } else if (!audioURL1 || !audioURL2) {
      setError("No audio files to send");
    } else {
      try {
        const iddialog = await CreateDialog(title, session?.user.access_token);
        console.log(iddialog);
        const data = await SendDialogAudio(iddialog?.id, name1, name2, audioURL1, audioURL2);
        console.log(data);
      } catch (error) {
        setError("Error sending audio");
      }
    }
  };

  return (
    <>
      <div className="row-start-1 row-end-4 col-span-5 mt-10 mb-5 mr-10 rounded-md w-2/3 h-auto hover:shadow-2xl hover:shadow-purple-300 bg-white duration-300">
        <div className="flex flex-col pt-5 mt-3 mb-20">
          {error && (
            <div className='bg-red-500 flex justify-center items-center ml-5 mr-5 text-white text-md py-1 px-3 rounded-md mt-5 mb-5'>
              <p>{error}</p>
            </div>
          )}
          <div className="flex justify-between items-center">
            {titleEdit ? (
              <div className="pl-4">
                <label className="block">
                  <input
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Имя для совещания"
                    className="border-b-2 rounded-md pl-2 h-9 w-[24rem] hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                  />
                </label>
              </div>
            ) : (
              <h2 className="font-semibold text-3xl pl-4">
                {title}
              </h2>
            )}

            <button onClick={handleTitleEdit} className="pr-4">
              {titleEdit ? (
                <Check />
              ) : (
                <Pencil />
              )}
            </button>
          </div>

          <div className="flex flex-col items-center pt-10">
            <div className="flex flex-col bg-gray-200 rounded-md hover:shadow-lg hover:shadow-purple-300 w-3/4 h-56 mb-10 duration-300">
              <div className="mt-3 ml-5 mr-5">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-1">
                    Участник 1
                  </span>
                  <input
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder=""
                    className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                  />
                </label>
              </div>
              <div className="mt-3 ml-5 mr-5">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-1">
                    Выбор устройства
                  </span>
                  <select
                    value={user1DeviceId}
                    onChange={(e) => setUser1DeviceId(e.target.value)}
                    className="border-b-2 rounded-md h-9 w-full hover:shadow-md hover:shadow-purple-300 border-purple-200 focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 duration-300">
                    {audioDevices.length > 0 ? (
                      audioDevices.map(device => (
                        <option key={device.deviceId} value={device.deviceId}>
                          {device.label || `Устройство ${device.deviceId}`}
                        </option>
                      ))
                    ) : (
                      <option value="">Нет доступных устройств</option>
                    )}
                  </select>
                </label>
              </div>
              <div className="flex mt-3 ml-5 justify-center">
                <div id="audioControlsUser1" className="audio-all">
                  <audio src={audioURL1} controls></audio>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-gray-200 rounded-md hover:shadow-lg hover:shadow-purple-300 w-3/4 h-56 mb-10 duration-300">
              <div className="mt-3 ml-5 mr-5">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-1">
                    Участник 2
                  </span>
                  <input
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder=""
                    className="border-b-2 rounded-md h-9 w-full pl-2 hover:shadow-md hover:shadow-purple-300 border-purple-200 placeholder:italic placeholder-purple-100 focus:outline-none focus:border-purple-500 hover:placeholder-purple-300 focus:ring-purple-500 focus:ring-1 duration-300"
                  />
                </label>
              </div>
              <div className="mt-3 ml-5 mr-5">
                <label className="block">
                  <span className="block text-sm font-medium text-slate-700 mb-1">
                    Выбор устройства
                  </span>
                  <select
                    value={user2DeviceId}
                    onChange={(e) => setUser2DeviceId(e.target.value)}
                    className="border-b-2 rounded-md h-9 w-full hover:shadow-md hover:shadow-purple-300 border-purple-200 focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 duration-300">
                    {audioDevices.length > 0 ? (
                      audioDevices.map(device => (
                        <option key={device.deviceId} value={device.deviceId}>
                          {device.label || `Устройство ${device.deviceId}`}
                        </option>
                      ))
                    ) : (
                      <option value="">Нет доступных устройств</option>
                    )}
                  </select>
                </label>
              </div>
              <div className="flex mt-3 ml-5 justify-center">
                <div id="audioControlsUser2" className="audio-all">
                  <audio src={audioURL2} controls></audio>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {!recording ? (
              <button
                onClick={handleStartRecording}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                Начать запись
              </button>
            ) : (
              <button
                onClick={handleStopRecording}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Остановить запись
              </button>
            )}
          </div>

          <div className="flex justify-center mt-5">
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
