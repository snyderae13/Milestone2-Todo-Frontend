import axios from 'axios';

class TodoDataService {
    getAll = () => {
        return axios.get('http://localhost:3456/todos')
    }

    createTodo = (data) => {
        return axios.post('http://localhost:3456/todos/new', data)
        
    }

    updateTodo = (id, data) => {
        return axios.put(`http://localhost:3456/todos/${id}`, data)
    }

    deleteTodo = (id) => {
        return axios.delete(`http://localhost:3456/todos/${id}`)
    }

}

export default new TodoDataService();