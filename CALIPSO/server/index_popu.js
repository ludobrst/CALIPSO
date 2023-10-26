const fs = require('fs')
const path = require('path')
const esConnection = require('./connection')
/** Clear ES index, parse and index all files from the books directory */
async function readAndInsertBooks () {
    await esConnection.checkConnection()
  
    try {
      // Clear previous ES index
      await esConnection.resetIndex()

    } catch (err) {
      console.error(err)
    }
  }
  
  readAndInsertBooks()