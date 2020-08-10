import axios from "axios";

// Get Data From DB
export const fetchPeople = () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_SERVER}/api/person`).then((response) => {
    // response.data is the users
    const data = response.data;
    const names = data.map((i) => i.name);
    dispatch(getPeopleAction(names));
  });
};
export const getPeopleAction = (names) => {
  return {
    type: "FETCH_PEOPLE",
    payload: {
      people: names,
    },
  };
};

// Add Name
export const addName = (name) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/person`, {
      name: name,
    });
    const data = response.data;
    dispatch(addNameAction(data.name));
  } catch (e) {
    alert(name + " is already exist.");
  }
};
export const addNameAction = (name) => {
  return {
    type: "ADD_PEOPLE",
    payload: {
      input: name,
    },
  };
};

//Delete Name
export const deleteName = (name) => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/person`);
  // response.data is the users
  const data = response.data;
  const cName = data.filter((i) => (i.name === name ? i : null));
  if (cName[0]) {
    dispatch(deleteNameAction(name));
    await axios.delete(`${process.env.REACT_APP_SERVER}/api/person/${cName[0]._id}`);
  }
};

export const deleteNameAction = (name) => {
  return {
    type: "DELETE_PEOPLE",
    payload: {
      input: name,
    },
  };
};

// Input name
export const inputName = (name) => (dispatch) => {
  dispatch(inputNameAction(name));
};

export const inputNameAction = (name) => ({
  type: "INPUT_PEOPLE",
  payload: {
    input: name,
  },
});

// Random Group
export const randomGroup = (people, input) => (dispatch) => {

  if (isNaN(input) || input < 2){
    alert(
      "Please input intger number more than 2"
    );
    return null
  }

  let names = [...people]
  let grouped = [];
  if (names.length % 2 != 0) {
    alert(
      "You must have an even number of names. You currently have " +
      names.length +
        " names."
    );
  } else {
    for (let i = names.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = names[i];
      names[i] = names[j];
      names[j] = temp;
    }
    grouped.push(divided(input, names));
  }

  function divided(n, arr) {
    let len = arr.length;
    let cnt = Math.floor(len / n) + (Math.floor(len % n) > 0 ? 1 : 0);
    let tmp = [];
    for (let i = 0; i < cnt; i++) {
      tmp.push(arr.splice(0, n));
    }
    return tmp;
  }
  dispatch(groupedNameAction(JSON.stringify(grouped)));
};

export const groupedNameAction = (group) => ({
  type: "GROUP_PEOPLE",
  payload: {
    group: group,
  },
});
