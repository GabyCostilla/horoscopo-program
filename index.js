//XD NO ANDA

const signosDelZodiaco = [
    { nombre: 'Aries', inicio: '03-21', fin: '04-19' },
    { nombre: 'Tauro', inicio: '04-20', fin: '05-20' },
    { nombre: 'Géminis', inicio: '05-21', fin: '06-20' },
    { nombre: 'Cáncer', inicio: '06-21', fin: '07-22' },
    { nombre: 'Leo', inicio: '07-23', fin: '08-22' },
    { nombre: 'Virgo', inicio: '08-23', fin: '09-22' },
    { nombre: 'Libra', inicio: '09-23', fin: '10-22' },
    { nombre: 'Escorpio', inicio: '10-23', fin: '11-21' },
    { nombre: 'Sagitario', inicio: '11-22', fin: '12-21' },
    { nombre: 'Capricornio', inicio: '12-22', fin: '01-19' },
    { nombre: 'Acuario', inicio: '01-20', fin: '02-18' },
    { nombre: 'Piscis', inicio: '02-19', fin: '03-20' }
  ];
  
  function obtenerSignoDelZodiaco(fechaDeNacimiento) {
    const fecha = new Date(fechaDeNacimiento);
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    
    for (let signo of signosDelZodiaco) {
      const inicio = new Date(`${new Date().getFullYear()}-${signo.inicio}`);
      const fin = new Date(`${new Date().getFullYear()}-${signo.fin}`);
      
      if ((mes === inicio.getMonth() + 1 && dia >= inicio.getDate()) || (mes === fin.getMonth() + 1 && dia <= fin.getDate())) {
        return signo.nombre;
      }
    }
    
    return null;
  }
  
  const fechaDeNacimiento = '1995-04-20';
  const signoDelZodiaco = obtenerSignoDelZodiaco(fechaDeNacimiento);
  
  if (signoDelZodiaco) {
    fetch(`http://horoscope-api.herokuapp.com/horoscope/today/${signoDelZodiaco}`)
      .then(response => response.json())
      .then(data => console.log(data.horoscope));
  } else {
    console.log('La fecha de nacimiento no es válida.');
  }
  