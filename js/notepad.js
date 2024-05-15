document.getElementById("notepad_textarea").addEventListener("keydown", function (e) {
  window.localStorage.setItem("notepad_content", document.getElementById("notepad_textarea").value);
});

function notepad_add_text(text) {
  var nc = window.localStorage.getItem("notepad_content");
  if (nc != null) {
    document.getElementById("notepad_textarea").value = nc;
  }
  document.getElementById("notepad_textarea").value += '\n' + text + '\n'
  window.localStorage.setItem("notepad_content", document.getElementById("notepad_textarea").value);
}