module.exports = async function ({ res }, req) {
  await setTimeout(() => {}, 0)
  return {
    body: 'Hi from API',
  }
}
