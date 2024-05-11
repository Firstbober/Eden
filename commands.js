// Notepad
register("n", (text) => {
  notepad_add_text(text);
})

// Google
register("g", (text) => {
  window.location = "https://www.google.com/search?q=" + text;
})

// Mangadex
register("m", (text) => {
  window.location = "https://mangadex.org/search?q=" + text;
})

// Youtube
register("y", (text) => {
  window.location = "https://www.youtube.com/results?search_query=" + text;
})

// Capitalize My Title
register("c", (text) => {
  window.location = "https://capitalizemytitle.com/";
})

// 4chan /a/
register("4a", (text) => {
  window.location = "https://boards.4chan.org/a";
})
