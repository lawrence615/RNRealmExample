import realm from 'database/main'

const getAllAuthors = () => {
  return realm.objects('Author')
}