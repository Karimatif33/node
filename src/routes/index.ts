import { Express, Request, Response } from "express";
import {createShortUrl, handelRedirect, getAnalytics} from '../controller/shortUrlController'
import validate from '../middleware/validateResourse'
import shortUrlSchema from '../Schemas/createShortUrl.schema'


function routes(app: Express){
    app.get("/healthcheck", (req: Request, res: Response) => {
        return res.send("App Is Healthy")
      });
      app.post('/api/url',validate(shortUrlSchema), createShortUrl)
      app.get('/:shortId', handelRedirect)
      app.get('/api/analytics', getAnalytics)

}
export default routes 