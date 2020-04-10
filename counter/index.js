//document.querySelector('.btn').textContent = 0
let counter = 0
document.querySelector('.btn').addEventListener('click',  () => {
    counter++
    document.querySelector('.btn').textContent = counter
})

//let counter = 0
//let onClick = () => {
  //  counter++
   // document.querySelector('.retVal').textContent = counter
//}
