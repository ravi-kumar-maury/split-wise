module.exports = {
    users : {
        id: {type: 'string'},
        username: {type: 'string'},
        email:    {type: 'string'},
        password: {type: 'string'},
    },
    friends:{
        id: {type: 'string'},
        user_id: {type: 'string'},
        friend_id: {type: 'string'},
        created_at:{type: 'dateTime'},
        updated_at:{type: 'dateTime'},
    },
    groups: { 
        id: {type: 'string'},
        group_name: {type: 'string'},
        created_by: {type: 'string'} ,
        // created_at: {type: 'dateTime'} ,
        // updated_at: {type: 'dateTime'},
    },
    user_groups: {
        id: {type: 'string'},
        user_id: {type: 'string'},
        group_id: {type: 'string'},
        create_at: {type: 'dateTime'}, 
        updated_at : {type: 'dateTime'},
    },
    expenses: {
        id: {type: 'string'},
        description: {type: 'string'},
        amount: {type: 'string'},
        paid_by: {type: 'string'},
        group_id: {type: 'string'},
        split_type: {type: 'string'},
        created_at: {type: 'dateTime'},
        updated_at : {type: 'dateTime'},
    },
    user_expenses: {
        id: {type: 'string'}, 
        user_id: {type: 'string'},
        friend_id:  {type:'string'},
        expense_id : {type: 'string'},
        amount_owe_by_friend: {type: 'string'},
        createat_at : {type: 'dateTime'},
        updated_at : {type: 'dateTime'},
    }
}