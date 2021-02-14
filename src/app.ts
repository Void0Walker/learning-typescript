const AUTHOR = "Arturas Kalandarisvil";
let someVar = "someVar";

function LogAuthor(author: string) {
  if (author.length > 0) {
    console.log(`Project author: ${author}`);
  }
}

LogAuthor(AUTHOR);
