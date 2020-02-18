
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {    //variables
            tasks: [
                { name: "Chop Wood", isCompleted: false },
                { name: "Sweep Leaves", isCompleted: true },
                { name: "Deafet the Ork King", isCompleted: false },
            ],
            newTask: ""
        },
        methods: {                                 //functions 

            saveNewTask: function () {
                this.tasks.push({
                    name: this.newTask,
                    isCompleted: false
                });
                this.newTask = '';
            },
            doTask: function (index) {
                this.tasks[index].isCompleted = true;
            }

        }
    });
});
