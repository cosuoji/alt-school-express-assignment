const express = require('express')
const authorRouter = express.Router()

const authors = [
    {
        name: "Chinua Achebe", 
        id:1, 
        born: 2024
    }
]


authorRouter.get("/", (req, res)=>{
    res.json(authors)
})



authorRouter.get("/:id", (req, res)=>{
    const id = req.params.id
    const author = authors.find(author => author.id == id)

    if(!author){
        res.status(404).end("author mot found")
        return
    }

    res.json(author)
})

authorRouter.post("/", (req, res)=>{
        let id = authors[authors.length - 1].id
        let newId = id + 1
        let newBook = req.body
        newBook.id = newId
        authors.push(newBook)
        console.log(newBook)
        res.json(authors)
})

authorRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const author = req.body
    const index = authors.findIndex(author => author.id == id)

    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors[index] = author
    res.json(author)
})

authorRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const index = authors.findIndex(author => author.id == id)
    if (index == -1) {
        res.status(404).end("author not found")
        return
    }

    authors.splice(index, 1)
    res.json(authors)
})


module.exports = authorRouter;