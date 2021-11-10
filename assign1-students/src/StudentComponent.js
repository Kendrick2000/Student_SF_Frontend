import React, {useState, useEffect} from "react";
import StudentService from "./StudentService";

function StudentComponent(){
    const [student, setStudent] =  useState([])

    useEffect(() => {
        getStudent()
    }, [])

    const getStudent = () => {
        StudentService.getStudent().then((response) => {
            setStudent(response.data)
            console.log(response.data);
        });
    };

    return(
        <div className="container">
            <h1 className="text-center">Student List</h1>

            <table className="table table-striped">
                <thead>
                    <table>
                        <tr>
                            <th>Student Id</th>
                            <th>Stundent Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </table>
                </thead>
                <tbody>
                    {
                        student.map(
                            student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.first_name}</td>
                                <td>{student.last_Name}</td>
                                <td>{student.phone_Num}</td>
                                <td>{student.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentComponent