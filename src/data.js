const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Wash dishes" },
    "task-2": { id: "task-2", content: "Learn dnd" },
    "task-3": { id: "task-3", content: "Practice english" },
    "task-4": { id: "task-4", content: "Do h/w" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default data;