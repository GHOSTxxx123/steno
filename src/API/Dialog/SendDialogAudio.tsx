// api.js
import { urlinback } from "../urlinback";


export const SendDialogAudio = async (
    id: number,
    name1: string,
    name2: string,
    audioURL1: string,
    audioURL2: string,
    // password: string | undefined,

    
    ) => {
        const url = `${urlinback}/dialog/${id}/audios`;
        
        const response1 = await fetch(audioURL1);
        const blob1 = await response1.blob();

        const response2 = await fetch(audioURL2);
        const blob2 = await response2.blob();
    
        const formData = new FormData();
        formData.append("name1", name1);
        formData.append("name2", name2);
        formData.append("audio_file1", blob1, "audio1.wav");
        formData.append("audio_file2", blob2, "audio2.wav");
    
        try {
          const response = await fetch(url, {
            method: "POST",
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error("Failed to upload files");
          }
    
          const data = await response.json();
          console.log("Upload successful", data);
        } catch (error) {
          console.error("Error uploading files", error);
        }
  };
