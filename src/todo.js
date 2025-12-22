

function createTodo(title, description, dueDate, priority, id = null){

    const ID =  id || crypto.randomUUID();

    const getID = () => ID;

    const getTitle = () => title;
    const setTitle = (newTitle) => {
        title = Newtitle;
    };

    const getDescription = () => description;
    const setDescription = (newDescription) => {
        description = newDescription;
    };

    const getDueDate = () => dueDate;
    const setDueDate = (newDate) => {
        dueDate = newDate;
    };

    const getPriority = () => priority;
    const setPriority = (newPriority) => {
        priority = newPriority;
    }



    return { getTitle, setTitle, getDescription, setDescription, getPriority, setPriority, getID, getDueDate, setDueDate};
};

export { createTodo };