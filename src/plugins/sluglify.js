
/*
Convert string to slug 
*/
export const sluglify = str => {
  return str.toLowerCase()
            .replace(/[^\w ]+/g,'')
            .replace(/ +/g,'-')
}