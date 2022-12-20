export const Randomize = () => {
  let randomNumber
  let list: Array<string> = Pessoas.map(p => p.desc)
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
  id: number
  img: string
  name: string
  desc: string
  password: string
  friend: string
}> = [
  {
    id: 2,
    name: 'Adriana',
    desc: 'Vc tirou a Adriana',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/adriana.jpg'
  },
  {
    id: 1,
    name: 'Carol',
    desc: 'Vc tirou a Carol',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/carol.jpg'
  },
  {
    id: 10,
    name: 'Cida',
    desc: 'Vc tirou a Cida',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/cida.jpg'
  },
  {
    id: 8,
    name: 'Douglas',
    desc: 'Vc tirou o Douglas',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/douglas.jpg'
  },
  {
    id: 6,
    name: 'Felipe',
    desc: 'Vc tirou o Felipe',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/felipe.jpg'
  },
  {
    id: 3,
    name: 'Fernanda',
    desc: 'Vc tirou a Fernanda',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/fernanda.jpg'
  },
  {
    id: 5,
    name: 'Italo',
    desc: 'Vc tirou o Italo',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/it.jpg'
  },
  {
    id: 9,
    name: 'Lali',
    desc: 'Vc tirou a Lali',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/lali.jpg'
  },
  {
    id: 4,
    name: 'Ligia',
    desc: 'Vc tirou a Ligia',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/ligia.jpg'
  },
  {
    id: 12,
    name: 'Marcelly',
    desc: 'Vc tirou a Marcelly',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/marcelly.jpg'
  },
  {
    id: 11,
    name: 'Pedro',
    desc: 'Vc tirou o Pedro',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/piazzi.jpg'
  },
  {
    id: 7,
    name: 'Rafael',
    desc: 'Vc tirou o Rafael',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/rafa.jpg'
  },
  {
    id: 13,
    name: 'Anderson',
    desc: 'Vc tirou o Anderson',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/gordo.jpg'
  }
]

/*

  {
    name: 'Cesar',
    desc: 'Vc tirou o Cesar',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/cesar.jpg'
  },
  {
    name: 'Arthur',
    desc: 'Vc tirou o Tu',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/tu.jpg'
  },
  {
    name: 'Patricia',
    desc: 'Vc tirou a Paty',
    password: '123',
    friend: 'Espere o sorteio',
    img: '/images/paty.jpg'
  },

*/
