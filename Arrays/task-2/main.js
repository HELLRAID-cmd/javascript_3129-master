const users = [
  ["Alice", 25, true,],
  ["Bob", 30, false],
  ["Charlie", 22, true],
  ["David", 27, true],
  ["Eve", 20, false]
];

const countVowels = () => {
  return users
      .filter(user => user[1] > 25 && user[2])
      .sort((a, b) => a[1] - b[1])
      .map(user => user[0])
}

const sportUsersOver25 = countVowels(users)
console.log(sportUsersOver25)