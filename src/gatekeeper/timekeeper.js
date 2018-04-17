import fs from "fs"

const time = Date.now()

const structure = `export const time = ${time}`

const singleWrite = fs.writeFile('./src/gatekeeper/startTime.js', structure, (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})