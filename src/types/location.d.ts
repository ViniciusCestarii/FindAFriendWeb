export interface UF {
  id: number
  sigla: string
  nome: string
  regiao: {
    id: number
    sigla: string
    nome: string
  }
}

interface Mesorregiao {
  id: number
  nome: string
  UF: UF
}

interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

interface RegiaoIntermediaria {
  id: number
  nome: string
  UF: UF
}

interface RegiaoImediata {
  id: number
  nome: string
  regiaoIntermediaria: RegiaoIntermediaria
}

interface City {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': RegiaoImediata
}

export default City
