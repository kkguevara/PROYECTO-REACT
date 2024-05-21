const producto = [
    {
        id: 1,
        titulo: 'Ron Santa Teresa 1796',
        precio: '$41.500',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Añejo Santa Teresa 1796 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/13548174/resize/260/260?1632522535',
    },
    {
        id: 2,
        titulo: 'Ron Santa Teresa Gran Reserva',
        precio: '$15.000',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Santa Teresa Añejo Gran Reserva 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/22812791/resize/260/260?1647894172',
    },
    {
        id: 3,
        titulo: 'Ron Pampero Aniversario',
        precio: '$30.800',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Pampero Añejo Aniversario 700cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/28565876/resize/260/260?1666380912',
    },
    {
        id: 4,
        titulo: 'Ron Pampero Especial',
        precio: '$15.500',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Pampero Añejo Especial 700cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/11098141/resize/260/260?1657132633',
    },
    {
        id: 5,
        titulo: 'Ron Pampero Selección 1938',
        precio: '$16.990',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Pampero Añejo Selección 1938 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/11098142/resize/260/260?1657132904',
    },
    {
        id: 6,
        titulo: 'Ron Diplomatico Reserva Exclusiva',
        precio: '$40.000',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Diplomatico Reserva Excusiva 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/34748805/resize/260/260?1683076033',
    },
    {
        id: 7,
        titulo: 'Ron Diplomatico Mantuano',
        precio: '$25.990',
        categoria: 'Ron_Añejo',
        descripcion: 'Ron Diplomatico Mantuano 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/10744276/resize/260/260?1639764819',
    },
    {
        id: 8,
        titulo: 'Ron Havana Club',
        precio: '$7.990',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Havana Club Blanco 40º 3 Años 1 litro',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/25131354/resize/260/260?1654721297',
    },
    {
        id: 9,
        titulo: 'Ron Havana Club',
        precio: '$6.990',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Havana Club Blanco 3 Años 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/11053268/resize/260/260?1647888019',
    },
    {
        id: 10,
        titulo: 'Ron Bacardí Carta Blanca',
        precio: '$6.700',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Bacardí Carta Blanca 750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/11618671/resize/260/260?1648488949',
    },
    {
        id: 11,
        titulo: 'Ron Bacardí Carta Blanca',
        precio: '$11.700',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Bacardí Carta Blanca Galón 1750cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/11098118/resize/260/260?1641677352',
    },
    {
        id: 12,
        titulo: 'Ron Bacardí Blanco 40º',
        precio: '$1.900',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Bacardí Blanco 40º Petaca 200cc',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/44344342/resize/260/260?1705112452',
    },
    {
        id: 13,
        titulo: 'Ron Barcelo Blanco',
        precio: '$6.900',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Barcelo Blanco 38º 1Litro',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/24754964/resize/260/260?1654211599',
    },
    {
        id: 14,
        titulo: 'Ron Mitjans Blanco',
        precio: '$6.900',
        categoria: 'Ron_Blanco',
        descripcion: 'Ron Mitjans Blanco 40º 1Litro',
        imagen:
            'https://cdnx.jumpseller.com/comercial-jp/image/22963730/resize/260/260?1648235668',
    },
];
export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return producto.find((prod) => prod.id == id);
  };
  
  export const getcategoria = (categoria) => {
    return producto.filter((prod) => prod.categoria === categoria);
  };