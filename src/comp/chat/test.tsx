'use client'

import { useState, useRef, useEffect } from "react";

const AudioRecorderPlayer = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [audio, setAudio] = useState<string>('');
  const mimeType = "audio/webm";

  useEffect(() => {
    const getMicrophonePermission = async () => {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert((err as Error).message);
      }
    };

    if (!permission) {
      getMicrophonePermission();
    }
  }, [permission]);

  const startRecording = () => {
    if (!stream) return;

    setRecordingStatus("recording");
    const mediaRecorder = new MediaRecorder(stream, { mimeType });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.start();

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudio(audioUrl);
        audioChunksRef.current = [];
      };
    }
  };

  return (
    <div>
      <main>
        {!permission ? (
          <button onClick={() => setPermission(true)} type="button">
            Get Microphone Permission
          </button>
        ) : null}
        {permission && recordingStatus === "inactive" ? (
          <button onClick={startRecording} type="button">
            Start Recording
          </button>
        ) : null}
        {recordingStatus === "recording" ? (
          <button onClick={stopRecording} type="button">
            Stop Recording
          </button>
        ) : null}
        {audio && (
          <div>
            <audio src={audio} controls />
          </div>
        )}
      </main>
    </div>
  );
};

export default AudioRecorderPlayer;
