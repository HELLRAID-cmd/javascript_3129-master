const listUl = document.createElement('ul')
document.body.append(listUl)

const buttonAdd = document.createElement('button')
buttonAdd.textContent = 'Добавить элемент'
document.body.append(buttonAdd)

const buttonDelete = document.createElement('button')
buttonDelete.textContent = 'Удалить элемент'
document.body.append(buttonDelete)

buttonAdd.addEventListener('click', function() {
  const listLi = document.createElement('li')
  listLi.textContent = 'Новый элемент списка'
  listUl.append(listLi)
})

buttonDelete.addEventListener('click', function() {
  if(listUl.lastElementChild) {
    listUl.removeChild(listUl.lastElementChild)
  }
})
