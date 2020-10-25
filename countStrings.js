const hiCount = (str) =>
  str
    .split(' ')
    .reduce((sum, str) => sum + str.toLowerCase().includes('hi'), 0);

hiCount('hi Hii HI hellow HI hii hI the world');
