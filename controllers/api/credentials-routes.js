const router = require('express').Router();
const { User, Credentials, Site } = require('../../models');

router.get('/', (req, res) => {
    Credentials.findAll({
        attributes: [
            'id',
            'user_id',
            'site_id',
            'site_username',
            'site_password'
        ]
    })
    .then(dbCredentialsData => res.json(dbCredentialsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Credentials.create({
        user_id: req.body.user_id,
        site_id: req.body.site_id,
        site_username: req.body.site_username,
        site_password: req.body.site_password
    })
    .then(dbCredentialsData => console.log(dbCredentialsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Credentials.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCredentialsData => {
        if (!dbCredentialsData) {
            res.status(400).json({ message: 'No credentials found with that id'});
            return;
        }
        res.json(dbCredentialsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;