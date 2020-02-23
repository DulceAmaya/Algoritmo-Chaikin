/**
 * @author Amaya López Dulce Fernanda
 * 314195856
 * Practica 01 - Graficación por computadora 2020-2
*/

let canvas = this.document.getElementById("the_canvas");
let context = canvas.getContext("2d");
let stack = [];

/**
 * Funcion que implementa el algoritmo de Chaikin
 * @param {Contexto} ctx; Contexto del canvas
 * @param {Number} p1_x; Coordenada x del punto 1
 * @param {Number} p1_y; Coordenada y del punto 1
 * @param {Number} p2_x; Coordenada x del punto 2
 * @param {Number} p2_y; Coordenada y del punto 2
 * @param {Number} p3_x; Coordenada x del punto 3
 * @param {Number} p3_y; Coordenada y del punto 3
 * @param {Number} p4_x; Coordenada x del punto 4
 * @param {Number} p4_y; Coordenada y del punto 4
*/
function curva(ctx, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y, p4_x, p4_y){

    let p1 = [p1_x, p1_y];
    let p2 = [p2_x, p2_y];
    let p3 = [p3_x, p3_y];
    let p4 = [p4_x, p4_y];

    ctx.moveTo(p1[0], p1[1]);
    ctx.lineWidth = 3;

    stack.push(p3);
    stack.push(p4);

    p4 = mid_point(p2, p3);

    do{
        if(distance(p4, p1) > (2 * Math.sqrt(2))){
            p3 = [((p2[0] + p4[0]) / 2), ((p2[1] + p4[1]) / 2)];
            p2 = [((p2[0] + p1[0]) / 2), ((p2[1] + p1[1]) / 2)];

            stack.push(p3);
            stack.push(p4);

            p4 = mid_point(p2, p3);
        }
        else{
            ctx.beginPath();
            ctx.lineTo(p1[0], p1[1]);
            ctx.lineTo(p4[0], p4[1]);
            ctx.strokeStyle = "#383838";
            ctx.stroke();

            p1 = p4;

            p4 = stack.pop();
            p2 = stack.pop();
        }
    } while((p4 != undefined) || (p2 != undefined));

}

/**
 * Funcion que determina el punto medio entre dos puntos.
 * @param {array} p; Arreglo con coordenadas x, y del punto p
 * @param {array} q; Arreglo con coordenadas x, y del punto q
*/
function mid_point(p, q){
    let r_x = (p[0] + q[0]) / 2;
    let r_y = (p[1] + q[1]) / 2;

    return [r_x, r_y];
}

/**
 * Funcion para determinar la distancia entre dos puntos.
 * @param {array} p; Arreglo con coordenadas x, y del punto p
 * @param {array} q; Arreglo con coordenadas x, y del punto q
*/
function distance(p, q){
    let a = Math.pow((q[0] - p[0]), 2);
    let b = Math.pow((q[1] - p[1]), 2);
    let distance = Math.sqrt(a + b);

    return distance;
}

/*Llamadas a la función curva para dibujar en el canvas

               p1x  p1y  p2x  p2y  p3x  p3y  p4x  p4y */

curva(context, 383, 468, 415, 490, 439, 462, 372, 473)
curva(context, 383, 468, 354, 410, 354, 305, 376, 266);
curva(context, 436, 329, 438, 331, 440, 334, 440, 340);
curva(context, 440, 340, 436, 395, 460, 358, 440, 340);
curva(context, 318, 289, 360, 303, 402, 317, 440, 340);
curva(context, 318, 289, 298, 286, 299, 296, 318, 289);
curva(context, 318, 289, 389, 265, 452, 222, 458, 206);
curva(context, 458, 206, 462, 200, 460, 174, 452, 162);
curva(context, 452, 162, 403, 85,  433, 47,  454, 76);
curva(context, 454, 76,  457, 84,  457, 103, 452, 109);
curva(context, 452, 109, 470, 102, 473, 75,  460, 58);
curva(context, 460, 58,  450, 47,  449, 58,  460, 58);
curva(context, 460, 58,  470, 41,  421, 25,  408, 47);
curva(context, 408, 47,  400, 60,  407, 110, 437, 164);
curva(context, 376, 266, 392, 250, 419, 229, 432, 220);
curva(context, 437, 164, 453, 171, 453, 205, 432, 220);
curva(context, 437, 164, 411, 155, 346, 163, 311, 186);
curva(context, 264, 256, 248, 264, 271, 216, 311, 186);
curva(context, 264, 256, 275, 252, 289, 244, 317, 226);
curva(context, 317, 226, 333, 212, 317, 211, 317, 226);
curva(context, 317, 226, 313, 240, 324, 243, 356, 224);
curva(context, 356, 224, 384, 203, 349, 216, 356, 224);
curva(context, 356, 224, 359, 227, 368, 228, 379, 223);
curva(context, 379, 223, 431, 193, 404, 150, 311, 186);
curva(context, 241, 290, 240, 244, 289, 194, 311, 186);
curva(context, 241, 290, 226, 303, 244, 309, 241, 290);
curva(context, 241, 290, 380, 250, 453, 196, 437, 164);
