// Q 3
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
let tasksResult = tasks
    // Convert the task durations to hours, instead of minutes.
    .map((task) => {
        return Math.floor(task.duration / 60 * 100) / 100
    })
    // Filter out everything that took two hours or more
    .filter(duration => duration > 2)
    // Multiply each tasks' duration by our hourly rate
    .map(duration => duration * 30)
    // sum it all up.
    .reduce((sumDuration, duration) => [(+sumDuration) + (+duration)], 0)
    //Output a formatted Euro amount.
    .map(amount => '€' + amount.toFixed(2) )[0];
console.log(tasksResult);
