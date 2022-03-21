const express = require("express")
const bodyParser = require("body-parser")
const res = require("express/lib/response")
let ejs = require("ejs")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    const dayName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    const dayType = ["Enjoy your Weekend.", "Alas ! it's a work day."]

    for(var i = 0; i <=6; i++)
    {
        if(currentDay === i) {
            if(currentDay === 6 || currentDay === 0)
            {
                res.render("list", {kindOfDay: dayName[i]},{dayType: dayType[0]})
            } else {
                res.render("list", { data: { kindOfDay: dayName[i] , dayType: dayType[1] } } )
            }
        }
    }

})

app.listen(3000, () => {
    console.log("server running on port 3000")
})