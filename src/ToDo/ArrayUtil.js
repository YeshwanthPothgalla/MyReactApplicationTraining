

function swapArrayElement(tasks, index, order) {
    if (order === 'UP') {
        let tempTasks = [...tasks];
        [tempTasks[index - 1], tempTasks[index]] = [tempTasks[index], tempTasks[index - 1]];
        return tempTasks;
    } else if (order === 'DOWN') {
        let tempTasks = [...tasks];
        [tempTasks[index + 1], tempTasks[index]] = [tempTasks[index], tempTasks[index + 1]];
        return tempTasks;
    }
    return tasks;
}

export default swapArrayElement;