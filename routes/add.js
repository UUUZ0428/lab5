var data = require("../data.json");

exports.addFriend = function(request, response) { 
    var newFriend = {
        "friends": [
            {
                "name":request.query.name,
                "description":request.query.description,
                "imageURL":"https://thispersondoesnotexist.com/image"
            }
        ]
    }
    console.log("hi");

    data.friends.push(newFriend);
    onsole.log("hi");

	response.render('index',data);
 }
