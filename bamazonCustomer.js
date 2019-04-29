var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "doglover12",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  
  
});

// function which prompts the user for what action they should take


function queryAllItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
		var displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
      for (var i = 0; i < res.length; i++) {
        displayTable.push(
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity));  
    }
      console.log("-----------------------------------");
      askProductId();
    });
   
}

function askProductId() {
    
        inquirer
          .prompt([{
            name: "id",
            type: "input",
            message: "What is the ID of the product you're looking for?",
            filter: Number
          },
          {
            name: "Quantity",
            type: "input",
            message: "How many items do you want to purchase?",
            filter: Number
          },
        ]).then(function(answers){
            var quantityNeeded = answers.Quantity;
            var IDrequested = answers.id;
            order(IDrequested, quantityNeeded);
        });
    }
    function order(id, quantityNeeded){
        connection.query('SELECT * FROM products WHERE id = ' + id, function(err, res) {
            var newqty = parseInt(res[0].stock_quantity) - quantityNeeded
            if (err){console.log(err)};
            if(quantityNeeded <= res[0].stock_quantity){
                var total = res[0].price * quantityNeeded;
                console.log("Your order is in stock and costs: $" + total)
            }else{
              console.log("Insufficient quantity!")
            };
           updateProduct(id, newqty) 
            //queryAllItems();
        }
        )
    }
    function updateProduct(id, qty) {
      console.log("Updating all Bamazon quantities...\n");
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: qty
          },
          {
            id: id
          }
        ],
        function(err, res) {
          queryAllItems();
        }
      );
    
      // logs the actual query being run
      //console.log(query.sql);
    }

    queryAllItems();