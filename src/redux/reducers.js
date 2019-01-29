const defaultLayout = [
  {
    id: 1,
    name: "layout 1",
    dom: {
      type: "div",
      children: [
        {
          type: "div",
          children: [
            {
              type: "div",
              class: "col-2",
              style: {
                height: "20px"
              }
            }
          ],
          style: {
            padding: 0,
            margin: 0
          }
        },
        {
          type: "h1",
          children: "Hello how are you is ok or not ok",
          style: {
            padding: 0,
            marginLeft: "20px",
            color: "green",
            margin: 0
          }
        }
      ],
      style: {
        height: "200px",
        background: "red"
      },
      classList: "col-12"
    }
  },
  {
    id: 2,
    name: "layout 2"
  },
  {
    id: 3,
    name: "layout 3"
  }
];
const defaultState = {
  layouts: defaultLayout,
  selected: defaultLayout[0]
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case "SELECT": {
      return {
        ...state,
        selected: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
