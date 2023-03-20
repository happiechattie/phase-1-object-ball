function gameObject(){
    const gObject = {
        home : {
            teamName : "Brooklyn Nets",
            colors : "Black, White",
            players : {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,
                },
                "Reggie Evans" : {
                    number : 30,
                    shoe : 14,
                    points : 12,
                    rebounds : 12,
                    assists : 12,
                    steals : 12,
                    blocks : 12,
                    slamDunks : 7,
                },
                "Brook Lopez" : {
                    number : 11,
                    shoe : 17,
                    points : 17,
                    rebounds : 19,
                    assists : 10,
                    steals : 3,
                    blocks : 1, 
                    slamDunks : 15,
                },
                "Mason Plumee" : {
                    number : 1,
                    shoe : 19,
                    points : 26,
                    rebounds : 12,
                    assists : 6, 
                    steals : 3,
                    blocks : 1,
                    slamDunks : 15,
                },
                "Jason Terry" : {
                    number : 31,
                    shoe : 15,
                    points : 19,
                    rebounds : 2,
                    assists : 2,
                    steals : 4,
                    blocks : 11,
                    slamDunks : 1,
                },
            },
        },
        away : {
            teamName : "Charlotte Hornets",
            colors : "Turquoise, Purple",
            players : {
                "Jeff Adrien" : {
                    number : 4,
                    shoe : 18,
                    points : 10,
                    rebounds : 1,
                    assists : 1,
                    steals : 2,
                    blocks : 7,
                    slamDunks : 2,
                },
                "Bismak Biyombo" : {
                    number : 0,
                    shoe : 16,
                    points : 12,
                    rebounds : 4,
                    assists : 7,
                    steals : 7,
                    blocks : 15,
                    slamDunks : 10,
                },
                "DeSagna Diop" : {
                    number : 2,
                    shoe : 14,
                    points : 24,
                    rebounds : 12,
                    assists : 12,
                    steals : 4,
                    blocks : 5, 
                    slamDunks : 5,
                },
                "Ben Gordon" : {
                    number : 8,
                    shoe : 15,
                    points : 33,
                    rebounds : 3,
                    assists : 2, 
                    steals : 1,
                    blocks : 1,
                    slamDunks : 0
                },
                "Brendan Haywood" : {
                    number : 33,
                    shoe : 15,
                    points : 6,
                    rebounds : 12,
                    assists : 12,
                    steals : 22,
                    blocks : 5,
                    slamDunks : 12,
                }
            },
        },
    }
    return gObject;
}

console.log(gameObject());

/*
function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());
*/

function numPointsScored(name){
    const gO = gameObject();
    for (let gKey in gO){
        const teamO = gO[gKey];
        for (let player in teamO.players){
            if (player === name){
                return teamO["players"][player]["points"];
            }
        }
    }
}

function shoeSize(name){
    const gO = gameObject();
    for (let gKey in gO){
        const teamO = gO[gKey];
        for (let player in teamO.players){
            if (player === name){
                return teamO["players"][player]["shoe"];
            }
        }
    }
}

function getNum(name){
    const gO = gameObject();
    for (let gKey in gO){
        const teamO = gO[gKey];
        for (let player in teamO.players){
            if (player === name){
                return teamO["players"][player]["number"];
            }
        }
    }
}

function teamColors(name){
    const gO = gameObject();
    for (let gKey in gO){
        const teamO = gO[gKey];
            if (teamO["teamName"] === name){
                return teamO["colors"];
        }
    }
}

function playerNumbers(name){
    const gO = gameObject();
    const a = [];
    for (let gKey in gO){
        const teamO = gO[gKey];
            if (teamO["teamName"] === name){
                for (let player in teamO["players"]){
                    a.push(getNum(player));
                }
        }
    }
    return a;
}

function playerStats(name){
    const gO = gameObject();
    for (let gKey in gO){
        const teamO = gO[gKey];
        for (let player in teamO.players){
            if (player === name){
                return teamO["players"][player];
            }
        }
    }
}

function bigShoeRebounds(){
    const gO = gameObject();
    let a = 0;
    let b;
    let winner;
    for (let gKey in gO){
        const teamO = gO[gKey];
            for (let player in teamO["players"]){
                b = shoeSize(player);
                if (a < b) {
                    a = b;
                    winner = player;
                }
        }
    }
    return winner;
}