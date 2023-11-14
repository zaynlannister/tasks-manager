const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Wash dishes" },
    "task-2": { id: "task-2", content: "Learn dnd" },
    "task-3": { id: "task-3", content: "Practice english" },
    "task-4": { id: "task-4", content: "Do h/w" },
    "task-5": { id: "task-5", content: "Walk 30 min" },
    "task-6": { id: "task-6", content: "Clean my room" },
    "task-7": { id: "task-7", content: "Listen to music" },
    "task-8": { id: "task-8", content: "Feed my cat" },
    "task-9": { id: "task-9", content: "Do shopping" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4", "task-9"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      tasksIds: ["task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      tasksIds: ["task-7", "task-8"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default data;
