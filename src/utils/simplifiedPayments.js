function calculateSimplifiedPayments(Payments){
const simplifiedPayments = Payments.reduce((simplified, { friend_id, user_id, amount_owe_by_friend }) => {
    const existingEntry = simplified.find(
      entry => entry.friend_id === friend_id && entry.user_id === user_id
    );
    const existingReverseEntry = simplified.find(
        entry => entry.user_id === friend_id && entry.friend_id === user_id
    );
  
    if (existingEntry) {
      existingEntry.amount_owe_by_friend += amount_owe_by_friend;
    } 
    else if (existingReverseEntry){
        existingReverseEntry.amount_owe_by_friend -= amount_owe_by_friend;
    }
    else {
      simplified.push({ user_id, amount_owe_by_friend: parseFloat(amount_owe_by_friend).toFixed(2), friend_id });
    }
  
    return simplified;
  }, []);
  return simplifiedPayments
}
module.exports = calculateSimplifiedPayments