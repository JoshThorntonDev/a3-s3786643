
  function getAgeInYears(birthday) {
    const [month, day, year] = birthday.split("/"); // get each part of the date to convert to standard
    const date = new Date(`${year}-${month}-${day}`); // create iso formatted date

    var milliseconds = new Date() - date;
    var age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

    return age;
  }

  export {
    getAgeInYears
  }