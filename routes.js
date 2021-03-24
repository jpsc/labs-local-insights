const faker = require('faker/locale/nl')

const makeRoute = function () {
  const city = faker.address.city().toLowerCase()
  return {
    route: `/amsterdam/${faker.helpers.slugify(city)}`,
    payload: {
      title: city,
    },
  }
}

const numberOfCities = 1
const routes = [
  {
    route: `/amsterdam/testing`,
    payload: {
      title: 'Testing city',
    },
  },
  {
    route: `/`,
    payload: {
      title: 'Testing city',
    },
  },
]

for (let i = 0; i < numberOfCities; i++) {
  routes.push(makeRoute())
}

module.exports = routes
