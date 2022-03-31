const initialData = {
  taskList: [
    {
      id: "1",
      icon: "⭕️",
      status: "open",
      title: "Human Interest Form",
      content: "Fill out human interest distribution form",
    },
    {
      id: "2",
      icon: "⭕️",
      status: "open",
      title: "Purchase present",
      content: "Get an anniversary gift",
    },
    {
      id: "3",
      icon: "⭕️",
      status: "open",
      title: "Invest in investments",
      content: "Call the bank to talk about investments",
    },
    {
      id: "4",
      icon: "⭕️",
      status: "open",
      title: "Daily reading",
      content: "Finish reading Intro to UI/UX",
    },
  ],

  statusList: [
    {
      status: "open",
      icon: "⭕️",
      color: "#EB5A46",
    },
    {
      status: "in progress",
      icon: "🔆️",
      color: "#00C2E0",
    },
    {
      status: "in review",
      icon: "📝",
      color: "#C377E0",
    },
    {
      status: "done",
      icon: "✅",
      color: "#3981DE",
    },
  ],

  columnList: [
    {
      id: "column-1",
      title: "To Do",
      taskIdList: ["1", "2", "3", "4"],
    },
    {
      id: "column-2",
      title: "In Progress",
      taskIdList: [],
    },
    {
      id: "column-3",
      title: "Done",
      taskIdList: [],
    },
  ],

  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
