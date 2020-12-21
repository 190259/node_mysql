const db = reqiire('./lib/db');

const con = db.connect();

let sql = 'UPDATE users SET ? WHERE ?;;'
let params = [
    {email: 'test@yokohama.com'},
    {id: 1},
]
//UPDATE users SET email = 'xxxx' WHERE id = 'xx';
con.query(sql, params,(err , resules)=>{
    console.log(sql);
    console.log(results);
});
con.end();