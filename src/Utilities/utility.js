import { owlCodes } from './owlCodes'

export const filterForOwls = (data) => {
  return data.filter(observation => {
    return Object.values(owlCodes).includes(observation.speciesCode)
  })
}

