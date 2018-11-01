const initState = {
  projects: [
    { id: "1", title: "mario", content: "blah blah blah" },
    { id: "2", title: "luigi", content: "blah blah blah" },
    { id: "3", title: "yoshi", content: "blach blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
