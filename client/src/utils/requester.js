
const requester =async(URL) =>{
    
    try{
        const request = await fetch(URL);
        const response = await request.json();
    
        return response;
    }catch(err){
        console.log(err);
    }
}
export default requester;