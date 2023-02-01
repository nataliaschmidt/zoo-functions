const data = require('../data/zoo_data');

const { species } = data;
//  console.log(hours);
//  console.log(hours[parameterDay].open);

const animalsInExibition = (day) => {
  const animalsDay = species.filter((specie) => specie.availability.includes(day));
  const animalDayName = animalsDay.map((animalDay) => animalDay.name);
  return animalDayName;
};
// console.log(animalsInExibition('Wednesday'));

const Tuesday = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: animalsInExibition('Tuesday'),
  },
};

const Wednesday = {
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: animalsInExibition('Wednesday'),
  },
};

const Thursday = {
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: animalsInExibition('Thursday'),
  },
};

const Friday = {
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: animalsInExibition('Friday'),
  },
};

const Saturday = {
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: animalsInExibition('Saturday'),
  },
};

const Sunday = {
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: animalsInExibition('Sunday'),
  },
};

const Monday = {
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};

const weekDays = () => {
  const days = { ...Tuesday,
    ...Wednesday,
    ...Thursday,
    ...Friday,
    ...Saturday,
    ...Sunday,
    ...Monday };
  return days;
};
// console.log(weekDays());

// --------------------------- // --------------------//

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return weekDays();
  }
};

console.log(getSchedule());

module.exports = getSchedule;
