function sayHello () {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(console.log("Hello!"))
    },300)
  })
}


async function executeHello(){
 await sayHello();
 console.log("Final do código")
 
 //vai o resto de aplicação
}

executeHello()
