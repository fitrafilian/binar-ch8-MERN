import { useParams, useHistory } from "react-router";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// const UpdatePlayer = () => {
//   let { id } = useParams();

//   const [players, setPlayers] = useState([]);
//   useEffect(() => {
//     Axios.get("http://localhost:5000/api/read")
//       .then((response) => {
//         setPlayers(response.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

//   const player = players.find((player) => player._id === id);
//   console.log(player);

//   const ButtonClick = async (props) => {
//     const username = document.querySelector("#username").value;
//     const email = document.querySelector("#email").value;
//     const experience = document.querySelector("#experience").value;
//     const level = document.querySelector("#level").value;

//     const DataPassing = {
//       url: "http://localhost:5000/api/update",
//       method: "put",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: JSON.stringify({
//         username: username,
//         email: email,
//         experience: experience,
//         level: level,
//       }),
//     };
//     // const history = useHistory();
//     Axios(DataPassing).then(() => {
//       // history.push("/");
//     });
//     // .catch((err) => console.log(err));
//   };

//   return (
//     <section>
//       <box>
//         username
//         <input type="text" name="username" id="username" />
//       </box>
//       <box>
//         email
//         <input type="text" name="email" id="email" />
//       </box>
//       <box>
//         experience
//         <select id="experience" name="experience">
//           <option value="beginner">Beginner</option>
//           <option value="moderate">Moderate</option>
//           <option value="expert">Expert</option>
//           <option value="legend">Legend</option>
//         </select>
//       </box>
//       <box>
//         level
//         <input type="text" name="level" id="level" />
//       </box>
//       <button type="submit" className="btn btn-primary" onClick={ButtonClick}>
//         Update
//       </button>
//     </section>
//   );
// };

class UpdatePlayer extends React.Component {
  state = {
    players: null,
    player: null,
  };

  componentDidMount(props) {
    Axios.get("http://localhost:5000/api/read")
      .then((response) => {
        this.setState({
          players: response.data.data,
          player: response.data.data.find((player) => player._id === this.props.match.params.id),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    // console.log(this.state.players);
    console.log(this.state.player);
  }

  ButtonClick = async (props) => {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const experience = document.querySelector("#experience").value;
    const level = document.querySelector("#level").value;

    const DataPassing = {
      url: "http://localhost:5000/api/update",
      method: "put",
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

  onTodoChange(email, experience, level) {
    this.setState({
      player: {
        email: email,
        experience: experience,
        level: level,
      },
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="3">
            <box>
              username
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.player === null ? null : this.state.player.username}
                disabled="disabled"
              />
            </box>
            <box>
              email
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.player === null ? null : this.state.player.email}
                onChange={(e) => this.onTodoChange(e.target.email)}
              />
            </box>
            <box>
              experience
              <select
                id="experience"
                name="experience"
                value={this.state.player === null ? null : this.state.player.experience}
                onChange={(e) => this.onTodoChange(e.target.experience)}
              >
                <option value="beginner">Beginner</option>
                <option value="moderate">Moderate</option>
                <option value="expert">Expert</option>
                <option value="legend">Legend</option>
              </select>
            </box>
            <box>
              level
              <input
                type="text"
                name="level"
                id="level"
                value={this.state.player === null ? null : this.state.player.level}
                onChange={(e) => this.onTodoChange(e.target.level)}
              />
            </box>
            <button type="submit" className="btn btn-primary" onClick={this.ButtonClick}>
              Update
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpdatePlayer;
