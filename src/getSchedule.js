// const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

const animals = ['lions', 'tigers', 'bears', 'penguins',
  'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
const daysOfTheWeek = ['Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday', 'Sunday', 'Monday'];

const animalsInExibition = (day) => {
  const animalsDay = species.filter((specie) => specie.availability.includes(day));
  const animalDayName = animalsDay.map((animalDay) => animalDay.name);
  return animalDayName;
};
// console.log(animalsInExibition('Wednesday'));

const tuesday = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: animalsInExibition('Tuesday'),
  },
};

const wednesday = {
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: animalsInExibition('Wednesday'),
  },
};

const thursday = {
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: animalsInExibition('Thursday'),
  },
};

const friday = {
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: animalsInExibition('Friday'),
  },
};

const saturday = {
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: animalsInExibition('Saturday'),
  },
};

const sunday = {
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: animalsInExibition('Sunday'),
  },
};

const monday = {
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};

const weekDays = () => {
  const days = { ...tuesday,
    ...wednesday,
    ...thursday,
    ...friday,
    ...saturday,
    ...sunday,
    ...monday };
  return days;
};
// console.log(weekDays());

// --------------------------- // --------------------//

const getAnimalsDay = (animalDay) => {
  const animalsDay = species.find((specie) => specie.name === animalDay).availability;
  return animalsDay;
};
// console.log(getAnimalsDay('lions'));

const selectDayWeek = (oneDay) => {
  const days = {
    Monday: monday,
    Tuesday: tuesday,
    Wednesday: wednesday,
    Thursday: thursday,
    Friday: friday,
    Saturday: saturday,
    Sunday: sunday,
  };

  const selectDay = days[oneDay];
  return selectDay;
};

// console.log(selectDayWeek('Monday'));

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return weekDays();
  }
  if (animals.includes(scheduleTarget)) {
    return getAnimalsDay(scheduleTarget);
  }
  if (daysOfTheWeek.includes(scheduleTarget)) {
    return selectDayWeek(scheduleTarget);
  }
  return weekDays();
};

// console.log(getSchedule('Saturday'));

module.exports = getSchedule;
