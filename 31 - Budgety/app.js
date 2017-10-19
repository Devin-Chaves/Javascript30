var budgetController = (function() {
  // Some code
})();

var UIController = (function() {
  // Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // Get the field input data
    // Add item to budget controller
    // Add the item to UI
    // Calculate the budget
    // Display the budgetw
    console.log('It works');
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
