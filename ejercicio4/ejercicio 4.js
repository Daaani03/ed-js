class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }

    mostrarDatosConductor() {
       alert('nombre del conductor: '+this.nombre +'licencia: '+this.licencia);
    }
}

class Autobus {
    constructor(capacidad, pasajeros, matricula, listadoConductores) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.matricula = matricula;
        this.listadoConductores = listadoConductores;
    }

    mostrarDatosAutobus() {
        alert('Número de matricula:' +this.matricula);
        alert('capacidad:' +this.capacidad);
        alert('Número de pasajeros:' +this.pasajeros);
        alert("Listado de conductores:");
        
    }

    subir(numPasajeros) {
        const espacioDisponible = this.capacidad - this.pasajeros;
        this.pasajeros += numPasajeros;
        alert('Han subido:'+numPasajeros +'pasajeros')
    }

    bajar(numPasajeros) {
        
    }

    buscarConductor(licencia) {
        
    }
}


function main() {
    const conductor1 = new Conductor("Daniel Cabrera", 22222);
    const conductor2 = new Conductor("Mohamed Ahnati", 11111);

    const autobus = new Autobus(50, "ABC123", [conductor1, conductor2]);

    autobus.mostrarDatosAutobus();
    

    autobus.subir(20);
    autobus.mostrarDatosAutobus();
    

    autobus.bajar(10);
    autobus.mostrarDatosAutobus();
    

    const licenciaBuscar = 67890;
    const encontrado = autobus.buscarConductor(licenciaBuscar);
  
}


main();