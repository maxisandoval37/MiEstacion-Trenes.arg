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
  ]
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
  resultadoDiv.innerText = "";

  if (!lineaSeleccionada || !estacionesPorLinea[lineaSeleccionada]) {
    resultadoDiv.innerText = "Seleccioná una línea válida.";
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

    }, () => {
      resultadoDiv.textContent = "No se pudo obtener tu ubicación.";
    });
  } else {
    resultadoDiv.textContent = "Tu navegador no soporta geolocalización.";
  }
}