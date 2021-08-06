const express = require("express");

//Database
const database = require("./database");

//Initilise express
const booky = express();
/*
Route                   /
Description         Get all  the books
Access              PUBLIC
Parameter           NONE
Methods             GET
*/


booky.get("/",(req,res) => {
  return res.json({books: database.books});
});


/*
Route                   /is
Description         Get specific book on ISBN
Access              PUBLIC
Parameter           isbn
Methods             GET
*/
booky.get("/is/:isbn",(req,res) => {
    const getSpecificBook = database.books.filter(
      (book) => book.ISBN === req.params.isbn
    );

     if(getSpecificBook.length === 0) {
       return res.json({error: `No book found for the ISBN of ${req.params.isbn}`});
     }

     return res.json({book: getSpecificBook});
});


/*
Route                   /c
Description         Get specific book on Category
Access              PUBLIC
Parameter           Category
Methods             GET
*/

booky.get("/c/:category",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.category.includes(req.params.category)
  )

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the category of ${req.params.category}`});
  }

    return res.json({book: getSpecificBook});
});

/*
Route                   /l
Description         Get specific book on Language
Access              PUBLIC
Parameter           Language
Methods             GET
*/

booky.get("/l/:language",(req,res) => {
  const getSpecificBook = database.books.filter(
    (book) => book.language.includes(req.params.language)
  )

  if(getSpecificBook.length === 0) {
    return res.json({error: `No book found for the language of ${req.params.language}`});
  }

    return res.json({book: getSpecificBook});
});



/*
Route                   /author
Description         Get all AUTHORS
Access              PUBLIC
Parameter           NONE
Methods             GET
*/


booky.get("/author", (req,res) =>{
  return res.json({authors: database.author});
});



/*
Route                   /author/id/
Description         Get specific  author by id
Access              PUBLIC
Parameter           id
Methods             GET
*/

booky.get("/author/id/:id",(req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.id === parseInt(req.params.id)
  );

  if(getSpecificAuthor.length === 0) {
    return res.json({error: `No Books found for the  Author id of ${req.params.id}`});
  }

    return res.json({author: getSpecificAuthor});
});



/*
Route                   /author//book
Description         Get all  author based on books
Access              PUBLIC
Parameter           isbn
Methods             GET
*/

booky.get("/author/book/:isbn", (req,res) => {
  const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
  )

  if(getSpecificAuthor.length === 0) {
    return res.json({error: `No Author found for the book of ${req.params.isbn}`});
  }

    return res.json({author: getSpecificAuthor});
});



/*
Route                   /publication
Description         Get all  publication
Access              PUBLIC
Parameter           NONE
Methods             GET
*/

booky.get("/publications",(req,res) => {
  return res.json({publications: database.publication});
})


/*
Route                   /publication/n/
Description         Get Specific Publication by name
Access              PUBLIC
Parameter           name
Methods             GET
*/

booky.get("/publication/n/:name", (req,res) => {
  const getSpecificPublication = database.publication.filter(
    (publication) => publication.name.includes(req.params.name)
  )

  if(getSpecificPublication.length === 0) {
    return res.json({error: `No Publication found for the name of ${req.params.name}`});
  }

    return res.json({publication: getSpecificPublication});
});


/*
Route                   /publication/book/
Description         Get list of publications based on a books
Access              PUBLIC
Parameter           isbn
Methods             GET
*/

booky.get("/publication/book/:isbn", (req,res) => {
  const getSpecificPublication = database.publication.filter(
    (publication) => publication.books.includes(req.params.isbn)
  )

  if(getSpecificPublication.length === 0) {
    return res.json({error: `No Publication found for the book of ${req.params.isbn}`});
  }

    return res.json({publication: getSpecificPublication});
});



booky.listen(3000,() => {
  console.log("Server is up and running");
});
