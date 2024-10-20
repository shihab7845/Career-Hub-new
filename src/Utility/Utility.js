import { json } from "react-router-dom";

const getStoredJobapplication = () =>{
    const storedJobapplication = localStorage.getItem('job-application');
    if(storedJobapplication){
        return JSON.parse(storedJobapplication)
    }
    return []
}

const savedJobapplication = (id) =>{

    const storedJobapplication = getStoredJobapplication();
    const exist =  storedJobapplication.find(jobId => jobId === id)
    if(!exist){
        storedJobapplication.push(id)  //empty array and add to the array as last elements
        localStorage.setItem('job-application',JSON.stringify(storedJobapplication))
    }
}

export {savedJobapplication,getStoredJobapplication}