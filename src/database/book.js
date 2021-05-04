import realm from 'database/main'

// const insertTestData = () => {
//   for (let i = 0; i < 3; i++) {
//     realm.write(() => {
//       realm.create('Book', {
//         title: 'Barry Butter' + i,
//         pages: 400
//       })
//     })
//   }
// }

const getAllBooks = (bigBooks) => {
  console.info('bigBooks: ', bigBooks)
  if (bigBooks) {
    return realm.objects('Book').filtered('pages > 400');
  } else {
    return realm.objects('Book')
  }
}

const addBook = (title, pages, edition = null, author) => {
  realm.write(() => {
    const book = realm.create('Book', {
      title: title,
      pages: pages,
      edition: edition,
      author: author
    })
  })
}

const deleteAllBooks = () => {
  realm.write(() => {
    realm.delete(getAllBooks())
  })
}

const updateAllBookEditions = () => {
  realm.write(() => {
    let books = getAllBooks()
    books.map((item, index) => {
      if (item.edition === null) {
        item.edition = 1
      }
    })
  })
}

const getBigBooks = () => {
  return realm.objects('Book').filtered('pages > 400');
}

export { getAllBooks, addBook, deleteAllBooks, updateAllBookEditions, getBigBooks }