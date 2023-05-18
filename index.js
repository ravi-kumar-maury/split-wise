const {BalanceSheet, Expense, Group, User } = require('./src/models');

    const alice = new User( "1", "Alice");
    const bob = new User("2","Bob");
    const raju = new User("3","Raju");
    const lunchGroup = new Group("1","lunchGroup", "Alice");
    const expense1 = new Expense("1", "Lunch", 100, "Alice", [ {"Alice": 1}, {"Bob": 1},{"Raju":1} ], "equal");
    lunchGroup.addExpense(expense1);
    const expense2 = new Expense("Dinner", 200,"Bob" , [{ "Alice": 0.4 } , {"Bob": 0.3 }, {"Raju":0.3}], "percentage");
    lunchGroup.addExpense(expense2);
    let aliceBalaceSheet = alice.getBalanceSheet()
    console.log(aliceBalaceSheet);
    let splits = [ {"Alice": 100}, {"Bob": 50},{"Raju":50} ]
    console.log('ok')
    aliceBalaceSheet.updateUserExpenseBalanceSheet(alice, splits, 200)
    
    console.log('new balanceSheet', alice.getBalanceSheet())


