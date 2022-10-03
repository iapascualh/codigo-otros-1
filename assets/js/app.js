const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// aqui declaramos correctamente la clase poniendo un (.) antes del nombre
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');//aqui declaramos de forma correcta la clase cambiando (#) por el (.)
//const $b = document.querySelector('#blog');//aqui la clase de blog esta mal declarada porque esta con (#) y este debe de ser un (.) 
const $l = document.querySelector('.location');//aqui mandamos a llamar la nueva clase que creamos en el html

async function displayUser(username) {//aqui agrego la async paraq que await nonnos cause conflicto
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);//constante fetch
  response.json().then((data)=>{
  console.log(data);
  $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}).catch((error) => {//catch de response 
  console.error(error);
})//catch
};//function username

function handleError(err) {
console.log('OH NO!');
console.log(err);

$n.textContent = `Algo salió mal: ${err}`//faltaba simbolo $ en la variable n
};

displayUser('stolinski').catch(handleError);