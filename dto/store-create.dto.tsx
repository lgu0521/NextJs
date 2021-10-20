export interface StoreCreateDTO {
    storeId: string,
    name: string,
    location: string,
    operation: string,
    phonenumber: string,
    tmpUrl: File[],
    url: Array<Url>
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
    url: File[],
}