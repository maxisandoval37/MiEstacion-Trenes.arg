const estacionesPorLinea = {
  urquiza: [
    { nombre: "Federico Lacroze", lat: -34.583824, lon: -58.449911 },
    { nombre: "José Artigas", lat: -34.5845, lon: -58.4512 },
    { nombre: "Pedro N. Arata", lat: -34.5860, lon: -58.4530 },
    { nombre: "Francisco Beiró", lat: -34.5880, lon: -58.4550 },
    { nombre: "El Libertador", lat: -34.5900, lon: -58.4570 },
    { nombre: "Antonio Devoto", lat: -34.5920, lon: -58.4590 },
    { nombre: "Coronel F. Lynch", lat: -34.5940, lon: -58.4610 },
    { nombre: "Fernández Moreno", lat: -34.5960, lon: -58.4630 },
    { nombre: "Lourdes", lat: -34.5980, lon: -58.4650 },
    { nombre: "Tropezón", lat: -34.6000, lon: -58.4670 },
    { nombre: "José María Bosch", lat: -34.6020, lon: -58.4690 },
    { nombre: "Martín Coronado", lat: -34.6040, lon: -58.4710 },
    { nombre: "Pablo Podestá", lat: -34.6060, lon: -58.4730 },
    { nombre: "Jorge Newbery", lat: -34.6080, lon: -58.4750 },
    { nombre: "Rubén Darío", lat: -34.6100, lon: -58.4770 },
    { nombre: "Ejército de los Andes", lat: -34.6120, lon: -58.4790 },
    { nombre: "Juan B. de La Salle", lat: -34.6140, lon: -58.4810 },
    { nombre: "Sargento Barrufaldi", lat: -34.6160, lon: -58.4830 },
    { nombre: "Capitán Lozano", lat: -34.6180, lon: -58.4850 },
    { nombre: "Teniente Agneta", lat: -34.6200, lon: -58.4870 },
    { nombre: "Campo de Mayo", lat: -34.6220, lon: -58.4890 },
    { nombre: "Sargento Cabral", lat: -34.6240, lon: -58.4910 },
    { nombre: "General Lemos", lat: -34.6260, lon: -58.4930 }
  ],
    sanmartin: [
    { nombre: "Retiro", lat: -34.5894, lon: -58.3732 },
    { nombre: "Palermo", lat: -34.5781, lon: -58.4246 },
    { nombre: "Villa Crespo", lat: -34.5875, lon: -58.4411 },
    { nombre: "La Paternal", lat: -34.5961, lon: -58.4683 },
    { nombre: "Villa del Parque", lat: -34.6065, lon: -58.4912 },
    { nombre: "Devoto", lat: -34.6102, lon: -58.5045 },
    { nombre: "Sáenz Peña", lat: -34.6108, lon: -58.5255 },
    { nombre: "Santos Lugares", lat: -34.6129, lon: -58.5424 },
    { nombre: "Caseros", lat: -34.6109, lon: -58.5631 },
    { nombre: "El Palomar", lat: -34.6086, lon: -58.5873 },
    { nombre: "Hurlingham", lat: -34.6022, lon: -58.6422 },
    { nombre: "William C. Morris", lat: -34.6025, lon: -58.6523 },
    { nombre: "Bella Vista", lat: -34.5983, lon: -58.6667 },
    { nombre: "Muñiz", lat: -34.5611, lon: -58.7070 },
    { nombre: "San Miguel", lat: -34.5432, lon: -58.7111 },
    { nombre: "José C. Paz", lat: -34.5194, lon: -58.7750 },
    { nombre: "Sol y Verde", lat: -34.5056, lon: -58.7931 },
    { nombre: "Derqui", lat: -34.4932, lon: -58.7987 },
    { nombre: "Villa Astolfi", lat: -34.4765, lon: -58.8089 },
    { nombre: "Pilar", lat: -34.4583, lon: -58.9125 },
    { nombre: "Manzanares", lat: -34.4292, lon: -58.9500 },
    { nombre: "Dr. Cabred", lat: -34.4100, lon: -58.9800 }
  ],
    belgranoSur: [
    { nombre: "Dr. Sáenz", lat: -34.6381, lon: -58.4173 },
    { nombre: "Villa Soldati", lat: -34.6580, lon: -58.4430 },
    { nombre: "Presidente Illia", lat: -34.6595, lon: -58.4560 },
    { nombre: "Villa Lugano", lat: -34.6620, lon: -58.4700 },
    { nombre: "Villa Madero", lat: -34.6700, lon: -58.4800 },
    { nombre: "Marinos del Fournier", lat: -34.6750, lon: -58.4900 },
    { nombre: "Tapiales", lat: -34.6800, lon: -58.5000 },
    { nombre: "Aldo Bonzi", lat: -34.6850, lon: -58.5100 },
    { nombre: "Sánchez de Mendeville", lat: -34.6900, lon: -58.5200 },
    { nombre: "José Ingenieros", lat: -34.6950, lon: -58.5300 },
    { nombre: "Justo Villegas", lat: -34.7000, lon: -58.5400 },
    { nombre: "Isidro Casanova", lat: -34.7050, lon: -58.5500 },
    { nombre: "Rafael Castillo", lat: -34.7100, lon: -58.5600 },
    { nombre: "Merlo Gómez", lat: -34.7150, lon: -58.5700 },
    { nombre: "Libertad", lat: -34.7200, lon: -58.5800 },
    { nombre: "Marinos C. G. Belgrano", lat: -34.7250, lon: -58.5900 }
  ],
    belgranoNorte: [
    { nombre: "Retiro (Belgrano Norte)", lat: -34.5913, lon: -58.3741 },
    { nombre: "Saldías", lat: -34.5820, lon: -58.3900 },
    { nombre: "Ciudad Universitaria", lat: -34.5600, lon: -58.4400 },
    { nombre: "Aristóbulo del Valle", lat: -34.5500, lon: -58.4500 },
    { nombre: "M. M. Padilla", lat: -34.5400, lon: -58.4600 },
    { nombre: "Florida", lat: -34.5300, lon: -58.4700 },
    { nombre: "Munro", lat: -34.5200, lon: -58.4800 },
    { nombre: "Carapachay", lat: -34.5100, lon: -58.4900 },
    { nombre: "Villa Adelina", lat: -34.5000, lon: -58.5000 },
    { nombre: "Boulogne Sur Mer", lat: -34.4900, lon: -58.5100 },
    { nombre: "Vicealmirante Montes", lat: -34.4800, lon: -58.5200 },
    { nombre: "Don Torcuato", lat: -34.4700, lon: -58.5300 },
    { nombre: "Ing. A. Sourdeaux", lat: -34.4600, lon: -58.5400 },
    { nombre: "Villa de Mayo", lat: -34.4500, lon: -58.5500 },
    { nombre: "Los Polvorines", lat: -34.4400, lon: -58.5600 },
    { nombre: "Ing. Pablo Nogués", lat: -34.4300, lon: -58.5700 },
    { nombre: "Grand Bourg", lat: -34.4200, lon: -58.5800 },
    { nombre: "Tierras Altas", lat: -34.4100, lon: -58.5900 },
    { nombre: "Tortuguitas", lat: -34.4000, lon: -58.6000 },
    { nombre: "Manuel Alberti", lat: -34.3900, lon: -58.6100 },
    { nombre: "Del Viso", lat: -34.3800, lon: -58.6200 },
    { nombre: "Cecilia Grierson", lat: -34.3700, lon: -58.6300 },
    { nombre: "Villa Rosa", lat: -34.3600, lon: -58.6400 }
  ]
};

