import { owlCodes } from './owlCodes'
import dayjs from 'dayjs'

export const filterForOwls = (data) => {
  return data.filter(observation => {
    return Object.values(owlCodes).includes(observation.speciesCode)
  })
}

export const cleanOwlData = (data) => {
  return data.map(({ comName, sciName, locName, locationPrivate, howMany, lat, lng, obsDt, subId, speciesCode }) => {
    return {
      id: subId,
      comName: comName,
      sciName: sciName,
      spCode: speciesCode,
      locName: locName,
      locPrivate: locationPrivate ? '(private)' : '(public)',
      lat: lat,
      lng: lng,
      number: howMany,
      obsDt: dayjs(obsDt).format('MM/DD/YYYY'),
      obsTime: dayjs(obsDt).format('h:mm A'),
    }
  })
}