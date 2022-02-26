import axios from 'axios';

class TodoDataService {
    getAll = () => {
        return axios.get('https://todolistmilestone2.herokuapp.com/todos')
    }

    getTodo = (id) => {
        return axios.get(`https://todolistmilestone2.herokuapp.com/todos/${id}`)
    }

    createTodo = (data) => {
        return axios.post('https://todolistmilestone2.herokuapp.com/todos/new', data)
        
    }

    updateTodo = (id, data) => {
        return axios.put(`https://todolistmilestone2.herokuapp.com/todos/${id}`, data)
    }

    deleteTodo = (id) => {
        return axios.delete(`https://todolistmilestone2.herokuapp.com/todos/${id}`)
    }

}

export default new TodoDataService();