import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const StudentForm = ({ addStudent, editStudent, editingStudent }) => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || grade.trim() === "") {
      return;
    }

    const newStudent = {
      id: editingStudent ? editingStudent.id : uuidv4(),
      name,
      grade,
    };

    if (editingStudent) {
      editStudent(newStudent);
    } else {
      addStudent(newStudent);
    }

    setName("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Grade:</label>
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />

      <button type="submit">{editingStudent ? "Update" : "Add"}</button>
    </form>
  );
};

export default StudentForm;
