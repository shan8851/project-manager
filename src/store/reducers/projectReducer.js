const initState = {
  projects: [
    { id: "1", title: "mario", content: "blah blah blah" },
    { id: "2", title: "luigi", content: "blah blah blah" },
    { id: "3", title: "yoshi", content: "blach blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
