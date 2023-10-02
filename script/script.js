function changeTheme() {
  let currMode = document.getElementById("mode");
  if (currMode.innerHTML == "Dark Mode") {
    document.body.style.backgroundColor = "#212529";
    currMode.innerHTML = "Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    currMode.innerHTML = "Dark Mode";
  }
}
