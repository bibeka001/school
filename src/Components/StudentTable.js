import React, { useState } from "react";
import StudentForm from "./StudentForm";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (student) => {
    setEditingStudent(null);
    setStudents(students.map((s) => (s.id === student.id ? student : s)));
  };

  return (
    <div>
      <h2>Student Table</h2>
      <StudentForm
        addStudent={addStudent}
        editStudent={editStudent}
        editingStudent={editingStudent}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => setEditingStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
                console.log("Hi");
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
