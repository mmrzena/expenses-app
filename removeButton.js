function removeExpense(expenseId) {

  allExpenses = allExpenses.filter(function(expense) {
    return expenseId != expense.id;
  });

  localStorage.removeItem('allExpenses');
  updateData();
  renderExpenses();

};
