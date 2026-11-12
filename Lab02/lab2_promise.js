/* 
Purpose: 
Create a new promise - API developer side
Fetch that promise - Web Developer side 
- async definition of the function that contains the fetch 
- await in front of the fetch
*/


// --------------------------- API Developer Side -------------

async function fetch_weather(){
    const promise_weather = new Promise((resolve,reject) =>{
        let isPaidMember = true 
        if(isPaidMember){
            setTimeout(() => {
                const weatherJSON = { Monday: "Sunny", Tuesday: "Rainy" }
                let weatherJSONstr = JSON.stringify(weatherJSON)
                resolve(weatherJSONstr)
            }, 2000)
        } else{
            reject("You must be a paid member to access!")
        }
    })

    let result = await promise_weather
    console.log(result)
}

fetch_weather()
let username = 'bob'
console.log(username)


// --------------------------- Web Developer Side ------------- 
