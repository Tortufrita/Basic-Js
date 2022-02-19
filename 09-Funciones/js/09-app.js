const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cacion con el id ${id}`);
    },
    pausar: function () {
        console.log('pausando...')
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist() {
        console.log('Creando Playlist')
    },
    agregar: function (id) {
        console.log(`Cancion ${id} agregada a la Playlist `)
    }
}



reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist();
reproductor.agregar(50);