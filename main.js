(function (win, doc) {

    var app = (function taskController() {

        var $newTaskForm = doc.querySelector('[data-js="new-task-form"]'),
            $newTaskTitle = doc.querySelector('[data-js="new-task-title"]'),
            $newTaskText = doc.querySelector('[data-js="new-task-text"]');

        return {
            init: function () {
                this.initEvents();
                this.verifyInputs();
            },
            
            initEvents: function initEvents() {
                $newTaskForm.addEventListener('submit', this.handleSubmit, false);
            },
            
            handleSubmit: function handleSubmit(event){
                event.preventDefault();
            },

            verifyInputs: function verifyInputs() {
                $newTaskTitle.addEventListener('blur', function () {
                    if (this.value !== "") {
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