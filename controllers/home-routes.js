const router = require('express').Router();
const sequelize = require('../config/connection');
const { CourierClient } = require('@trycourier/courier');
const { User } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/join', (req, res) => {
    res.render('join');
});

router.get('/pending', (req, res) => {
    User.findOne({
        where: {
            site_offered: 'Netflix'
        }
    })
    .then(dbUserData => {
        const pairedUser = dbUserData.get({ plain: true });
        
        const courier = CourierClient({ authorizationToken: "pk_prod_HVGXVRKKTAMH9XK6B4VCEY432Y0J" });
        const { requestId } = courier.send({
            message: {
                to: {
                    data: {
                        name: "jonprice0",
                    },
                    email: "jonprice0@gmail.com",
                },
                content: {
                    title: "Test",
                    body: pairedUser.site_offered.toString() + " username: " + pairedUser.site_username.toString()
                    + "\n" + pairedUser.site_offered.toString() + " password: " + pairedUser.site_password.toString()
                },
                routing: {
                    method: "single",
                    channels: ["email"],
                },
            },
        });
        res.render('pending');
    });
});

router.get('/bye', (req, res) => {
    res.render('bye');
});

module.exports = router;