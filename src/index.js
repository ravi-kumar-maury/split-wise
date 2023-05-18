const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const usersRest = require('./api/users.rest')
const groupsRest = require('./api/groups.rest')
const expensesRest = require('./api/expenses.rest')
const getInsightsRest = require('./api/getInsights.rest')

app.use('/api/users', usersRest);
app.use('/api/groups', groupsRest);
app.use('/api/expenses', expensesRest);
app.use('/api/getInsights', getInsightsRest);


app.listen(port, () => {
  console.log(`Splitwise app listening on port ${port}`)
})