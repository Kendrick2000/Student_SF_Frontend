import axios from axios

const STUDENT_API_URL = 'http://localhost:8080/api/a1/student';

class EmployeeService{
    
    getEmployees(){
        return axios.get(STUDENT_API_URL);
    }
}

export default new EmployeeService();