const coordenadasPlanoUrquiza = {
  "Federico Lacroze":       { top: "50%", left: "5%" },
  "José Artigas":           { top: "50%", left: "10%" },
  "Pedro N. Arata":         { top: "50%", left: "14%" },
  "Doctor F. Beiró":        { top: "50%", left: "18%" },
  "El Libertador":          { top: "50%", left: "22%" },
  "Antonio Devoto":         { top: "50%", left: "26%" },
  "Coronel F. Lynch":       { top: "50%", left: "30%" },
  "Fernández Moreno":       { top: "50%", left: "34%" },
  "Lourdes":                { top: "50%", left: "38%" },
  "Tropezón":               { top: "50%", left: "42%" },
  "José M. Bosch":          { top: "50%", left: "46%" },
  "Martín Coronado":        { top: "50%", left: "50%" },
  "Pablo Podestá":          { top: "50%", left: "54%" },
  "Jorge Newbery":          { top: "50%", left: "58%" },
  "Rubén Darío":            { top: "50%", left: "62%" },
  "Ejército de los Andes":  { top: "50%", left: "66%" },
  "Juan B. de La Salle":    { top: "50%", left: "70%" },
  "Sargento Barrufaldi":    { top: "50%", left: "74%" },
  "Capitán Lozano":         { top: "50%", left: "78%" },
  "Teniente Agneta":        { top: "50%", left: "80%" },
  "Campo de Mayo":          { top: "50%", left: "82%" },
  "Sargento Cabral":        { top: "50%", left: "85%" },
  "General Lemos":          { top: "50%", left: "87%" }
};

