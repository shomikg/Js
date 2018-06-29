var eBooks = [{
    title: "PHP for Absolute Beginners",
    author: "Jason Lengstorf",
    readingStatus: false
  },
  {
    title: "HTML Mastery",
    author: "Paul Haine",
    readingStatus: true
  },
  {
    title: "CSS Mastery",
    author: "Andy Budd",
    readingStatus: false
  }
];


for (var i = 0; i < eBooks.length; i++) {

  var book = "'" + eBooks[i].title + "'" + ' by ' + eBooks[i].author + ".";

  if (eBooks[i].readingStatus) {

    document.write("Already read " + book + " <br><br>");


  } else {


    document.write("Still need to read " + book + " <br><br>");


  }

}
