const router = require('express').Router();
const { User, Credentials, Site } = require('../../models');

router.get('/', (req, res) => {
    Site.findAll({
        attributes: [
            'id',
            'site_name',
        ],
        include: [
            {
                model: Credentials,
                attributes: ['id', 'user_id', 'site_id', 'site_username', 'site_password'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbSiteData => res.json(dbSiteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Site.create({
        site_name: req.body.site_name,
    })
    .then(dbSiteData => res.json(dbSiteData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Site.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSiteData => {
        if (!dbSiteData) {
            res.status(400).json({ message: 'No site found with that id'});
            return;
        }
        res.json(dbSiteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;