import React from "react";
import { RiCheckFill } from "react-icons/ri";


const Task: React.FC = () => { 
    return ( 
        <div className="flex gap-3 items-center w-full border-t-4 border-b-4 border-dotted border-amber-900">
            <div className="bg-amber-400 p-1 px-5 ml-4 my-4 rounded-2xl">
                <RiCheckFill className="text-amber-950 text-2xl "/>
            </div>
            <input type="text" id="task" name="task" placeholder="Task Name" className="bg-amber-950 text-amber-100 text-xl"/>
        </div>
    );
};

export default Task;
