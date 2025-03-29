import { jwtDecode } from "jwt-decode";

export const getUserEmailByToken = () => {
    const token = sessionStorage.getItem('token');
    if (!token) return null; 
    try {
        const decodedToken: any = jwtDecode(token); 
        console.log(decodedToken);
        console.log(decodedToken.email);

        return decodedToken.email; 
    } catch (error) {
        console.error('שגיאה בפענוח ה-Token:', error);
        return null; 
    }
};

export const getUserIdByToken = () => {
    const token = sessionStorage.getItem('token');
    if (!token) return -1; 

    try {
        const decodedToken:any = jwtDecode(token); 
        console.log(decodedToken);
        console.log(decodedToken.nameid);
        
        return decodedToken.nameid; 
    } catch (error) {
        console.error('שגיאה בפענוח ה-Token:', error);
        return -1; 
    }
};
export const getUserNameByToken = () => {
    const token = sessionStorage.getItem('token');
    if (!token) return -1; 

    try {
        const decodedToken:any = jwtDecode(token); 
        console.log(decodedToken);
        console.log(decodedToken.unique_name);
        
        return decodedToken.unique_name; 
    } catch (error) {
        console.error('שגיאה בפענוח ה-Token:', error);
        return -1; 
    }
};





