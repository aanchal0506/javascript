const accoundId = 12345;
let accountEmail="aanchal@gmail.com"
var accountPassword="123456"
accountCity="Jaipur"
let accountState

//accountId=2 -> this is a constant variable hence not allowed
console.log(accoundId);

accountEmail="aaradhya@gmail.com"
accountPassword="123455555"
accountCity="goa"
console.table([accountEmail, accountPassword, accountCity, accoundId,accountState]);

/* 
Prefer not to use var
beacuse of issue of block scope(const,let) and functional scope(var)
*/
/*
OUTPUT:
┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 'aaradhya@gmail.com' │
│ 1       │ '123455555'          │
│ 2       │ 'goa'                │
│ 3       │ 12345                │
│ 4       │ undefined            │
└─────────┴──────────────────────┘
*/