const initState = {
  patterns: [
    { id: "1", title: "", line: [{feet:"", hands:""}] },
    { id: "2", title: "", line: [{feet:"", hands:""}] },
    { id: "3", title: "", line: [{feet:"", hands:""}] },
    { id: "4", title: "", line: [{feet:"", hands:""}] }
  ]
};
//this gets stored on the pattern property on state by the rootReducer
const patternReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PATTERN":
      console.log("created pattern", action.pattern);
      return state;
    case "CREATE_PATTERN_ERROR":
      console.log("create pattern error", action.err);
      return state;
    default:
      return state;
  }
};

export default patternReducer;
