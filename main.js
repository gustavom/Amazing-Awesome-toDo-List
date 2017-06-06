(function (win, doc) {
    'use strict';

    var app = (function taskController() {

        var $newTaskForm = doc.querySelector('[data-js="new-task-form"]'),
            $newTaskTitle = doc.querySelector('[data-js="new-task-title"]'),
            $newTaskText = doc.querySelector('[data-js="new-task-text"]'),
            $newsTaskTitleHelper = doc.querySelector('[data-js="task-title-helper"]'),
            $newsTaskTextHelper = doc.querySelector('[data-js="task-text-helper"]'),
            $DataStorage = [],
            $appContainer = doc.querySelector('[data-js="app-container"]'),
            $tasksCollumn = doc.createElement('div');

        return {
            init: function () {
                this.initEvents();
                this.verifyInputs();
            },

            initEvents: function initEvents() {
                $newTaskForm.addEventListener('submit', this.handleSubmit, false);
            },

            handleSubmit: function handleSubmit(event) {
                event.preventDefault();
                app.clearTaskCollumn();
                app.registerTask();
            },
            registerTask: function registerTask() {
                if (!app.validateFormTask())
                    return;

                var $newTaskObject = {
                    id: Date.now(),
                    title: $newTaskTitle.value,
                    text: $newTaskText.value
                }
                $DataStorage.push($newTaskObject);
                console.log(JSON.stringify($DataStorage));
                app.clearForm();
                app.createTaskCollumn();
            },

            validateFormTask: function validateFormTask() {
                if ($newTaskTitle.value == '') {
                    $newsTaskTitleHelper.textContent = 'preencha o título.';
                    return false;
                }

                if ($newTaskText.value == '') {
                    $newsTaskTextHelper.textContent = 'preencha a sua tarefa.';
                    return false;
                }

                $newsTaskTitleHelper.textContent = '';
                $newsTaskTextHelper.textContent = '';
                return true;

            },

            createTaskCollumn: function createTaskCollumn() {
                console.log('criando');
                $tasksCollumn.classList.add('app-collumn')
                $tasksCollumn.classList.add('order-2')
                $tasksCollumn.classList.add('tasks-items-container')
                $appContainer.prepend($tasksCollumn);
                app.getTaskList();
            },

            createTaskItem: function createTaskItem(array, index) {
                var $fragment = document.createDocumentFragment(),
                    $taskItemBox = doc.createElement('div'),
                    $taskItemBoxTitle = doc.createElement('div'),
                    $taskItemBoxText = doc.createElement('div');

                $taskItemBox.classList.add('task-box');
                $taskItemBoxTitle.classList.add('title');
                $taskItemBoxText.classList.add('text');

                $taskItemBoxTitle.textContent = array[index].title;
                $taskItemBoxText.textContent = array[index].text;

                $taskItemBox.appendChild($taskItemBoxTitle);
                $taskItemBox.appendChild($taskItemBoxText);
                $taskItemBox.setAttribute('id', array[index].id);
                
                return $fragment.appendChild($taskItemBox); 
            },
            
            clearTaskCollumn: function clearTaskCollumn(){
                $tasksCollumn.innerHTML = '';
            },

            getTaskList: function getTaskList() {
                var i = 0;

                for (var i in $DataStorage) {
                    $tasksCollumn.appendChild(app.createTaskItem($DataStorage, i));
                };
            },

            clearForm: function clearForm() {
                $newTaskTitle.value = '';
                $newTaskText.value = '';
                $newTaskTitle.blur();
                $newTaskTitle.parentNode.classList.remove('active');
                $newTaskText.blur();
                $newTaskText.parentNode.classList.remove('active');
            },

            verifyInputs: function verifyInputs() {
                $newTaskTitle.addEventListener('blur', function () {
                    if (this.value !== '') {
                        this.parentNode.classList.add('active');
                    } else {
                        this.parentNode.classList.remove('active');
                    }
                }, false);

                $newTaskText.addEventListener('blur', function () {
                    if (this.value !== "") {
                        this.parentNode.classList.add('active');
                    } else {
                        this.parentNode.classList.remove('active');
                    }
                }, false);
            }
        }
    })();

    app.init();

})(window, document);

// https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
// https://zenorocha.com/html5-local-storage/
//https://www.youtube.com/watch?v=BfL3pprhnms - service worker
//https://www.youtube.com/watch?v=zPYzW0xIjqA - load js

//http://blog.caelum.com.br/webstorage-persistencia-no-front-end/


//https://github.com/henryaraujo/LSLib
//https://www.html5rocks.com/en/tutorials/offline/storage/
