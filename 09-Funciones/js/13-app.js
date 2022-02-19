const reproductor = {
 reproducir: id => console.log(`Reproduciendo cacion con el id ${id}`),
 pausar: () => console.log('pausando...'),
 borrar: id => console.log(`Borrando cancion... ${id}`),
 crearPlaylist: ()  =>  console.log('Creando Playlist'),
 agregar: id => console.log(`Cancion ${id} agregada a la Playlist `),

 set nuevaCancion(cancion) {
     this.cancion = cancion;
     console.log(`Añadiendo ${cancion}`);
 },
 get obtenerCancion() {
     console.log(`${this.cancion}`)
 }
}

reproductor.nuevaCancion = 'Menea tu Chapa';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist();
reproductor.agregar(50);