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

//register

export const Registeruser = async(payload)=>{
    
    try{
       
        const response = await axios.post("/users/register",payload);
        return response.data;
    
    }
    catch(error){
    return error.message;
    }
    
    }

     //get user protected
     export const GetCurrentuser = async()=>{
    
        try{
            const response = await axios.get("/users/get-current-user");
            
            return response.data;
        
        }
        catch(error){
        return error.message;
        }
        
        }