import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "./PlayerCard/PlayerCard";

const Player = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/read")
      .then((response) => {
        console.log(response);
        setPlayers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <section id="player">
      <Container>
        <Row>
          <Col lg="4">
            <div className="d-flex">
              <a href="/create" className="btn btn-primary my-2 me-2">
                Create New Player
              </a>
              <a href="/search" className="btn btn-primary my-2 me-2">
                Search Player
              </a>
            </div>
            <h1>List Players</h1>
            {players.map((player, i) => {
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
    </section>
  );
};

export default Player;
