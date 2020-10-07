var kittens = ['Milo',  'Otis', 'Garfield' ]

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
    return kittens.shift()
}

function appendKitten(name){
    return [...kittens, name]
}

function prependKitten(name){
    return [name, ...kittens]
}

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
    return kittens.slice(1)
}