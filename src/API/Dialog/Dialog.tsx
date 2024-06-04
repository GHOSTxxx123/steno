// api.js
import { urlinback } from "../urlinback";


export const DialogGet = async (
    id: string | string[] | undefined,
    token: string | undefined,

    
    ) => {
        const url = `${urlinback}/dialog/${id}`;
    try {
        
        const res = await fetch(`${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });


        

        return await res.json();
    } catch (error) {
        console.error("Error uploading files");
        throw error;
    }
  };
