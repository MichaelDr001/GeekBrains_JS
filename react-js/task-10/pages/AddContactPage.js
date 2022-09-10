import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db as firebaseDB } from "../firebase";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddContactPage = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        firebaseDB.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact added successfully");
          }
        });
      } else {
        firebaseDB.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact updated successfully");
          }
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: 100 }}>
      <form
        style={{
          margin: "auto",
          padding: 15,
          maxWidth: 400,
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor={"name"}>Name</label>
        <input
          id={"name"}
          type={"text"}
          placeholder={"Your name is.."}
          name={"name"}
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor={"email"}>Email</label>
        <input
          placeholder={"Your email is..."}
          id={"email"}
          type={"email"}
          name={"email"}
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor={"contact"}>Contact</label>
        <input
          id={"contact"}
          type={"number"}
          placeholder={"Your number is..."}
          name={"contact"}
          value={contact || ""}
          onChange={handleInputChange}
        />
        <input type={"submit"} value={id ? "update" : "save"} />
      </form>
    </div>
  );
};

export default AddContactPage;
