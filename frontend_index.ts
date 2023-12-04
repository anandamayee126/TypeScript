// const name_person= document.getElementById('name') as HTMLInputElement;
const add_User= document.getElementById('add') as HTMLInputElement;

add_User.addEventListener('submit', addPerson);
async function addPerson(e:any){
  const name_person= e.target.name.value;
  const response= await axios.post('http://localhost:3000/user/add',{name_person});
  console.log("frontend_response",response);
}