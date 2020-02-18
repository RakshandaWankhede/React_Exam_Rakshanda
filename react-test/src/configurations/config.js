const loginURL = "http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login";
const loginHeaders = {
    "Authorization": "Bearer YWRtaW46YWRtaW4=",
    "Content-Type": "application/json "
}
const searchURL = 'http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search'
const searchHeaders ={
    "Bepsy-SiteId": "siteUS" ,
    "Bepsy-CatalogId": "cloudCatalog",
    "Bepsy-PricelistId": "defaultPriceGroup",
    "Content-Type": "application/JSON"

}
const getProductURL = 'http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/'
const productHeaders ={
    "Bepsy-SiteId": "siteUS" ,
    "Bepsy-CatalogId": "bepsy_catalog_1",
    "Bepsy-PricelistId": "defaultPriceGroup"
}

export {loginURL,loginHeaders,searchURL,searchHeaders,getProductURL,productHeaders};