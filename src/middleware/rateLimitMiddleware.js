import { RateLimiterMemory } from "rate-limiter-flexible"

const rateLimiter = new RateLimiterMemory({
    points: 5, // 5 requests per 1 minute
    duration: 1 // per minute
})

const rateLimitMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
    .then(()=>{
        next()
    })
    .catch(()=>{
        res.status(429).json({
            message: "Too many requests"
        })
    })
}

export default rateLimitMiddleware