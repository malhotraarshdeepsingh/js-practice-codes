class TaskScheduler {
    constructor(concurrency) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }

    #getNextTask() {
        if (this.queue.length > 0 && this.running < this.concurrency) {
            const task = this.queue.shift();
            task();
        }
    }

    addTask(task) {
        return new Promise((resolve, reject) => {
            async function run() {
                this.running++;
                try {
                    const result = await task();
                    console.log(result);
                    resolve(result);
                } catch (error) {
                    console.log(error);
                    reject(error);
                } finally {
                    this.running--;
                    this.#getNextTask();
                }
            }
            if (this.running < this.concurrency) {
                run.call(this);
            } else {
                this.queue.push(run.bind(this));
            }
        });
    }
}

// Example usage:
const scheduler = new TaskScheduler(2);

const createTask = (time, id) => () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Task ${id} completed in ${time}ms`);
    }, time);
});

scheduler.addTask(createTask(1000, 1));
scheduler.addTask(createTask(500, 2));
scheduler.addTask(createTask(300, 3));
scheduler.addTask(createTask(400, 4));
scheduler.addTask(createTask(200, 5));

// Example output:
// Task 2 completed in 500ms
// Task 3 completed in 300ms
// Task 1 completed in 1000ms
// Task 5 completed in 200ms
// Task 4 completed in 400ms