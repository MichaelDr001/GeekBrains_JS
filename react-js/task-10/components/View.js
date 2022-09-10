import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db as firebaseDB } from "../firebase";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    firebaseDB
      .child(`contacts/${id}`)
      .get()
      .then((data) => {
        if (data.exists()) {
          setUser({ ...data.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className={"card"}>
        <div className={"card-header"}>
          <p>User Contact Detail</p>
        </div>
        <div className={"container"}>
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to={"/"}>
            <button className={"bttn btn-edit"}>Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
