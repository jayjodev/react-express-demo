import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchPeople,
  inputName,
  addName,
  deleteName,
  randomGroup,
} from "./actions/people";

const mapStateToProps = ({ input, people, error, group }) => {
  return {
    input,
    people,
    error,
    group,
  };
};

const mapDisPatchToProps = {
  fetchPeople,
  addName,
  inputName,
  deleteName,
  randomGroup,
};

class App extends React.Component {
  // people의 값 array로 반드시 지정
  static propTypes = {
    people: PropTypes.array.isRequired,
    group: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const {
      people,
      input,
      inputName,
      addName,
      deleteName,
      randomGroup,
      error,
      group,
    } = this.props;
    return (
      <div>
        <h2>Generating Random Groups of People</h2>
        <ul>
          {people.map(function (item, i) {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <input type="text" onChange={(e) => inputName(e.target.value)} />
        <input type="button" value="add" onClick={() => addName(input)} />
        <br />
        <input type="text" onChange={(e) => inputName(e.target.value)} />
        <input type="button" value="delete" onClick={() => deleteName(input)} />
        <br />
        <input type="text" onChange={(e) => inputName(e.target.value)} />
        <input
          type="button"
          value="group"
          onClick={() => randomGroup(people, input)}
        />
        <h5>{group}</h5>
        <h5> your input: {input}</h5>
        <h5>{error}</h5>
        <h4>Solidware - Full Stack [React, Express, and MongoDB]</h4>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(App);
