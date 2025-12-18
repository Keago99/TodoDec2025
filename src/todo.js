

function createTodo(title, description, dueDate, priority){

    const ID = crypto.randomUUID();

    const getID = () => ID;

    const getTitle = () => title;
    const setTitle = (newTitle) => {
        newTitle = title;
    };

    const getDescription = () => description;
    const setDescription = (newDescription) => {
        newDescription = description
    };

    const getDueDate = () => dueDate;
    const setDueDate = (newDate) => {
        newDate = dueDate;
    };

    const getPriority = () => priority;
    const setPriority = (newPriority) => {
        newPriority = priority;
    }



    return { getTitle, setTitle, getDescription, setDescription, getPriority, setPriority, getID};
};