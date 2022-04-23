import React, {useState, useEffect} from 'react'
import TaskGroup from './TaskGroup';
import { DeleteTodoContext } from '../context/DeleteTodoContext';
import TodoDataService from '../services/todoService'

// Called from DisplayContainer.js
const TaskList = (props: any) => {
    // Use State for data pulled from database
    let [todoData, setTodoData] = useState([]);

    // Use State for refresh after deleting task
    let [delFlag, toggleDelFlag] = useState(false)

    // Handle clicking delete button, causing refresh of tasks
    const handleDelClick = (id: any, delFlag: any) => {
        try {
            TodoDataService.deleteTodo(id);
            toggleDelFlag(!delFlag)
        }
        catch(error) {
            console.error(`Error while attempting to delete the task, ${error}`);
        }
    }

    // Retrieve data from the database then set the state 
    useEffect(() => {
        TodoDataService.getAll().then(response => {setTodoData(response.data)})
    }, [delFlag])

    // Accessing props that were passed in
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    // Test data
    let data = [{_id: "", name: "", priority: "", dueDate: "", description: ""}]
    
    // Need to fill groupTodoList whether sorting by priority or dueDate
    let groupTodosList: {} = [];

    // Determine that sorting by priorities
    if (priorities) {
        let criticalTodos: any[] = [];
        let highTodos: any[] = [];
        let mediumTodos: any[] = [];
        let lowTodos: any[] = [];

        // Function to sort todos by priority and push them to an array of the same type
        const sortByPriority = (todo: any) => {
            if (todo.priority === "Critical") {
                criticalTodos.push(todo);
            } else if (todo.priority === "High") {
                highTodos.push(todo);
            } else if (todo.priority === "Medium") {
                mediumTodos.push(todo);
            } else {
                lowTodos.push(todo);
            }
        }

        // Iterating through all of the todos and using the sorting function
        for (let i = 0; i < todoData.length; i++) {
            let todo = todoData[i];
            sortByPriority(todo);
        }

        // Creating an array of arrays, where each inner array represents a specific priority
        let sortedTodos = [criticalTodos, highTodos, mediumTodos, lowTodos];

        // Defining the headers to be used when sorting by priority
        const priorityHeaders = [
            'Critical: Do this task and ignore everything else!', 
            'High: Needs to be completed soon', 
            'Medium: No rush to be completed', 
            'Low: Just a reminder for now'
        ]

        // Header background color
        let headerColors = ['red', 'orange', 'yellow', 'lightblue']

        // Making a TaskGroup by priority and passing in the header and appropriate data as props
        groupTodosList = priorityHeaders.map((priority, index) => {
            data = sortedTodos[index];
            let headerStyle = {
                backgroundColor: headerColors[index], 
                borderRadius: "2rem",
                padding: "0.25rem 0rem",
                justifyContent: "center",
                display: "flex"
            }
            return (
                <TaskGroup key={index} header={priority} data={data} headerStyle={headerStyle} sort={"priorities"}/>
            )
        })
    }

    // Determine if sorting by dueDates
    if (dueDates) {
        let pastTodos: any[] = []
        let todayTodos: any[] = [];
        let tomorrowTodos: any[] = [];
        let thisWeekTodos: any[] = [];
        let futureTodos: any[] = [];

        // Need today's date, but do not want time to be part of it, since user selected due date did not have a time
        const todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        let todayMonth = todayDate.getMonth();
        let todayDay = todayDate.getDate();
        let today = new Date(todayYear, todayMonth, todayDay);

        // Calculate the number of milliseconds(ms) in one day
        const msInOneDay = 1000 * 60 * 60 * 24;

        // Function to sort tasks by dueDate categories and push them to an array of the same type
        const sortByDate = (todo: any) => {
            // Find the difference in ms between today and the dueDate
            let deconstructedDueDate = todo.dueDate.split('-')
            let dueYear = deconstructedDueDate[0];
            // Months in the date function are from 0 to 11, so need to subtract one from the actual month to get the correct integer to use in Date()
            let dueMonth = deconstructedDueDate[1] - 1;
            let dueDay = deconstructedDueDate[2];

            let dueDate = new Date(dueYear, dueMonth, dueDay)
            // Find the difference in ms between today and the dueDate
            let daysUntilDue = (dueDate.getTime() - today.getTime()) / msInOneDay;

            if (daysUntilDue < 0) {
                pastTodos.push(todo);
            } else if (daysUntilDue === 0) {
                todayTodos.push(todo);
            } else if (daysUntilDue === 1) {
                tomorrowTodos.push(todo);
            } else if (daysUntilDue <= 7) {
                thisWeekTodos.push(todo);
            } else {
                futureTodos.push(todo);
            }
        }
        
        // Iterating through all of the todos and using the sorting function
        for (let i = 0; i < todoData.length; i++) {
            let todo = todoData[i];
            sortByDate(todo)
        }

        // Creating an array of arrays, where each inner array represents a specific dueDate category
        let sortedTodos = [pastTodos, todayTodos, tomorrowTodos, thisWeekTodos, futureTodos];

        // Defining the headers to be used when sorting by dueDate
        const dueDateHeaders = [
            'Past Due',
            'Due Today',
            'Due Tomorrow',
            'Due Within the Next 7 Days',
            'Future Due Dates'
        ];

        // Header background color
        let headerColors = ['red', 'orange', 'yellow', 'lightblue', 'lightgray']
        
        // Making a TaskGroup by dueDate and passing in the header and appropriate data as props
        groupTodosList = dueDateHeaders.map((dueDate, index) => {
            data = sortedTodos[index];
            let headerStyle = {
                backgroundColor: headerColors[index], 
                borderRadius: "2rem",
                padding: "0.25rem 0rem",
                justifyContent: "center",
                display: "flex"
            }
            return (
                <TaskGroup key={index} header={dueDate} data={data} headerStyle={headerStyle} sort={"dueDates"}/>
            )
        });
    }

    // Passes in the TaskGroup React components for whichever sorting method was chosen.
    return(
        <DeleteTodoContext.Provider value={{
                delFlag: delFlag,
                handleDelClick: handleDelClick
            }}
        >
            {groupTodosList}
        </DeleteTodoContext.Provider>
    )
}

export default TaskList