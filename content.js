var title = document.getElementById("title").value;
var description = document.getElementById("description").value;
var date = document.getElementById("date").value;

function saveData() {
  chrome.tabs.executeScript({
    file: 'assign.js'
  });
}
