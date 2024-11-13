<template>
    <div class="container">
        <h1>Lista de Tareas</h1>
        <button class="load-btn" @click="fetchTasks">Cargar Tareas</button>
        <div v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <div class="task-info">
                    <h3 :class="{ completed: task.completed }">{{ task.todo }}</h3>
                    <span class="task-status" :class="{ 'pending': !task.completed, 'completed': task.completed }">
                        {{ task.completed ? 'Completada' : 'Pendiente' }}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="complete-btn" @click="toggleTaskCompletion(task)">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button class="delete-btn" @click="deleteTask(task)">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [],
            newTask: { todo: "Nueva tarea", completed: false },
        };
    },
    methods: {
        async fetchTasks() {
            try {
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                this.tasks = data.todos;
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
            }
        },
        async addTask() {
            try {
                const response = await fetch("https://dummyjson.com/todos/add", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.newTask),
                });
                const data = await response.json();
                this.tasks.push(data);
            } catch (error) {
                console.error("Error al añadir la tarea:", error);
            }
        },
        async toggleTaskCompletion(task) {
            try {
                const response = await fetch(`https://dummyjson.com/todos/${task.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ completed: !task.completed }),
                });
                const data = await response.json();
                task.completed = data.completed;
            } catch (error) {
                console.error("Error al actualizar la tarea:", error);
            }
        },
        async deleteTask(task) {
            try {
                await fetch(`https://dummyjson.com/todos/${task.id}`, {
                    method: "DELETE",
                });
                this.tasks = this.tasks.filter((t) => t.id !== task.id);
            } catch (error) {
                console.error("Error al eliminar la tarea:", error);
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

h1 {
    font-size: 3em;
    color: rgb(0, 0, 0);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

button {
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 1em;
}

.load-btn {
    background-color: #a24fe6;
    color: rgb(0, 0, 0);
}

.task-list {
    margin-top: 20px;
}

.task-item {
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-info {
    flex-grow: 1;
}

.task-actions {
    display: flex;
    gap: 10px;
}

h3 {
    color: #333; 
}

h3.completed {
    text-decoration: line-through; 
}

.task-status {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 10px;
}

.pending {
    background-color: rgb(230, 169, 58); 
    color: white;
}

.completed {
    background-color: rgb(219, 78, 212); 
    color: rgb(0, 0, 0);
}

.complete-btn {
    background-color: #e43c7c; 
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.complete-btn:hover {
    background-color: #e944c5; 
}

.delete-btn {
    background-color: #e20017; /* Rojo */
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.delete-btn:hover {
    background-color: #be535e; 
}
</style>