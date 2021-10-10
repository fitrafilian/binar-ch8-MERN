import { Container, Row, Col } from "react-bootstrap";
// import "./style.css";
import React from "react";
import Axios from "axios";
import PlayerCard from "../Player/PlayerCard/PlayerCard";

class SearchPlayer extends React.Component {
  state = {
    players: null,
  };

  ButtonClick = async () => {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const experience = document.querySelector("#experience").value;
    const level = document.querySelector("#level").value;

    const DataPassing = {
      url: "http://localhost:5000/api/find",
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

    Axios(DataPassing).then((res) => {
      this.setState({
        players: res.data.data,
      });
    });
    console.log(this.state.players);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg="4">
            <h1>Search Player</h1>
            <p style={{ color: "red" }}>Cari player berdasarkan username, email, experience, atau level</p>
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
        <Row className="mt-2">
          <Col lg="4">
            {this.state.players === null
              ? null
              : this.state.players.map((player, i) => {
                  return (
                    <PlayerCard
                      key={i}
                      uid={player._id}
                      username={player.username}
                      email={player.email}
                      experience={player.experience}
                      level={player.level}
                    />
                  );
                })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPlayer;
