// api.js
import { urlinback } from "../urlinback";


export const CreateDialog = async (
    name: string,
    token: string | undefined,
    // password: string | undefined,

    
    ) => {
        const url = `${urlinback}/dialog`;
    try {
        
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
            }),
        });


        

        return await res.json();
    } catch (error) {
        console.error("Error uploading files");
        throw error;
    }
  };
