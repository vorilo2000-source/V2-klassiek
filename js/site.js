/* ======================= DOCUMENTVERSIE =======================
Titel: Interacties van de website
Versie: 1.2
Datum: 2026-09-28
Doel: Taalkeuze en dialoogvensters voor de voorbeeldsite.
============================================================= */
// ======================= BEGIN TOPIC: VERTALINGEN =======================
// Het HTML-bestand bevat de Nederlandse brontekst; EN en ES vertalen ook de inhoud.
const labels = { // Gedeelde woorden voor de vier pagina's en de scrollpagina.
  nl:{home:'Home',about:'Over ons',product:'Product',contact:'Contact',login:'Login',language:'Taal',disclaimer:'Disclaimer',privacy:'Privacy',terms:'Voorwaarden',powered:'Powered by Vorilo',browse:'Scroll horizontaal voor meer onderdelen',close:'Sluiten'},
  en:{home:'Home',about:'About us',product:'Product',contact:'Contact',login:'Log in',language:'Language',disclaimer:'Disclaimer',privacy:'Privacy',terms:'Terms',powered:'Powered by Vorilo',browse:'Scroll horizontally for more items',close:'Close'},
  es:{home:'Inicio',about:'Sobre nosotros',product:'Producto',contact:'Contacto',login:'Iniciar sesión',language:'Idioma',disclaimer:'Aviso legal',privacy:'Privacidad',terms:'Términos',powered:'Desarrollado por Vorilo',browse:'Desplaza horizontalmente para ver más',close:'Cerrar'}
};
const translations = { // Vertaal alleen letterlijk herkenbare Nederlandse tekst uit de templates.
  "Ga naar inhoud": {en: "Skip to content", es: "Ir al contenido"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite · Modern": {en: "Example website · Modern", es: "Sitio web de ejemplo · Moderno"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite · Klassiek": {en: "Example website · Classic", es: "Sitio web de ejemplo · Clásico"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite · Sidebar links": {en: "Example website · Left sidebar", es: "Sitio web de ejemplo · Barra lateral izquierda"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite · Sidebar rechts": {en: "Example website · Right sidebar", es: "Sitio web de ejemplo · Barra lateral derecha"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite · Scrollpagina": {en: "Example website · Scrolling page", es: "Sitio web de ejemplo · Página con desplazamiento"}, // Nederlandse brontekst en twee vertalingen.
  "Modern": {en: "Modern", es: "Moderno"}, // Nederlandse brontekst en twee vertalingen.
  "Klassiek": {en: "Classic", es: "Clásico"}, // Nederlandse brontekst en twee vertalingen.
  "Sidebar links": {en: "Left sidebar", es: "Barra lateral izquierda"}, // Nederlandse brontekst en twee vertalingen.
  "Sidebar rechts": {en: "Right sidebar", es: "Barra lateral derecha"}, // Nederlandse brontekst en twee vertalingen.
  "Scrollpagina": {en: "Scrolling page", es: "Página con desplazamiento"}, // Nederlandse brontekst en twee vertalingen.
  "Welkom · Modern": {en: "Welcome · Modern", es: "Bienvenido · Moderno"}, // Nederlandse brontekst en twee vertalingen.
  "Welkom · Klassiek": {en: "Welcome · Classic", es: "Bienvenido · Clásico"}, // Nederlandse brontekst en twee vertalingen.
  "Welkom · Sidebar links": {en: "Welcome · Left sidebar", es: "Bienvenido · Barra lateral izquierda"}, // Nederlandse brontekst en twee vertalingen.
  "Welkom · Sidebar rechts": {en: "Welcome · Right sidebar", es: "Bienvenido · Barra lateral derecha"}, // Nederlandse brontekst en twee vertalingen.
  "Welkom · Scrollpagina": {en: "Welcome · Scrolling page", es: "Bienvenido · Página con desplazamiento"}, // Nederlandse brontekst en twee vertalingen.
  "Ideeën verdienen een goede plek.": {en: "Ideas deserve a good place.", es: "Las ideas merecen un buen lugar."}, // Nederlandse brontekst en twee vertalingen.
  "Een heldere basis voor jouw volgende website. Vervang de voorbeeldteksten, foto’s en kleuren door je eigen inhoud.": {en: "A clear foundation for your next website. Replace the sample text, images and colours with your own content.", es: "Una base clara para tu próximo sitio web. Sustituye los textos, las imágenes y los colores de ejemplo por tu propio contenido."}, // Nederlandse brontekst en twee vertalingen.
  "Begin met jouw verhaal": {en: "Start with your story", es: "Empieza con tu historia"}, // Nederlandse brontekst en twee vertalingen.
  "Vier pagina’s, één herkenbare structuur.": {en: "Four pages, one consistent structure.", es: "Cuatro páginas, una estructura coherente."}, // Nederlandse brontekst en twee vertalingen.
  "Topbar, navigatie, inhoud en footer vormen samen één bruikbare basis. Elke pagina heeft bovendien een verticale en een horizontale scrollmogelijkheid.": {en: "The top bar, navigation, content and footer form a practical foundation. Every page also supports vertical and horizontal scrolling.", es: "La barra superior, la navegación, el contenido y el pie de página forman una base práctica. Todas las páginas permiten desplazarse en vertical y en horizontal."}, // Nederlandse brontekst en twee vertalingen.
  "Vertel het verhaal": {en: "Tell the story", es: "Cuenta la historia"}, // Nederlandse brontekst en twee vertalingen.
  "Vervang deze voorbeeldtekst door jouw eigen boodschap.": {en: "Replace this sample text with your own message.", es: "Sustituye este texto de ejemplo por tu propio mensaje."}, // Nederlandse brontekst en twee vertalingen.
  "Voeg media toe": {en: "Add media", es: "Añade contenido multimedia"}, // Nederlandse brontekst en twee vertalingen.
  "Gebruik afbeeldingen of grafieken bij de juiste inhoud.": {en: "Add images or charts where they support the content.", es: "Añade imágenes o gráficos donde complementen el contenido."}, // Nederlandse brontekst en twee vertalingen.
  "Help bezoekers": {en: "Help visitors", es: "Ayuda a los visitantes"}, // Nederlandse brontekst en twee vertalingen.
  "Maak duidelijk hoe ze verder kunnen.": {en: "Make the next step clear.", es: "Indica claramente cuál es el siguiente paso."}, // Nederlandse brontekst en twee vertalingen.
  "Ontdek de onderdelen": {en: "Explore the sections", es: "Explora las secciones"}, // Nederlandse brontekst en twee vertalingen.
  "01 · Tekst": {en: "01 · Text", es: "01 · Texto"}, // Nederlandse brontekst en twee vertalingen.
  "Gebruik deze kaart voor een inleiding, verhaal of opvallend citaat.": {en: "Use this card for an introduction, a story or a featured quote.", es: "Usa esta tarjeta para una introducción, una historia o una cita destacada."}, // Nederlandse brontekst en twee vertalingen.
  "02 · Beeld": {en: "02 · Image", es: "02 · Imagen"}, // Nederlandse brontekst en twee vertalingen.
  "Voeg een eigen afbeelding met een korte beschrijving toe.": {en: "Add your own image with a short description.", es: "Añade tu propia imagen con una breve descripción."}, // Nederlandse brontekst en twee vertalingen.
  "03 · Grafiek": {en: "03 · Chart", es: "03 · Gráfico"}, // Nederlandse brontekst en twee vertalingen.
  "Plaats hier een toegankelijke grafiek of een klein overzicht.": {en: "Place an accessible chart or a short overview here.", es: "Coloca aquí un gráfico accesible o un breve resumen."}, // Nederlandse brontekst en twee vertalingen.
  "04 · Resultaat": {en: "04 · Result", es: "04 · Resultado"}, // Nederlandse brontekst en twee vertalingen.
  "Leg hier het resultaat of een voordeel in gewone taal uit.": {en: "Explain the result or a benefit in plain language.", es: "Explica aquí el resultado o una ventaja con palabras sencillas."}, // Nederlandse brontekst en twee vertalingen.
  "Ons verhaal": {en: "Our story", es: "Nuestra historia"}, // Nederlandse brontekst en twee vertalingen.
  "Een verhaal om op te bouwen.": {en: "A story to build on.", es: "Una historia sobre la que construir."}, // Nederlandse brontekst en twee vertalingen.
  "Beschrijf wie je bent, waar je voor staat en voor wie je werkt. De opbouw van deze voorbeeldpagina is klaar voor je eigen verhaal.": {en: "Describe who you are, what you stand for and who you serve. This sample page is ready for your own story.", es: "Describe quién eres, qué valores defiendes y a quién ayudas. Esta página de ejemplo está lista para contar tu historia."}, // Nederlandse brontekst en twee vertalingen.
  "Ruimte voor mensen en mijlpalen.": {en: "Space for people and milestones.", es: "Espacio para personas e hitos."}, // Nederlandse brontekst en twee vertalingen.
  "Missie, team en geschiedenis krijgen elk een eigen plek. Vul hieronder je concrete informatie in en verwijder de voorbeelden voordat je publiceert.": {en: "Your mission, team and history each have their place. Add your details below and remove the examples before publishing.", es: "Tu misión, tu equipo y tu historia tienen su propio espacio. Añade tus datos y elimina los ejemplos antes de publicar."}, // Nederlandse brontekst en twee vertalingen.
  "Het begin": {en: "The beginning", es: "Los comienzos"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeld voor een eerste mijlpaal.": {en: "Example of a first milestone.", es: "Ejemplo de un primer hito."}, // Nederlandse brontekst en twee vertalingen.
  "De groei": {en: "The growth", es: "El crecimiento"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeld voor een volgende stap.": {en: "Example of the next step.", es: "Ejemplo del siguiente paso."}, // Nederlandse brontekst en twee vertalingen.
  "Nu": {en: "Now", es: "Ahora"}, // Nederlandse brontekst en twee vertalingen.
  "De toekomst": {en: "The future", es: "El futuro"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeld voor de plannen van morgen.": {en: "Example of plans for tomorrow.", es: "Ejemplo de planes para el futuro."}, // Nederlandse brontekst en twee vertalingen.
  "Wat we aanbieden": {en: "What we offer", es: "Qué ofrecemos"}, // Nederlandse brontekst en twee vertalingen.
  "Laat zien wat je maakt.": {en: "Show what you make.", es: "Muestra lo que haces."}, // Nederlandse brontekst en twee vertalingen.
  "Vertel wat het product doet, welke voordelen het heeft en welke keuzes bezoekers kunnen maken. Gebruik deze onderdelen als invulbare voorbeelden.": {en: "Explain what the product does, its benefits and the choices available to visitors. Use these sections as examples to fill in.", es: "Explica qué hace el producto, sus ventajas y las opciones de los visitantes. Utiliza estas secciones como ejemplos para completar."}, // Nederlandse brontekst en twee vertalingen.
  "Een product verdient heldere details.": {en: "A product deserves clear details.", es: "Un producto merece detalles claros."}, // Nederlandse brontekst en twee vertalingen.
  "Een productpagina wordt sterker met duidelijk omschreven functies, voorbeelden en concrete resultaten. Deze ruimte is bedoeld voor je eigen beeldmateriaal of grafieken.": {en: "A product page works best with clear features, examples and concrete results. Use this space for your own images or charts.", es: "Una página de producto mejora con funciones claras, ejemplos y resultados concretos. Usa este espacio para tus imágenes o gráficos."}, // Nederlandse brontekst en twee vertalingen.
  "Laat van je horen": {en: "Get in touch", es: "Ponte en contacto"}, // Nederlandse brontekst en twee vertalingen.
  "Een gesprek begint hier.": {en: "A conversation starts here.", es: "Una conversación empieza aquí."}, // Nederlandse brontekst en twee vertalingen.
  "Geef bezoekers een duidelijke manier om je te bereiken. De gegevens en het formulier op deze pagina zijn voorbeelden.": {en: "Give visitors a clear way to reach you. The contact details and form on this page are examples.", es: "Ofrece a los visitantes una forma clara de contactarte. Los datos y el formulario de esta página son ejemplos."}, // Nederlandse brontekst en twee vertalingen.
  "Een volgende stap begint met een bericht.": {en: "The next step starts with a message.", es: "El siguiente paso empieza con un mensaje."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldadres:": {en: "Sample address:", es: "Dirección de ejemplo:"}, // Nederlandse brontekst en twee vertalingen.
  "vervang dit door je eigen contactgegevens": {en: "replace this with your own contact details", es: "sustituye esto por tus datos de contacto"}, // Nederlandse brontekst en twee vertalingen.
  "Naam": {en: "Name", es: "Nombre"}, // Nederlandse brontekst en twee vertalingen.
  "Bericht": {en: "Message", es: "Mensaje"}, // Nederlandse brontekst en twee vertalingen.
  "Verzenden (voorbeeld)": {en: "Send (example)", es: "Enviar (ejemplo)"}, // Nederlandse brontekst en twee vertalingen.
  "Dit formulier verstuurt geen gegevens. Koppel een eigen verwerkingsdienst voordat je de knop activeert.": {en: "This form does not send any data. Connect your own processing service before enabling the button.", es: "Este formulario no envía datos. Conecta tu propio servicio de procesamiento antes de activar el botón."}, // Nederlandse brontekst en twee vertalingen.
  "Verkennen": {en: "Explore", es: "Explorar"}, // Nederlandse brontekst en twee vertalingen.
  "Vind snel de belangrijkste onderdelen.": {en: "Find the key sections quickly.", es: "Encuentra rápidamente las secciones principales."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeld": {en: "Example", es: "Ejemplo"}, // Nederlandse brontekst en twee vertalingen.
  "Dit is een placeholder.": {en: "This is a placeholder.", es: "Este es un marcador de posición."}, // Nederlandse brontekst en twee vertalingen.
  "Hoofdnavigatie": {en: "Main navigation", es: "Navegación principal"}, // Nederlandse brontekst en twee vertalingen.
  "Horizontaal schuifbare voorbeeldkaarten": {en: "Horizontally scrollable sample cards", es: "Tarjetas de ejemplo con desplazamiento horizontal"}, // Nederlandse brontekst en twee vertalingen.
  "Paginaoverzicht": {en: "Page overview", es: "Resumen de páginas"}, // Nederlandse brontekst en twee vertalingen.
  "Taal": {en: "Language", es: "Idioma"}, // Nederlandse brontekst en twee vertalingen.
  "Over ons": {en: "About us", es: "Sobre nosotros"}, // Nederlandse brontekst en twee vertalingen.
  "Product": {en: "Product", es: "Producto"}, // Nederlandse brontekst en twee vertalingen.
  "Contact": {en: "Contact", es: "Contacto"}, // Nederlandse brontekst en twee vertalingen.
  "Abstracte illustratie van een bericht": {en: "Abstract illustration of a message", es: "Ilustración abstracta de un mensaje"}, // Nederlandse brontekst en twee vertalingen.
  "Abstracte illustratie voor het verhaal": {en: "Abstract illustration for the story", es: "Ilustración abstracta de la historia"}, // Nederlandse brontekst en twee vertalingen.
  "Abstracte productillustratie": {en: "Abstract product illustration", es: "Ilustración abstracta de un producto"}, // Nederlandse brontekst en twee vertalingen.
  "Abstracte voorbeeldillustratie van een website": {en: "Abstract sample illustration of a website", es: "Ilustración abstracta de ejemplo de un sitio web"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldafbeelding voor een productonderdeel": {en: "Sample image for a product feature", es: "Imagen de ejemplo para una característica del producto"}, // Nederlandse brontekst en twee vertalingen.
  "Jouw naam": {en: "Your name", es: "Tu nombre"}, // Nederlandse brontekst en twee vertalingen.
  "Jouw bericht": {en: "Your message", es: "Tu mensaje"}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite Modern met een gedeelde paginabasis.": {en: "Modern sample website with a shared page layout.", es: "Sitio web moderno de ejemplo con una estructura de página común."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite Klassiek met een gedeelde paginabasis.": {en: "Classic sample website with a shared page layout.", es: "Sitio web clásico de ejemplo con una estructura de página común."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite Sidebar links met een gedeelde paginabasis.": {en: "Left sidebar sample website with a shared page layout.", es: "Sitio web de ejemplo con barra lateral izquierda y una estructura de página común."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite Sidebar rechts met een gedeelde paginabasis.": {en: "Right sidebar sample website with a shared page layout.", es: "Sitio web de ejemplo con barra lateral derecha y una estructura de página común."}, // Nederlandse brontekst en twee vertalingen.
  "Voorbeeldwebsite Scrollpagina met een gedeelde paginabasis.": {en: "Scrolling sample website with a shared page layout.", es: "Sitio web de ejemplo con desplazamiento y una estructura de página común."}, // Nederlandse brontekst en twee vertalingen.
};
const select = document.querySelector('#language-select'); // Gebruik de taalkeuze bovenaan iedere pagina.
const saved = (() => { try { return localStorage.getItem('vorilo-demo-lang'); } catch { return null; } })(); // Herstel de eerder gekozen taal als opslag werkt.
const textNodes = []; // Bewaar de Nederlandse brontekst om terug te kunnen schakelen.
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); // Bekijk alle zichtbare tekstknopen in het document.
while (walker.nextNode()) { // Leg alleen bestaande inhoud vast en laat commentaar en witruimte buiten beschouwing.
  const node = walker.currentNode; // Lees de geselecteerde tekstknoop.
  const parent = node.parentElement; // Controleer of de tekst door de oude interfacevertaling wordt beheerd.
  if (!node.textContent.trim() || !parent || parent.closest('[data-i18n], #demo-dialog, script, style')) continue; // Laat aparte labels en de dialoog intact.
  textNodes.push([node, node.textContent]); // Sla de originele tekst inclusief spaties op.
}
const attrNodes = []; // Verzamel ook afbeeldingsbeschrijvingen, velduitleg en toegankelijkheidsnamen.
document.querySelectorAll('[alt], [placeholder], [aria-label], meta[name="description"]').forEach((element) => { // Bewaar relevante attribuutwaarden.
  for (const name of ['alt', 'placeholder', 'aria-label', 'content']) { // Verwerk de vier vertaalbare attributen.
    if (element.hasAttribute(name)) attrNodes.push([element, name, element.getAttribute(name)]); // Bewaar de Nederlandse oorspronkelijke waarde.
  }
});
const originalTitle = document.title; // Bewaar de Nederlandse paginatitel voor terugschakelen.
function translate(source, language) { // Zoek een exacte vertaling en verander anders niets.
  return language === 'nl' ? source : (translations[source] && translations[source][language]) || source; // De tekst van de bezoeker blijft anders behouden.
}
function setLanguage(requested) { // Werk interface, paginainhoud, attributen en titel in één keer bij.
  const language = Object.hasOwn(labels, requested) ? requested : 'nl'; // Accepteer alleen de drie aanwezige talen.
  const dictionary = labels[language]; // Gebruik de bestaande vertalingen voor knoppen en navigatie.
  document.documentElement.lang = language; // Geef de actieve taal ook door aan schermlezers.
  document.querySelectorAll('[data-i18n]').forEach((node) => { // Vervang de afzonderlijk gemarkeerde interfaceteksten.
    const value = dictionary[node.dataset.i18n]; // Zoek de vertaling op basis van de bestaande i18n-sleutel.
    if (value) node.textContent = value; // Verander niets bij onbekende sleutels.
  });
  for (const [node, original] of textNodes) { // Loop langs de Nederlandse teksten uit de huidige pagina.
    const trimmed = original.trim(); // Bewaar de begin- en eindspaties afzonderlijk.
    node.textContent = trimmed ? original.replace(trimmed, translate(trimmed, language)) : original; // Vertaal de inhoud zonder HTML-elementen te vervangen.
  }
  for (const [element, name, original] of attrNodes) element.setAttribute(name, translate(original, language)); // Vertaal ook alt-tekst en formulierhulp.
  const titleParts = originalTitle.split(' | '); // Het paginatype en de templatenaam staan in de titel.
  document.title = titleParts.length === 2 ? [translate(titleParts[0], language), translate(titleParts[1], language)].join(' | ') : translate(originalTitle, language); // Vertaal de titel als geheel.
  if (select) select.value = language; // Toon de actieve taal in de keuzelijst.
  try { localStorage.setItem('vorilo-demo-lang', language); } catch {} // Een lokaal geopende pagina kan opslag blokkeren.
}
if (select) { // Verbind de keuzelijst met de vertaalfunctie.
  select.addEventListener('change', () => setLanguage(select.value)); // Vertaal direct wanneer iemand een taal kiest.
  setLanguage(Object.hasOwn(labels, saved) ? saved : 'nl'); // Stel bij het laden de bewaarde of standaardtaal in.
}
// ======================= EINDE TOPIC: VERTALINGEN =======================
// ======================= BEGIN TOPIC: DIALOGEN =======================
// === Sectie: placeholders openen uitleg zonder doodlopende links. ===
const dialog = document.querySelector('#demo-dialog'); // Gebruik één dialoog voor invulonderdelen.
document.querySelectorAll('[data-info]').forEach((button) => button.addEventListener('click', () => { // Luister naar de footer en login.
  const key=button.dataset.info; // Bepaal welk onderdeel geopend is.
  const language=(select && select.value in labels) ? select.value : 'nl'; // Respecteer de huidige taal.
  dialog.querySelector('h2').textContent=labels[language][key] || key; // Toon de bijbehorende kop.
  dialog.querySelector('p').textContent=language==='nl' ? 'Dit is een placeholder. Vul hier de definitieve inhoud of functie in.' : language==='en' ? 'This is a placeholder. Add the final content or function here.' : 'Este es un marcador. Añade aquí el contenido o la función definitiva.'; // Leg de voorbeeldstatus uit.
  if (typeof dialog.showModal === 'function') dialog.showModal(); // Toon de dialoog in moderne browsers.
}));
// ======================= EINDE TOPIC: DIALOGEN =======================
