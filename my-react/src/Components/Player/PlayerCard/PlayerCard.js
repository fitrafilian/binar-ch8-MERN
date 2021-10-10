import "./style.css";
import Axios from "axios";

const PlayerCard = ({ uid, username, email, experience, level }) => {
  const UbahButton = () => {
    // const username = document.querySelector(".card .username").value;
    const DataPassing = {
      url: "http://localhost:5000/api/delete",
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        username: username,
      }),
    };

    Axios(DataPassing)
      // .then((response) => console.log(response))
      // .then(console.log(this.props))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <span style={{ display: "none" }}>uid: {uid}</span>
      <span className="username">username: {username}</span>
      <span>email: {email}</span>
      <span>experience: {experience}</span>
      <span>level: {level}</span>
      <div className="action">
        <a href={"/player/" + uid} className="btn btn-primary badge me-1">
          Update
        </a>
        <button type="submit" className="btn btn-danger badge me-1" onClick={UbahButton}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
