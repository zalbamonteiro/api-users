function sayHello () {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(console.log("Hello!"))
    },300)
  })
  
}


async function executeHellow(){
 await sayHello();
 console.log("Final do código")
}

executeHellow()