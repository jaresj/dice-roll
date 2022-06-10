// Client-side js
document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#d4Roll").textContent = data.die4Roll
  document.querySelector("#d6Roll").textContent = data.normalRoll
  document.querySelector("#d8Roll").textContent = data.die8Roll
  document.querySelector("#d10Roll").textContent = data.d10Roll
  document.querySelector("#d12Roll").textContent = data.d12Roll
  document.querySelector("#d20Roll").textContent = data.d20Roll
}