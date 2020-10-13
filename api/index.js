import express from 'express'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
    req.session.authUser = { username: req.body.username, room: req.body.room }
    return res.json({ username: req.body.username, room: req.body.room })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
    delete req.session.authUser
    res.json({ ok: true })
})

// Export the server middleware
export default {
    path: '/api',
    handler: router
}
