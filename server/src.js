const path = require('path');
const fs = require('fs');
let dataPath = (path.join(__dirname,"../chirps.json"))

const chirps =[{
username: "James",
message:'sup'
},{
    username: "Jes",
    message:'sup'
    },{
        username: "ames",
        message:'sup'
        },{
            username: "Jmes",
            message:'sup'
            },{
                username: "Jams",
                message:'sup'
                },{
                    username: "Jame",
                    message:'sup'
                    },
]




fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err
    console.log('got it')
})

fs.readFile('chirps.json', (err,data) => {
    if (err) throw err
    console.log('got it')
})

chirps.forEach(chirp => console.log(chirps))

