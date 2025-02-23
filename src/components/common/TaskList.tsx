import React from "react";
import Task from "./Task";

// Hier kommt die Logik für das rendern und state updates
// Theoretisch wenn ENTER im Input geklickt wird, muss ja ein neue Task erstellt werden
const TaskList: React.FC = () => { 
    return ( 
        <>
            <Task>
            </Task>
        </>
    );
};

export default TaskList;
