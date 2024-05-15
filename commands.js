// Notepad
register("n", "notepad", (text) => {
  notepad_add_text(text);
})

// Google
register("g", "google", (text) => {
  window.location = "https://www.google.com/search?q=" + text;
})

// Mangadex
register("m", "mangadex", (text) => {
  window.location = "https://mangadex.org/search?q=" + text;
})

// Youtube
register("y", "youtube", (text) => {
  window.location = "https://www.youtube.com/results?search_query=" + text;
})

// Capitalize My Title
register("c", "capitalize my title", (text) => {
  window.location = "https://capitalizemytitle.com/";
})

// 4chan /a/
register("4a", "4chan /a/", (text) => {
  window.location = "https://boards.4chan.org/a";
})

