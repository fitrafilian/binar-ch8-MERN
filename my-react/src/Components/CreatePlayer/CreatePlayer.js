import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import React from "react";
import Axios from "axios";
import { withRouter } from "react-router";

class CreatePlayer extends React.Component {
  ButtonClick = async () => {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const experience = document.querySelector("#experience").value;
    const level = document.querySelector("#level").value;

    const DataPassing = {
      url: "http://localhost:5000/api/create",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        username: username,
        email: email,
        experience: experience,
        level: level,
      }),
    };

    Axios(DataPassing)
      .then(this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg="4">
            <h1>Create New Player</h1>
            <p style={{ color: "red" }}>Semua harus diisi, jika gagal berarti username sudah ada</p>
            <box>
              username
              <input type="text" name="username" id="username" />
            </box>
            <box>
              email
              <input type="text" name="email" id="email" />
            </box>
            <box>
              experience
              <select id="experience" name="experience">
                <option value="">Choose experience...</option>
                <option value="beginner">Beginner</option>
                <option value="moderate">Moderate</option>
                <option value="expert">Expert</option>
                <option value="legend">Legend</option>
              </select>
            </box>
            <box>
              level
              <input type="text" name="level" id="level" />
            </box>
            <button className="btn btn-primary" onClick={this.ButtonClick}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreatePlayer;
