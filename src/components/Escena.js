import Phaser from "phaser";

class Escena extends Phaser.Scene{

    //Aqui cargamos las imagenes que utilizaremos.
     preload ()
    {
        //this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('fondo', 'img/fondo.png');
        this.load.image('logo', 'img/icono.png');
        this.load.image('red', 'assets/particles/red.png');
    }

     create ()
    {
        this.add.image(960, 400, 'fondo');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 500,
            scale: { start: 1, end: 0 },
            blendMode: 'MULTIPLY'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }

}

export default Escena;