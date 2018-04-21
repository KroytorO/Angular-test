let path = require('path');
let fs = require('fs');

module.exports = function (app) {
    app.get('/app*', function (req, res) {
        res.sendFile(path.join(__base, '/app/ngApp/dist/index.html'));
    });



// получение списка данных
    app.get('/api/json/getUsers', function(req, res){

        var content = fs.readFileSync(path.join(__base,'/back_end/data/products.json'));
        var users = JSON.parse(content);
        res.send(users);
    });

    // app.post('lghjnbjds', function (req,res) {
    //     if (req.body.email &&
    //         req.body.username &&
    //         req.body.password &&
    //         req.body.passwordConf) {
    //         var userData = {
    //             email: req.body.email,
    //             username: req.body.username,
    //             password: req.body.password,
    //             passwordConf: req.body.passwordConf,
    //         }
    //         //use schema.create to insert data into the db
    //         User.create(userData, function (err, user) {
    //             if (err) {
    //                 return next(err)
    //             } else {
    //                 return res.redirect('/');
    //             }
    //         });
    //     }
    // });

    app.get('/api/json/getUserByEmail',function (req,res) {

        var content = fs.readFileSync(path.join(__base,'/back_end/data/db.json'));
        var userEmail = JSON.parse(content);
        res.send(userEmail);

    })

    // получение одного пользователя по id
    // app.get("/api/json/getUserByEmail", function(req, res){
    //
    //     var id = req.params.id; // получаем id
    //     var content = fs.readFileSync(path.join(__base,'/back_end/data/db.json'));
    //     var users = JSON.parse(content);
    //     var user = null;
    //     // находим в массиве пользователя по id
    //     for(var i=0; i<users.length; i++){
    //         if(users[i].id==id){
    //             user = users[i];
    //             break;
    //         }
    //     }
    //     // отправляем пользователя
    //     if(user){
    //         res.send(user);
    //     }
    //     else{
    //         res.status(404).send();
    //     }
    // });

// получение отправленных данных
//     app.post("/api/users", jsonParser, function (req, res) {
//
//         if(!req.body) return res.sendStatus(400);
//
//         var userName = req.body.name;
//         var userAge = req.body.age;
//         var user = {name: userName, age: userAge};
//
//         var data = fs.readFileSync("users.json", "utf8");
//         var users = JSON.parse(data);
//
//         // находим максимальный id
//         var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
//         // увеличиваем его на единицу
//         user.id = id+1;
//         // добавляем пользователя в массив
//         users.push(user);
//         var data = JSON.stringify(users);
//         // перезаписываем файл с новыми данными
//         fs.writeFileSync("users.json", data);
//         res.send(user);
//     });



  /***  app.get('/api/service-poc', async (req, res) => {
        try {
            let data = await utils.getPoc(req.query);
            res.send({status: "OK", data: data});
        } catch (error) {
            res.send(error);
        }
    });
     */
};