const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { TonClient } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')
const { initSettings } = require('everscale-did-sdk-radiance')

const { create } = require('./src/create')
const { auth, login } = require('./src/auth')

const context = require('./typesParameters.json')

const app = express()

var session = {}


app.use(bodyParser.json())

app.post("/auth", cors(), async (req, res) => {
    var did = req.body.did

    var status

    try {
        status = await auth(did)
    } catch(er) {
        status = er
    }

    if(status.status) {
        session[did] = {
            value: status.value,
            lifetime: new Date().getTime() + 900
        }

        res.append("Content-Type", "text/plain")
        res.statusCode(200).send(status.value)
    } else {
        res.append("Content-Type", "text/plain")
        res.statusCode(400).send(status.value)
    }
})

app.post("/auth/login", cors(), async (req, res) => {
    var did = req.body.did
    var signature = req.body.signature
    res.append("Content-Type", "text/plain")
    if(session[did] != undefined) {
        if(session[did].lifetime > new Date().getTime()) {
            var status

            try {
                status = await login(did, signature, session[did].value)
                if(status) {
                    res.statusCode(200).send("OK")
                } else {
                    res.statusCode(401).send("Error: Authentication error!")
                }
            } catch(er) {
                res.statusCode(500)
            }
        } else {
            res.statusCode(401).send("Error: The lifetime has expired!")
        }
    } else {
        res.statusCode(401).send("Error: Authentication error!")
    }
})


app.post("/create", cors(), async (req, res) => {
    if(session[req.body.did] != undefined) {
        if(session[req.body.did].lifetime > new Date().getTime()) {
            var status

            try {
                status = await login(req.body.did, req.body.signature, session[req.body.did].value)
                if(status) {
                    
                    var vc = await create(req.body.did, req.body.holder)

                    res.append("Content-Type", "application/json")
                    res.statusCode(200).send(JSON.stringify(vc))
                } else {
                    res.statusCode(401)
                }
            } catch(er) {
                res.statusCode(500)
            }
        } else {
            es.statusCode(401)
        }
    } else {
        res.statusCode(401)
    }
})


app.get("/context/myContext.json", async (req, res) => {
    res.append("Content-Type", "application/json")
    res.send(JSON.stringify(context, null, 2))
})





app.listen(3000, () => {
    console.log("Server start!")
    initSettings("mainNet", libNode)
})

