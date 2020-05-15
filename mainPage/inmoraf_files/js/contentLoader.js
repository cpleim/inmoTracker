const torreDefensaString = '<div class="section">' +
    '<div class="layoutArea">' +
    '<div class="column">' +
    '<p>&bull; Pisos interiores de apartamentos: Pisos de ingeniería - Prefinished Madera.</p>' +
    '<p>&bull; Pisos de terrazas internas - Deck de PVC colocado radialmente.</p>' +
    '<p><br /> &bull; Pisos de cocina y baño - Porcelanato.</p>' +
    '<p><br /> &bull; Mesadas - Granito o silestone.</p>' +
    '<p>&bull; Revestimiento de paredes en baños y cocina con porcelanato y granito o silestone.</p>' +
    '<p><br /> &bull; Dispositivos de oscurecimiento - Cortinas tipo &ldquo;black-out&rdquo; motorizadas.</p>' +
    '<p><br /> &bull; Aberturas int-ext de aluminio línea GALA.</p>' +
    '<p><br /> &bull; Aberturas int-int (puertas) en versión mínima marcos de eucalipto seleccionado, y hojas en bastidor enchapado todo con fondo epoxi y acabado PU blanco satinado. Manija tipo TOSHI de inox. 3 pomelas de INOX. Lleva contramarco (ver alternativa de contramarco en lapacho o fingerjoint).</p>' +
    '<p><br /> &bull; Barandas de terrazas: Vidrio laminado 3+3 con montantes interiores en tubos de aluminio anodizado.</p>' +
    '<p><br /> &bull; Domótica: Control a distancia de blackouts motorizados: luces y acondicionamiento térmico; dimerizado de luces y audio; control &ldquo;touch&rdquo;de luces; información de datos climáticos en tiempo real; control de acceso al edificio, ascensor y unidades; control de acceso de vehículos por reconocimiento de matrícula.</p>' +
    '<p>&bull; Aire Acondicionado.</p>' +
    '<p><br /> &bull; Losa radiante eléctrica: Individual por unidad y controlable por ambiente.</p>' +
    '<p><br /> &bull; Grifería Premium.</p>' +
    '<p>&bull; Instalación de datos - Vinculada a domótica, se dejarán todas las tensiones débiles enhebradas, y se preverá cone- xión de TV cable en todos los ambientes.</p>' +
    '<p>&bull; Instalación eléctrica: la instalación del edificio se realizará bajo las más estrictas normas de seguridad, e incluirá un pararrayos tipo Franklin en su cúspide.</p>' +
    '<p>&bull; Opcional: adecuación de la línea blanca al interiorismo de elección.</p>' +
    '<p><br /> &bull; Otra carpintería interior- Idem puertas en versión mínima. Puede alternarse con elementos en lapacho, o bien en fingerjoint. &ldquo;Se incluyen bajo-mesadas, aéreos y mobilario a medida insinuado, también placares en baños y dormitorios, vestidores, barras y repisas.</p>' +
    '</div>' +
    '</div>' +
    '</div>';

const edificioLGomezString = '<div class="section">' +
    '<div class="layoutArea">' +
    '<div class="column">' +
    '<p>&bull; 18 Cuotas sin recargo (entrega inicial del 25%)</p>' +
    '<p>&bull; Unidades a partir de US$ 97.000</p>' +
    '</div>' +
    '</div>' +
    '</div>';

const edificioRialtoString = '<div class="section">' +
    '<div class="layoutArea">' +
    '<div class="column">' +
    '<p>&bull; Barrio Cordón. (Chaná entre E. Acevedo y Jackson)</p>' +
    '<p>&bull; Apratamentos de 1, 2 y 3 dormitorios.</p>' +
    '<p>&bull; Unidades a partir de US$ 96.000</p>' +
    '<p>&bull; Promovido por ley de vivienda social.</p>' +
    '</div>' +
    '</div>' +
    '</div>';

let docToLoad = '';

$(document).ready(function () {
    $('#BTNtorreDefensa').click(function () {
        document.getElementById("modalTitle").innerText = "Torre de la Defensa (Paysandú)"
        document.getElementById("modalBody").innerHTML = torreDefensaString;
        docToLoad = 'bdp_torreDefensa.pdf';
        console.log("PDF OUTPUT --> " + docToLoad);
    });

    $('#btnEdifLGomez').click(function () {
        document.getElementById("modalTitle").innerText = "Edificio Gral. Leandro Gomez (Paysandú)"
        document.getElementById("modalBody").innerHTML = edificioLGomezString;
        docToLoad = 'bdp_leandroGomez.pdf';
        console.log("PDF OUTPUT --> " + docToLoad);
    });

    $('#btnEdifRialto').click(function () {
        document.getElementById("modalTitle").innerText = "Edificio Rialto (Montevideo)"
        document.getElementById("modalBody").innerHTML = edificioRialtoString;
        docToLoad = 'bdp_Rialto.pdf';
        console.log("PDF OUTPUT --> " + docToLoad);
    });

    $('#btnShowPDF').click(function () {
        window.open('inmoraf_files/docs/'+docToLoad, '_blank', 'fullscreen=yes');
        return false;
    });

});
