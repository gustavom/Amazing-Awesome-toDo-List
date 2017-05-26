(function (win, doc) {

    var app = (function taskController() {

        var $newTaskForm = doc.querySelector('[data-js="new-task-form"]'),
            $newTaskTitle = doc.querySelector('[data-js="new-task-title"]'),
            $newTaskText = doc.querySelector('[data-js="new-task-text"]');

        return {
            init: function () {
                this.verifyInputs();
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
            },
        }
    })();

    app.init();

})(window, document);