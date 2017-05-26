(function (win, doc) {
    'use strict';

    var app = (function taskController() {

        var $newTaskForm = doc.querySelector('[data-js="new-task-form"]'),
            $newTaskTitle = doc.querySelector('[data-js="new-task-title"]'),
            $newTaskText = doc.querySelector('[data-js="new-task-text"]'),
            $newsTaskTitleHelper = doc.querySelector('[data-js="task-title-helper"]'),
            $newsTaskTextHelper = doc.querySelector('[data-js="task-text-helper"]'),
            $DataStorage = [];

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
                app.registerTask();
            },
            registerTask: function registerTask() {
                console.log($newTaskTitle.value);
                console.log($newTaskText.value);
                /*if( app.validateFormTask() ){
                    return;*/
                if (!app.validateFormTask())
                    return;

                var $newTaskObject = {
                    id: Date.now(),
                    title: $newTaskTitle.value,
                    text: $newTaskText.value
                }
                $DataStorage.push($newTaskObject);
                console.log($DataStorage);
                app.clearForm();

            },

            validateFormTask: function validateFormTask() {
                if ($newTaskTitle.value == '') {
                    $newsTaskTitleHelper.textContent = 'preencha o título.';
                    return false;
                }
                if ($newTaskTitle.value == '' && $newTaskText.value != '') {
                    $newsTaskTitleHelper.textContent = 'preencha o título.';
                    $newsTaskTextHelper.textContent = '';
                    return false;
                }

                if ($newTaskText.value == '') {
                    $newsTaskTextHelper.textContent = 'preencha a sua tarefa.';
                    return false;
                }

                if ($newTaskText.value == '' && $newTaskTitle.value != '') {
                    $newsTaskTitleHelper.textContent = '';
                    $newsTaskTextHelper.textContent = 'preencha a sua tarefa.';
                    return false;
                }

                $newsTaskTitleHelper.textContent = '';
                $newsTaskTextHelper.textContent = '';
                return true;

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