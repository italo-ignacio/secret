export const Randomize = () => {
  let randomNumber
  let list: Array<string> = Pessoas.map(p => p.name)
  let tmp

  for (let i = list.length; i; ) {
    randomNumber = (Math.random() * i--) | 0
    tmp = list[randomNumber]
    // troca o número aleatório pelo atual
    list[randomNumber] = list[i]
    // troca o atual pelo aleatório
    list[i] = tmp
  }

  return list
}

export const Pessoas: Array<{
  img: string
  name: string
  desc: string
  password: string
  friend: string
}> = [
  {
    name: 'Adriana',
    desc: 'Vc tirou a Adriana',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/adriana.jpg'
  },
  {
    name: 'Carol',
    desc: 'Vc tirou a Carol',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/carol.jpg'
  },
  {
    name: 'Cesar',
    desc: 'Vc tirou o Cesar',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/cesar.jpg'
  },
  {
    name: 'Cida',
    desc: 'Vc tirou a Cida',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/cida.jpg'
  },
  {
    name: 'Douglas',
    desc: 'Vc tirou o Douglas',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/douglas.jpg'
  },
  {
    name: 'Felipe',
    desc: 'Vc tirou o Felipe',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/felipe.jpg'
  },
  {
    name: 'Fernanda',
    desc: 'Vc tirou a Fernanda',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/fernanda.jpg'
  },
  {
    name: 'Italo',
    desc: 'Vc tirou o Italo',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/it.jpg'
  },
  {
    name: 'Lalissa',
    desc: 'Vc tirou a Lali',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/lali.jpg'
  },
  {
    name: 'Ligia',
    desc: 'Vc tirou a Ligia',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/ligia.jpg'
  },
  {
    name: 'Marcelly',
    desc: 'Vc tirou a Marcelly',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/marcelly.jpg'
  },
  {
    name: 'Patricia',
    desc: 'Vc tirou a Paty',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/paty.jpg'
  },
  {
    name: 'Pedro',
    desc: 'Vc tirou o Pedro',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/piazzi.jpg'
  },
  {
    name: 'Rafael',
    desc: 'Vc tirou o Rafael',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/rafa.jpg'
  },
  {
    name: 'Arthur',
    desc: 'Vc tirou o Tu',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/tu.jpg'
  },
  {
    name: 'Anderson',
    desc: 'Vc tirou o Anderson',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/fernanda.jpg'
  }
]
