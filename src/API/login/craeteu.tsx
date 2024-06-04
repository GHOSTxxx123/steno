

// api.js

import { urlinback } from "../urlinback";


export const Create_User = async (
    username: string | undefined,
    firstname: string | undefined,
    lastname: string | undefined,
    password: string | undefined,

    
    ) => {
        const url = `${urlinback}/create_user`;
    try {
        
        const res = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                first_name: firstname,
                last_name: lastname,
                password: password,
                is_admin: true,
                is_superuser: true
            }),
        });


        

        return await res.json();
    } catch (error) {
        console.error("Error uploading files");
        throw error;
    }
  };
