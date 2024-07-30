import React, { useState, useEffect } from 'react';
import { updateData, deleteData, showData } from '../assets/JSON/API';
import '../assets/css/AdminUsers.css';
import Navbar from './Navbar';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
            const data = await showData();
            // const data = await getData();
            const UserData = data.filter(user => user.Role === 'User');
            setUsers(UserData);
    };

    const handleEdit = (user) => {
        setEditUser(user);
    };

    const handleDelete = async (id) => {
            await deleteData(id);
            setUsers(users.filter(user => user.id !== id));
    };

    const handleSave = async () => {
            await updateData(editUser.id, editUser);
            setUsers(users.map(user => (user.id === editUser.id ? editUser : user)));
            setEditUser(null);
    };

    const handleChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        setEditUser(null);
    };

    return (
        <div className="admin-users">
            <Navbar/>
        <h1>User Management</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined Course</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {Array.isArray(users) && users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.uname}</td>
                    <td>{user.email}</td>
                    {Array.isArray(user.Plans) && user.Plans.map(plan => (
                        <td key={plan.id}>{plan.name}</td>
                    ))}
                    <td>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
        {editUser && (
            <div className="edit-modal show">
                <div className="edit-form">
                    <h2>Edit User</h2>
                    <label>
                        Name:
                        <input type="text" name="uname" value={editUser.uname} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={editUser.email} onChange={handleChange} />
                    </label>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        )}
    </div>
    );
};

export default AdminUsers;
