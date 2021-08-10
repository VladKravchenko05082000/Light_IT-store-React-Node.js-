import { $host } from "./index";

export const fetchTypes = async () => {
   const { data } = await $host.get('api/type')
   return data
}

export const fetchBrands = async () => {
   const { data } = await $host.get('api/brand')
   return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 3) => {
   const { data } = await $host.get('api/device', {
      params: {
         typeId, brandId, page, limit
      }
   })
   return data
}

export const fetchOneDevice = async (id) => {
   const { data } = await $host.get('api/device/' + id)
   return data
}