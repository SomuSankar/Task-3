var arr=[{
    name:"john doe",
    age:23,
    gender:"male"
    },{
    name:"doe",
    age:24,
    gender:"male"
    },{
    name:"bob",
    age:25,
    gender:"male"
    }];
    for(var i=0;i<arr.length;i++){
    console.log(arr[i].name+" "+arr[i].age+" "+arr[i].gender);
    }

    var student={
        name:"john doe",
        age:23,
        gender:"male",
        attendance:["mon","tue"]
        };
        for(var key in student){
        console.log(key,student[key]);
        }

        var age = ["23", "45" , "28"];
        for (var element of age){
            console.log(element);
        }
        var name = ["somu","deva","santhosh"];
            name.forEach(element=>
            console.log(element)
            );
