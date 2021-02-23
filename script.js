data = [];
loaded = false;

const load =  async () => {
  let result = await fetch('https://jsonplaceholder.typicode.com/users')
  let preArray = await result.json()
  preArray.forEach(item => {
    data.push(item);
})
  loaded = true;
}

async function toAdd() {
  if (!loaded){
   load();
  }

  // div
  let row= document.createElement('div');
  // div classlist row
  row.classList.add('row');
  
  

data.forEach((user) => {


});

}

toAdd();