fetch('https://reqres.in/api/users?delay=3')
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('userTableBody');

  data.data.forEach(user => {
    const row = document.createElement('tr');

    const userInfo = ['id', 'first_name', 'last_name', 'email'];
    userInfo.forEach(info => {
      const cell = document.createElement('td');
      cell.textContent = user[info];
      row.appendChild(cell);
    });

    const avatarCell = document.createElement('td');
    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.alt = 'Avatar';
    avatar.classList.add('rounded-circle', 'avatar-img');
    avatarCell.appendChild(avatar);
    row.appendChild(avatarCell);

    tableBody.appendChild(row);
  });
})
.catch(error => console.error('Error fetching data:', error));