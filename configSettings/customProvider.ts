import { joinURL } from "ufo";
export function getImage(src:string, { modifiers, baseURL }:any = {}, { options, nuxtContext, $img }:any) {

    const { width, height, format, ...providerModifiers } = modifiers
    const operations:any = [];
    // process modifiers
    const operationsString = operations.join(',')
    return {
      url: joinURL(baseURL, operationsString, src),
      isStatic: true,
    }
  }

