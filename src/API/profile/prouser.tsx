// api.js
import { urlinback } from "../urlinback";


export const ProUser = async (
    token: string | undefined,
    // password: string | undefined,

    
    ) => {
        const url = `${urlinback}/users/me`;
    try {
        
        const res = await fetch(`${url}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            // body: formData.toString(),
        });


        

        return await res.json();
    } catch (error) {
        console.error("Error uploading files");
        throw error;
    }
  };
