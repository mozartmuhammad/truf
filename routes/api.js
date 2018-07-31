var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
    .get(function (req, res, next) {
        res.json({ message: 'hooray! welcome to our api!' });
    })
    .post(function (req, res, next) {

        var ress = 1 + 1;
        var obj = typeof req;
        res.json({ result: obj });
    });

router.route('/seasons')
    .get(function (req, res, next) {
        var result = [
            {
                id: 1,
                start_date: new Date(),
                end_date: new Date(),
                data: [
                    {
                        name: "mozart",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "reni",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "Ed",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "samuel",
                        match: 1,
                        point: 4,
                        average: 1.5
                    }
                ]
            },
            {
                id: 2,
                start_date: new Date(),
                end_date: new Date(),
                data: [
                    {
                        name: "mozart",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "reni",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "Ed",
                        match: 1,
                        point: 4,
                        average: 1.5
                    },
                    {
                        name: "samuel",
                        match: 1,
                        point: 4,
                        average: 1.5
                    }
                ]
            }];
        res.json(result);
    });

router.route('/seasons/:season_id')
    .get(function (req, res, next) {
        var id = req.params.season_id;
        var result = {
            id: id,
            start_date: new Date(),
            end_date: new Date(),
            data: [
                {
                    name: "mozart",
                    match: 1,
                    point: 4,
                    average: 1.5
                },
                {
                    name: "reni",
                    match: 1,
                    point: 4,
                    average: 1.5
                },
                {
                    name: "Ed",
                    match: 1,
                    point: 4,
                    average: 1.5
                },
                {
                    name: "samuel",
                    match: 1,
                    point: 4,
                    average: 1.5
                }
            ]
        };
        res.json(result);
    });


router.route('/individualgames/:individualgame_id')
    .get(function (req, res, next) {
        var id = req.params.individualgame_id;

        var result = {
            id: id,
            player1: "mozart",
            player2: "reni",
            player3: "ed",
            player4: "samuel",
            data: [
                {
                    player1_bid: 1,
                    player1_obtained: 1,
                    palyer1_point: 2,
                    player2_bid: 1,
                    player2_obtained: 1,
                    palyer1_point: 3,
                    player3_bid: 1,
                    player3_obtained: 1,
                    palyer1_point: 4,
                    player4_bid: 1,
                    player4_obtained: 1,
                    palyer1_point: -1,
                    card: "spade"
                },
                {
                    player1_bid: 1,
                    player1_obtained: 1,
                    palyer1_point: 2,
                    player2_bid: 1,
                    player2_obtained: 1,
                    palyer1_point: 3,
                    player3_bid: 1,
                    player3_obtained: 1,
                    palyer1_point: 4,
                    player4_bid: 1,
                    player4_obtained: 1,
                    palyer1_point: -1,
                    card: "club"
                }
            ]
        };
        res.json(result);
    })
    .post(function (req, res) {

    });

module.exports = router;