const planosPorLinea = {
  urquiza: "imgs/planos/plano_urquiza_-_mt.png",
  belgranoSur: "imgs/planos/plano_belgrano_sur.png",
  belgranoNorte: "imgs/planos/plano_belgrano_norte.png",
  sanmartin: "imgs/planos/plano_san_martin.png"
};

const coordenadasPorLinea = {
  urquiza: coordenadasPlanoUrquiza//, TODO complete
  //belgranoSur: coordenadasPlanoBelgranoSur,
  //belgranoNorte: coordenadasPlanoBelgranoNorte,
  //sanmartin: coordenadasPlanoSanMartin
};

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function verEstacion() {
  const lineaSeleccionada = document.getElementById("linea").value;
  const resultadoDiv = document.getElementById("resultado");
  const planoContainer = document.getElementById("planoContainer");
  const planoImagen = document.getElementById("planoImagen");
  const marcador = document.getElementById("marcador");

  resultadoDiv.innerText = "";

  if (!lineaSeleccionada || !estacionesPorLinea[lineaSeleccionada]) {
    resultadoDiv.innerText = "Seleccioná una línea válida.";
    planoContainer.classList.add("hidden");
    return;
  }

  const estaciones = estacionesPorLinea[lineaSeleccionada];

  resultadoDiv.innerText = "Detectando ubicación...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      let estacionCercana = estaciones[0];
      let distanciaMinima = getDistance(lat, lon, estacionCercana.lat, estacionCercana.lon);

      estaciones.forEach(estacion => {
        const distancia = getDistance(lat, lon, estacion.lat, estacion.lon);
        if (distancia < distanciaMinima) {
          distanciaMinima = distancia;
          estacionCercana = estacion;
        }
      });

      resultadoDiv.innerHTML = `Estás cerca de <span class="text-indigo-600 font-bold">${estacionCercana.nombre}</span> (<span class="text-gray-600">${distanciaMinima.toFixed(2)} km</span>)`;

      // Mostrar plano si existe
      const planoSrc = planosPorLinea[lineaSeleccionada];
      const coordenadas = coordenadasPorLinea[lineaSeleccionada];

      if (planoSrc && coordenadas) {
        planoImagen.src = planoSrc;
        planoContainer.classList.remove("hidden");

        const coords = coordenadas[estacionCercana.nombre];
        if (coords) {
          marcador.style.top = coords.top;
          marcador.style.left = coords.left;
          marcador.classList.remove("hidden");
        } else {
          marcador.classList.add("hidden");
        }
      } else {
        planoContainer.classList.add("hidden");
      }

    }, () => {
      resultadoDiv.textContent = "No se pudo obtener tu ubicación.";
      planoContainer.classList.add("hidden");
    });
  } else {
    resultadoDiv.textContent = "Tu navegador no soporta geolocalización.";
    planoContainer.classList.add("hidden");
  }
}

function mostrarEnPlano(estacionNombre) {
  const marcador = document.getElementById("marcador");
  const coords = coordenadasPlanoUrquiza[estacionNombre];
  if (coords) {
    marcador.style.top = coords.top;
    marcador.style.left = coords.left;
    marcador.style.display = "block";
  } else {
    marcador.style.display = "none";
  }
}