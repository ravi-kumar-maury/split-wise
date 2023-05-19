// Import the necessary modules and functions
const calculateSimplifiedPayments  = require('../src/utils/simplifiedPayments');
const _ = require('lodash')


// Unit tests for calculateSimplifiedPayments function
describe('calculate simplyfied payment', () => {
  it('should return the correct simplified owe or getback for a given list of expenses', () => {
    const expenses = [
    {user_id: 17, username: 'shaman',amount_owe_by_friend: '166.67', friend_id: 18},
    {user_id: 17, username: 'shaman',amount_owe_by_friend: '166.67', friend_id: 19},
    {user_id: 19, username: 'neha', amount_owe_by_friend: '200.00', friend_id: 18},
    {user_id: 19, username: 'neha', amount_owe_by_friend: '200.00', friend_id: 17},
    {user_id: 18, username: 'ravi', amount_owe_by_friend: '166.67', friend_id: 17},
    {user_id: 18, username: 'ravi', amount_owe_by_friend: '166.67', friend_id: 19}
    ];

    const simplifiedDebts = _.map(calculateSimplifiedPayments(expenses), (each)=>{
        return { ...each, amount_owe_by_friend : parseFloat(each.amount_owe_by_friend).toFixed(2)};}
    );

    expect(simplifiedDebts).toEqual([
        
            {
                "user_id": 17,
                "amount_owe_by_friend": "0.00",
                "friend_id": 18
            },
            {
                "user_id": 17,
                "amount_owe_by_friend": "-33.33",
                "friend_id": 19
            },
            {
                "user_id": 19,
                "amount_owe_by_friend": "33.33",
                "friend_id": 18
            }
    ]);
  });

  it('should return an empty array for an empty list of expenses', () => {
    const expenses = [];

    const simplifiedDebts = calculateSimplifiedPayments(expenses);

    expect(simplifiedDebts).toEqual([]);
  });
});
