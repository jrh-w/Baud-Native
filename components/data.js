export function certData(name){
  const CERT_DATABASE = {
    'Node.js': {
      icon: 'logo-nodejs',
      color: '#000',
      bgColor: '#A0C44D',
      route: '',
    },
    'JS basics':{
      icon: 'logo-javascript',
      color: '#000',
      bgColor: '#F0DE3C',
      route: '',
    },
    'Sass basics':{
      icon: 'logo-sass',
      color: '#AF6491',
      bgColor: '#2C2F36',
      route: '',
    },
  }
  return(CERT_DATABASE[name]);
  // for (let i = 0; i < CERT_DATABASE.length; i++) {
  //   if(CERT_DATABASE[i].name == name){
  //     var index = i;
  //   }
  // }
  // if(CERT_DATABASE[index].hasOwnProperty('name')){
  //   return CERT_DATABASE[index];
  // } else {
  //   return false;
  // }
}
