var copyObject = function (target){
    var result={};
    for(var prop in target){
        result[prop]=target[prop];
    }
    return result;
}

var user = {
    name:'seonga',
    gender : 'female'
};

var user2 = copyObject(user);
user2.name= 'aseonga';
if(user !== user2){
    console.log('유저 정보가 바뀌었습니다.')
}
console.log(user.name , user2.name);
console.log(user === user2);