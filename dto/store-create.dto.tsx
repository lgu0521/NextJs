export interface StoreCreateDTO {
    storeId: string,
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    tmpUrl: File[],
    url: string[]
}

export interface Url{
    url: string
}

export interface StoreInfoDTO {
    storeId: string,
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    url: string[]
}