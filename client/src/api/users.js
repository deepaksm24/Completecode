import axios from './index';



//login
export const Loginuser = async(payload)=>{

    try{
        const response = await axios.post("/users/login",payload);
        return response.data;
    
    }
    catch(error){
    return error.message;
    }
    
    }

