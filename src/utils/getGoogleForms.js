const { googleFormsToJson } = require('react-google-forms-hooks')
const fs = require('fs')
const path = require('path')

const saveJsonToFile = (filename, json) => {
  const filePath = path.resolve(__dirname, filename)
  fs.writeFile(filePath, JSON.stringify(json), 'utf8', function (err) {
    if (err) throw err
  })
}

const generate = async (url, name) => {
  const result = await googleFormsToJson(url);
  saveJsonToFile(name+'.json', result)
}

generate(
  'https://docs.google.com/forms/d/e/1FAIpQLScfbcwtpkwSph6xGc0qAmLVgwQRY5_BouLrgvdDhiXTmDZcxg/viewform',
  'bussolaForm'
);

generate(
  'https://docs.google.com/forms/d/e/1FAIpQLSc4L7PyKgGy2W578Eaiam85MzpZDlP8rTV7R922B012ZNbihw/viewform',
  'pesquisaForm'
);