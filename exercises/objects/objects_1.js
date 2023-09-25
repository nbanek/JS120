function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;//missing this keywords
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;//missing this keywords
          break;
        case 'evening':
          msg += `${evening} ${name}`;//missing this keywords
          break;
      }

      console.log(msg);
    },
  };
}

