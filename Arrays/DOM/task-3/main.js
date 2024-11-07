const listUl = document.createElement('ul');
document.body.append(listUl);

const arr = [100, 300, 250, 700, 500]

function listUlFunc(arr) {
  listUl.innerHTML = ""
  for (let i = 0; i < arr.length; i++) {
    const listLi = document.createElement('li')
    listLi.textContent = arr[i]
    listUl.append(listLi)
    
  }
}

listUlFunc(arr)

const buttonFileterIncrease = document.createElement('button')
buttonFileterIncrease.textContent = 'Сортировать по возрастанию'
document.body.append(buttonFileterIncrease)

const buttonFileterDecrease = document.createElement('button')
buttonFileterDecrease.textContent = 'Сортировать по убыванию'
document.body.append(buttonFileterDecrease)


buttonFileterIncrease.addEventListener('click', function(e) {
  arr.sort((a, b) => a - b)
  listUlFunc(arr)
})

buttonFileterDecrease.addEventListener('click', function(e) {
  arr.sort((a, b) => b - a)
  listUlFunc(arr)
})


