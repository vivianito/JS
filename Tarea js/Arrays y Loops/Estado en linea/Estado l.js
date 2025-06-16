function onlineStatus(users) {
  const count = users.length;

  if (count === 1) {
    return users[0] + ' online';
  } else if (count === 2) {
    return users[0] + ' and ' + users[1] + ' online';
  } else if (count > 2) {
    return users[0] + ', ' + users[1] + ' and ' + (count - 2) + ' more online';
  } else {
    return 'No one is online';
  }
}
console.log(onlineStatus(['Desertor93'])); 
console.log(onlineStatus(['Desertor93', 'Vivianito'])); 
console.log(onlineStatus(['Desertor93', 'Vivianito', 'alonso'])); 
console.log(onlineStatus([])); // No one is online
