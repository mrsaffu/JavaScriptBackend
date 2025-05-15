let express = require('express')
let mongoose = require("mongoose")
let cors = require('cors')

let app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/practiceData").then(() => {
    console.log("mongoDb connect SucessFully");
})

let mySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, mobile: {
        type: String,
        require: true
    }, password: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

})

let user = new mongoose.model('user', mySchema)



app.get('/',(req,res)=>{
    res.send("server running ")
})

app.get("/users", async (req, res) => {
    try {
      let usersData = await user.find()
      res.status(200).json({message:"fetch sucess fully ", data:usersData})
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log("error on get ",error);

    }
})
app.post('/adduser', async (req, res) => {
    try {
        const { name, mobile, password, content } = req.body;
        let newUser = new user({ name, mobile, password, content })

        let savedUser = await newUser.save()
        res.status(201).json({ message: "user saved SucessFully ", user: savedUser })

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log("dataa is not saved some thig error in post");
    }

})

app.listen(5000, (error) => {
    if (error) throw error;
    console.log("server is running ");
})