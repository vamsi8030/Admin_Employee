import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const Android = () => {
    const [users,setUser] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:2020/android_developer");
        setUser(result.data);
    };
    const filteredList = users.filter(list  => {
        return list.Name.toLowerCase().includes(input.toLowerCase())
    });
    return (
        <div className="App">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
                    <input type="text" onChange={e => setInput(e.target.value)} style={{width:"735px"}}  className="form-control" placeholder="Search by Name" />
                </div>
            </div>
            <div className="py-4" style={{fontSize:12}}>
                <table className="table table-hover text-center text-dark border shadow">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Sl.No</th>
                            <th>Name of Jobseeker</th>
                            <th colSpan="3">Years of Experience
                                <table className="text-center">
                                    <tr>
                                        <th>Swift</th>
                                        <th>CPP</th>
                                        <th>JAVA</th>
                                    </tr>
                                </table>
                            </th>
                            <th colSpan="3">External Results
                            <table className="text-center">
                                    <tr>
                                        <th>Swift</th>
                                        <th>CPP</th>
                                        <th>JAVA</th>
                                    </tr>
                                </table>
                            </th>
                            <th>Salary</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredList.map((user,index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.Name}</td>
                                    <td>{user.Experience.Swift}</td>
                                    <td>{user.Experience.CPP}</td>
                                    <td>{user.Experience.JAVA}</td>
                                    <td>{user.Results.Swift}</td>
                                    <td>{user.Results.CPP}</td>
                                    <td>{user.Results.JAVA}</td>
                                    <td>{user.Salary}</td>
                                    <td><input type="checkbox" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>        
        </div>
    );
};

export default Android;