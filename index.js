var kittens = ['Milo',  'Otis', 'Garfield' ]

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph')
}

function destructivelyKitten(name) {
  return kittens.unshift(name)
}

