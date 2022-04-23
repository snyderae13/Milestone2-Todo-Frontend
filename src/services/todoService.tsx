import axios from 'axios';

class TodoDataService {
    getAll = () => {
        return axios.get('https://todolistmilestone2.herokuapp.com/todos')
    }

    getTodo = (id: any) => {
        return axios.get(`https://todolistmilestone2.herokuapp.com/todos/${id}`)
    }

    createTodo = (data: any) => {
        return axios.post('https://todolistmilestone2.herokuapp.com/todos/new', data)
        
    }

    updateTodo = (id: any, data: any) => {
        return axios.put(`https://todolistmilestone2.herokuapp.com/todos/${id}`, data)
    }

    deleteTodo = (id: any) => {
        return axios.delete(`https://todolistmilestone2.herokuapp.com/todos/${id}`)
    }

    // getAll = () => {
    //     return axios.get('http://localhost:3456/todos')
    // }

    // getTodo = (id) => {
    //     return axios.get(`http://localhost:3456/todos/${id}`)
    // }

    // createTodo = (data) => {
    //     return axios.post('http://localhost:3456/todos/new', data)
        
    // }

    // updateTodo = (id, data) => {
    //     return axios.put(`http://localhost:3456/todos/${id}`, data)
    // }

    // deleteTodo = (id) => {
    //     return axios.delete(`http://localhost:3456/todos/${id}`)
    // }


}

export default new TodoDataService();