import { Router } from 'express'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /update-site Create update site
 * @apiName CreateUpdateSite
 * @apiGroup UpdateSite
 * @apiSuccess {Object} updateSite Update site's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Update site not found.
 */
router.post('/',
  create)

export default router
