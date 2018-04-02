//Endpoint handler functions in here
// let booksDB = [{title: "Harry Potter", author: "JK Rowling"},
//   {title: "whatever", author:"whatever2"}
// ];

// let n0 = "Eunice";
// let n1 = "Agnes";
// let n2 = "Vladimir";
// let n3 = "Horace";

let n0 = "name0";
let n1 = "name1";
let n2 = "name2";
let n3 = "name3";


let booksDB = [
  {id: 0, title: "A Little Life", author: "Hanya Yanagihara", cover: "https://images-na.ssl-images-amazon.com/images/I/51Ht2Od%2BZ2L._SX321_BO1,204,203,200_.jpg", owner: n0},
  {id: 1, title: "Ready Player One", author: "Ernest Cline", cover: "https://images-na.ssl-images-amazon.com/images/I/51N%2BZ39KtlL._SX314_BO1,204,203,200_.jpg", owner: n2},
  {id: 2, title: "Freedom", author: "Jonathan Franzen", cover: "https://images-na.ssl-images-amazon.com/images/I/51pHDW%2BHuBL._SX328_BO1,204,203,200_.jpg", owner: n3},
  {id: 3, title: "The Handmaid's Tale", author: "Margaret Atwood", cover: "https://images-na.ssl-images-amazon.com/images/I/5104aIETkgL._SX310_BO1,204,203,200_.jpg", owner: n1},
  {id: 4, title: "Man's Search for Meaning", author: "Viktor Frankl", cover: "https://images-na.ssl-images-amazon.com/images/I/41C2r7-HbkL._SX280_BO1,204,203,200_.jpg", owner: n3},
  {id: 5, title: "The Girl on the Train", author: "Paula Hawkins", cover: "https://images-na.ssl-images-amazon.com/images/I/51VC%2BmAmYUL.jpg", owner: n0},
  {id: 6, title: "A Tree Grows in Brooklyn", author: "Betty Smith", cover: "https://images-na.ssl-images-amazon.com/images/I/51A%2BjSADNOL._SX330_BO1,204,203,200_.jpg", owner: n0},
  {id: 7, title: "White Teeth", author: "Zadie Smith", cover: "https://images-na.ssl-images-amazon.com/images/I/515SYDLdnKL._SX318_BO1,204,203,200_.jpg", owner: n3},
  {id: 8, title: "When Things Fall Apart", author: "Pema Chodron", cover: "https://images-na.ssl-images-amazon.com/images/I/616oz-U6ngL._SX322_BO1,204,203,200_.jpg", owner: n1},
  {id: 9, title: "Allegiant", author: "Veronica Roth", cover: "https://images-na.ssl-images-amazon.com/images/I/51wY-L84woL._SX330_BO1,204,203,200_.jpg", owner: n0},
  {id: 10, title: "Ethics for the New Millennium", author: "14th Dalai Lama", cover: "https://images-na.ssl-images-amazon.com/images/I/51oBPVW4KCL._SX323_BO1,204,203,200_.jpg", owner: n1},
  {id: 11, title: "Fellowship of the Ring", author: "J.R.R. Tolkien", cover: "https://images-na.ssl-images-amazon.com/images/I/51BY0JKQXTL._SX308_BO1,204,203,200_.jpg", owner: n2},
  {id: 12, title: "Sharp Objects", author:"Gillian Flynn", cover: "https://images-na.ssl-images-amazon.com/images/I/41yukqFvDhL._SX303_BO1,204,203,200_.jpg", owner: n3},
  {id: 13, title: "Where'd You Go, Bernadette", author: "Maria Semple", cover: "https://images-na.ssl-images-amazon.com/images/I/51sn0hyI7pL._SX330_BO1,204,203,200_.jpg", owner: n0},
  {id: 14, title: "Origin", author: "Dan Brown", cover: "https://images-na.ssl-images-amazon.com/images/I/41qowhZjPfL._BO1,204,203,200_.jpg", owner: n0},  
  {id: 15, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", cover: "https://images-na.ssl-images-amazon.com/images/I/51L%2B3fbhYML.jpg", owner: n2},
  {id: 16, title: "Harry Potter", author: "J.K. Rowling", cover: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg"},
  {id: 17, title: "The Bible", author: "God", cover:"https://images-na.ssl-images-amazon.com/images/I/31J8idhiP8L._SX310_BO1,204,203,200_.jpg"},
  {id: 18, title: "1", author: "2", cover: "https://images-na.ssl-images-amazon.com/images/I/51EqqJ8IqtL._SX382_BO1,204,203,200_.jpg"}
] 

let booksCurr = booksDB.slice(0,15);

module.exports = {
    create: ( req, res ) => {
      const { title, author, owner } = req.body;

      console.log(`In create: ${title}  ${author} ${owner}`)

      //Find book in database:
      const bookIndex = booksDB.findIndex( book => book.title == title);

      if (bookIndex === -1){
        res.status(404).send( booksCurr );
      }

      //Add book info + owner to booksCurr
      let newBook={
        id: booksDB[bookIndex].id,
        title: booksDB[bookIndex].title,
        author: booksDB[bookIndex].author,
        cover: booksDB[bookIndex].cover,
        owner: owner
      }
      booksCurr.unshift(newBook);

      //Return book list on success!
      res.status(200).send( booksCurr );
    },
  
    read: ( req, res ) => {
      res.status(200).send( booksCurr );
    },
  
    update: ( req, res ) => {
      const { owner } = req.body;
      const updateID = req.params.id;
      const bookIndex = booksCurr.findIndex( book => book.id == updateID );
      let book = booksCurr[ bookIndex ];
  
      booksCurr[ bookIndex ] = {
        id: booksCurr[bookIndex].id,
        title:booksCurr[bookIndex].title,
        author: booksCurr[bookIndex].author,
        cover: booksCurr[bookIndex].cover,
        owner: owner || book.owner
      };
  
      res.status(200).send( booksCurr );
    },
  
    delete: ( req, res ) => {
      const deleteID = req.params.id;    
      const bookIndex = booksCurr.findIndex( book => book.id == deleteID );
      if (bookIndex!= -1){
        booksCurr.splice(bookIndex, 1);
        res.status(200).send( booksCurr );
      }else{
        res.status(400).send("ID Does not exist");
      }
    }
  };