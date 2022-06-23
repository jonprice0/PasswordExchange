const router = require('express').Router();

const userRoutes = require('./user-routes');
const credentialsRoutes = require('./credentials-routes');
const siteRoutes = require('./site-routes');

router.use('/users', userRoutes);
router.use('/credentials', credentialsRoutes);
router.use('/sites', siteRoutes);

module.exports = router;