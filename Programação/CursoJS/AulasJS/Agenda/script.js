let eventList = document.getElementById('event-list');

function addEvent() {
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let event = document.getElementById('event').value;

  let li = document.createElement('li');
  li.innerHTML = `<strong>${date} às ${time}</strong>: ${event}`;
  eventList.appendChild(li);

  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('event').value = '';
}
