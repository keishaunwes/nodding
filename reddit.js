const fs = require('fs')
const path = require('path')
const request = require('request')
let dataPaths = (path.join(__dirname,"./popularart.json"))
let arr = []

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) throw err;
JSON.parse(body).data.children.forEach(item => {
    arr.push(
        {
            title: item.data.title,
            author: item.data.author,
            url: item.data.url

        }
    )
    fs.writeFile(dataPaths, JSON.stringify(arr), (err) => {
        if (err) throw err
        console.log('got it')
    })
    
    fs.readFile('popularart.json', (err,data) => {
        if (err) throw err
        console.log('got it')
    })
    console.log(arr)
})

})
