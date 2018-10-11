// BUDGET CONTROLLER
var budgerController = (function () {




})();







// UI CONTROLLER
var UIController = (function () {

    //some code
})();




// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. get the field input data

        // 2. add the item to the buget controller

        // 3. add the new item to the UI

        // 4. calculate the budget

        // 5. Display the budget on the UI

        console.log('it works');
    };

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);


    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgerController, UIController);