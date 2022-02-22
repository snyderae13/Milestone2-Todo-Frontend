import React, {useState, useEffect} from 'react'
import TaskGroup from './TaskGroup';
import TodoDataService from '../services/todoService.js'

const TaskList = (props) => {
    // Use State for data pulled from database
    let [todoData, setTodoData] = useState([]);

    // Retrieve data from the database then set the state 
    useEffect(() => {
        TodoDataService.getAll().then(response => {setTodoData(response.data)})
    }, [])

    // Accessing props that were passed in
    const priorities = props.priorities;
    const dueDates = props.dueDates;

    // Test data
    let data = [{_id: "", name: "Test Data in TaskList.js", priority: "High", dueDate: "", description: ""}]
    
    // Need to fill groupTodoList whether sorting by priority or dueDate
    let groupTodosList = [];

    // Determine that sorting by priorities
    if (priorities) {
        let criticalTodos = [];
        let highTodos = [];
        let mediumTodos = [];
        let lowTodos = [];

        // Function to sort todos by priority and push them to an array of the same type
        const sortByPriority = (todo) => {
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

        // Making a TaskGroup by priority and passing in the header and appropriate data as props
        groupTodosList = priorityHeaders.map((priority, index) => {
            data = sortedTodos[index];
            return (
                <TaskGroup key={index} header={priority} data={data} />
            )
        })
    }

    if (dueDates) {
        let todayTasks = [];
        let tomorrowTasks = [];
        let thisWeekTasks = [];
        let futureTasks = [];

        const sortByDate = (date) => {
            let today = new Date();
            
        }
        
        const dueDateHeaders = [
            'Due Today',
            'Due Tomorrow',
            'Due Within the Next 7 Days',
            'Future Due Dates'
        ]
    }

    return(
        <div>
            {groupTodosList}
        </div>
        
    )
}

export default TaskList