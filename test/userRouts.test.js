const userRoute = require('../routes/userRoutes')
const { User } = require('../models')

test('User.findAll() should return all users' () => {
  const User = new User('Voldemort', 'Must not be named', 'voldymoldy@email.com', 'voldymoldy', 'VoldyGoneMoldy' )
  expect(User.findAll()).toBe('Voldemort', 'Must not be named', 'voldymoldy@email.com', 'voldymoldy', 'VoldyGoneMoldy')
})