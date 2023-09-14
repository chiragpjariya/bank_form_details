let database = [];
let name = document.getElementById('name');
let minimumamount = document.getElementById('minimumamount');
let deposite = document.getElementById('deposite');
let widthdraw = document.getElementById('widthdraw');
let checkbox = document.getElementById('checkbox');
let password = document.getElementById('password');
let submit = document.getElementById('btn');


class bank {
    constructor(name, minimumamounts,password) {
        this.name1 = name;
        this.firstamount = minimumamounts;
        this.password=password;
    }
    deposite(amount) {
        this.firstamount += amount;
    }
    withdraw(amount) {
        this.firstamount -= amount;
    }
    
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = new bank(name.value, parseInt(minimumamount.value));
    obj.deposite(parseInt(deposite.value));
    obj.withdraw(parseInt(widthdraw.value));

    change=()=>checkbox.checked ? password.type = 'text' : password.type = 'password';
    
    let password_create=Math.floor(Math.random()*100000*998945124)
    password.value=password_create;
    obj.password=password_create;
    database.push(obj);
    console.log(database)
})
