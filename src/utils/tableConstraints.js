module.exports = {
    users : {
        id: {type: 'string'},
        username: {type: 'string'},
        email:    {type: 'string'},
        password: {type: 'string'},
    },
    Friend:{
        id: {type: 'string'},
        userId: {type: 'string'},
        friendId: {type: 'string'},
        created_at:{type: 'dateTime'},
        updated_at:{type: 'dateTime'},
    },
    Group: { 
        id: {type: 'string'},
        groupName: {type: 'string'},
        createdBy: {type: 'string'} ,
        created_at: {type: 'dateTime'} ,
        updated_at: {type: 'dateTime'},
    },
    User_Group: {
        id: {type: 'string'},
        userId: {type: 'string'},
        groupId: {type: 'string'},
        create_at: {type: 'dateTime'}, 
        updated_at : {type: 'dateTime'},
    },
    Expense: {
        id: {type: 'string'},
        description: {type: 'string'},
        amount: {type: 'string'},
        paidBy: {type: 'string'},
        groupId: {type: 'string'},
        splitType: {type: 'string'},
        created_at: {type: 'dateTime'},
        updated_at : {type: 'dateTime'},
    },
    User_Expense: {
        id: {type: 'string'}, 
        userId: {type: 'string'},
        friendId:  {type:'string'},
        expenseId : {type: 'string'},
        amountOweByFriend: {type: 'string'},
        createat_at : {type: 'dateTime'},
        updated_at : {type: 'dateTime'},
    }
}