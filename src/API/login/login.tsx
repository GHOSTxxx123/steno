

// api.js

import { urlinback } from "../urlinback";


export const Login = async (
    username: string | undefined,
    password: string | undefined,

    
    ) => {
        const url = `${urlinback}/token`;
    try {
        const formData = new URLSearchParams();
        formData.append('grant_type', '');
        formData.append('username', username || "dasd");
        formData.append('password', password || "sadasd");
        formData.append('scope', '');
        formData.append('client_id', '');
        formData.append('client_secret', '');
        console.log(username, password);
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });


        

        return await res.json();
    } catch (error) {
        console.error("Error uploading files");
        throw error;
    }
  };
