/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "X": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1 - oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!
*/

const { createApp } = Vue;

createApp({
    data() {
        return {

            newTask: "",

            todoList: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Studiare Vue.js",
                    done: false
                },

                {
                    text: "Fare l'esercizio di matematica",
                    done: true
                },

                {
                    text: "Pulire la casa",
                    done: false
                },

                {
                    text: "Chiamare mamma",
                    done: true
                },

                {
                    text: "Andare in palestra",
                    done: false
                },

                {
                    text: "Scrivere report per lavoro",
                    done: false
                },

                {
                    text: "Leggere un libro",
                    done: true
                },

                {
                    text: "Preparare la cena",
                    done: false
                },

                {
                    text: "Pianificare il viaggio",
                    done: false
                }
            ],

        }
    },

    methods: {

        deleteTask(taskIndex) {
            // elimino dall'array todoList l'elemento che corrisponde all'indice riportato nel parametro

            this.todoList.splice(taskIndex, 1);

        },

        addTask() {


            // creo un nuovo oggetto per il nuovo task
            const newTask = { text: this.newTask, done: false };

            // aggiungo il nuovo oggetto all'array todoList
            this.todoList.push(newTask);

            // resetto il campo per inserire nuovi task
            this.newTask = '';

        },
    },

}).mount("#app");