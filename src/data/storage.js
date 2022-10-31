const PETS_KEY = "pets";

function initPets() {
  if (localStorage.getItem(PETS_KEY) !== null) return;

  //Create empty Pets object if it doesn't already exist
  setPets({});
}

function getPets() {
  //Retrieve all Pets from LocalStorage
  return JSON.parse(localStorage.getItem(PETS_KEY));
}

function setPets(pets) {
  //Set all Pets to localStorage
  localStorage.setItem(PETS_KEY, JSON.stringify(pets));
}

function insertPet(values) {
  //Retrieve pets, add new pet to the list, and call setPets

  const pets = getPets();

  var pet = {
    name: values.name,
    breed: values.breed,
    age: values.age,
    insurance: values.insurance,
  };

  pets[getId()] = pet; // give the pet a unique id

  setPets(pets); // save
}

function getId() {
  return crypto.randomUUID();
}

export { initPets, getPets, setPets, insertPet };
