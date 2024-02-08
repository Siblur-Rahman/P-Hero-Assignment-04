function  password(obj){
    if(typeof obj == "object"){
        const keys = Object.keys(obj);
        const test =(obj.birthYear).toString().length;
        if(keys[0] == "name" && keys[1] == "birthYear" && keys[2] =="siteName" && keys.length === 3 && test == 4){
            const siteName = obj.siteName.toLocaleLowerCase()
            const capitalizeSiteName = siteName.charAt(0).toUpperCase()+siteName.slice(1)
            return capitalizeSiteName + "#" + obj.name + "@" + obj.birthYear;
        }else{
            return "invalid"
        }
        
    }else{
        return "please provide an object."
    }
}
    // { name: "kolimuddin" , birthYear: 199 , siteName: "google" }
    // { name: "rahat" , birthYear: 2002, siteName: "Facebook" }
    // { name: "rahat" , birthYear: 200, siteName: "Facebook" }
    // { name: "maisha" , birthYear: 2002 }
    // { name: “maisha” , birthYear: 2002 }
    // 12
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }));