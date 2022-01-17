import "./style.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addjob } from "../features/jobSlice";
import { addTodo } from "../actions/index";

export const Todo=()=> {

const [cname , setCname] = useState("");
const [Title , setTitle] = useState("");
const [salarystart , setSalarystart] = useState("");
const [salaryend , setSalaryend] = useState("");
const [jobdes , setJobdes] = useState("");
const [jobloc , setJobloc] = useState("");
const [jobtype , setJobtype] = useState("");
const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault();
dispatch(addjob({
    cname:cname,
    Title:Title,
    salarystart:salarystart,
    salaryend:salaryend,
    jobdes:jobdes,
    jobloc:jobloc,
    jobtype:jobtype,
}));

alert("New Job is added")
    
}

    return (
        <div className="addItems">
         <form action="" onSubmit={(e) => handleSubmit(e)}>
         <input type="text" 
                placeholder="Company Name "
                value={cname}
                onChange={(e) => setCname(e.target.value)}
                 /><br />
                <input type="text" 
                placeholder="Job Title" 
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                /><br />
                <input type="number" 
                placeholder="start range" 
                value={salarystart} 
                onChange={(e) => setSalarystart(e.target.value)}
                /><span>to</span>
                <input type="number" 
                placeholder="end reange" 
                value={salaryend}
                onChange={(e) => setSalaryend(e.target.value)}
                /><br />
                <input type="textarea" 
                placeholder="Job description" 
                value={jobdes}
                onChange={(e) => setJobdes(e.target.value)}
                /><br />
                <input type="text" 
                placeholder="job location" 
                value={jobloc}
                onChange={(e) => setJobloc(e.target.value)}
                /><br />
                <input type="text" 
                placeholder="Job type" 
                value={jobtype}
                onChange={(e) => setJobtype(e.target.value)}
                /><br />
                <button type="submit" onClick={dispatch(addTodo({
    cname:cname,
    Title:Title,
    salarystart:salarystart,
    salaryend:salaryend,
    jobdes:jobdes,
    jobloc:jobloc,
    jobtype:jobtype,
}))}>ADD JOB</button>
         </form>
            </div>
    )
}