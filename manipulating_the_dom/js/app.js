document.addEventListener('DOMContentLoaded', () => {
    console.log('Hey JavaScript, are you working?');

const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

const deleteButton = document.querySelector("#delete-all");
  deleteButton.addEventListener('click', handleDeletion);

})
    
const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const athleteListItem = createAthleteListItem(event.target);
  const athleteList = document.querySelector('#athlete-list');
  athleteList.appendChild(athleteListItem);

  event.target.reset();
}

const createAthleteListItem = function (form) {
  const athleteListItem = document.createElement('li');
  athleteListItem.classList.add('athlete-list-item');

  const name = document.createElement('h2');
  name.textContent = `Name: ${form.name.value}`;
  athleteListItem.appendChild(name);

  const athlete = document.createElement('h3');
  athlete.textContent = `Athlete: ${form.athlete.value}`;
  athleteListItem.appendChild(athlete);

  const category = document.createElement('p');
  category.textContent = `Reason: ${form.category.value}`;
  athleteListItem.appendChild(category);

  return athleteListItem;
}

const handleDeletion = function () {
  let deletedList = document.querySelector('ul');
  while (deletedList.firstChild) {
    deletedList.removeChild(deletedList.firstChild);
  }
}
  







