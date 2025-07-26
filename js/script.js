const machineGroups = {
  inyeccion: ["D9", "D4", "D7/DT4", "D8/D17 Lentes", "D13/DT8 BMC", "D11", "DT9", "D19/DT6 BMC", "DT5", "D2", "D15", "D3", "D12", "D5", "D6", "D10", "DT10"],
  montaje: ["P10", "P11", "P12", "P13", "M1", "M2", "M3"]
};

// Catálogo normal
const catalog = [
  { articulo: "REFL D FG FI 326" },
  { articulo: "REFL I FG FI 326" },
  { articulo: "CONJ REFLECTOR LUZ CRUCE FLAT DER" },
  { articulo: "CONJ REFLECTOR LUZ CRUCE FLAT IZQ" }
];

// Catálogo especial para D10, DT10, DT5
const specialCatalog = [
  { codigo: "0095484-6", articulo: "REFL D H7H1 GM VIVA ALUMINIZADO" },
  { codigo: "0095485-6", articulo: "REFL I H7H1 GM VIVA ALUMINIZADO" },
  { codigo: "0095540-6", articulo: "REFL D H1 VW AMAROK ALUMINIZADO" },
  { codigo: "0095541-6", articulo: "REFL I H1 VW AMAROK ALUMINIZADO" },
  { codigo: "0095542-6", articulo: "REFL D H15 VW AMAROK ALUMINIZADO" },
  { codigo: "0095543-6", articulo: "REFL I H15 VW AMAROK ALUMINIZADO" },
  { codigo: "0095587-6", articulo: "REFLECTOR I H7H1 CI C4" },
  { codigo: "0095756-6", articulo: "REFL D H4 TO640ALUMINIZADO" },
  { codigo: "0095757-6", articulo: "REFL I H4 TO 640ALUMINIZADO" },
  { codigo: "0095904-6", articulo: "REFL D H7H7 BAJA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095905-6", articulo: "REFL I H7H7 BAJA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095912-6", articulo: "REFL D H7H7 ALTA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095913-6", articulo: "REFL I H7H7 ALTA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095972-6", articulo: "REFL. D H7+H1+LG+LC PE 208 ALUMINIZADO" },
  { codigo: "0095973-6", articulo: "REFL. I H7+H1+LG+LC PE 208 ALUMINIZADO" },
  { codigo: "0095986-6", articulo: "REFLECTOR DER H7+H15 FCA X6S ALUMINIZADO" },
  { codigo: "0095987-6", articulo: "REFLECTOR IZQ H7+H15 FCA X6S ALUMINIZADO" },
  { codigo: "1426211-0", articulo: "SC REF DER. CRUCE H7 VW AMAROK" },
  { codigo: "1427211-0", articulo: "SC REF IZQ. CRUCE H7 VW AMAROK" },
  { codigo: "1500211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK DER PRY AMAROK PA" },
  { codigo: "1500311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA DER PRY AMAROK PA2" },
  { codigo: "1501211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK IZQ PRY AMAROK PA" },
  { codigo: "1501311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA IZQ PRY AMAROK PA2" },
  { codigo: "1508211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA DER PRY 359 MCA2" },
  { codigo: "1509211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA IZQ PRY 359 MCA2" }
];

// Catálogo especial para D11 y DT9
const specialCatalogD11DT9 = [
  { codigo: "0005486-0", articulo: "MASCARA PRIMARIA DER GM VIVA" },
  { codigo: "0005487-0", articulo: "MASCARA PRIMARIA IZQ GM VIVA" },
  { codigo: "0005902-0", articulo: "MASCARA D NEGRA PR FIAT 359" },
  { codigo: "0005903-0", articulo: "MASCARA I NEGRA PR FIAT 359" },
  { codigo: "1322110-0", articulo: "SC CPO+PUNTO FIJO D CIT C4" },
  { codigo: "1323110-0", articulo: "SC CPO + PUNTO FIJO I CI C4" },
  { codigo: "1426511-0", articulo: "GA EMBELL D C/AROS REDONDOS VW AMAROK" },
  { codigo: "1426711-0", articulo: "SC CPO D FT VW AMAROK C/MA" },
  { codigo: "1427511-0", articulo: "GA EMBELL I C/AROS REDONDOS VW AMAROK" },
  { codigo: "1427711-0", articulo: "SC CPO I FT VW AMAROK C/RN" },
  { codigo: "1428110-0", articulo: "SC CPO D ME VW AMAROK CD" },
  { codigo: "1429110-0", articulo: "SC CPO I ME VW AMAROK CD" },
  { codigo: "1448110-0", articulo: "SC CPO D MM/ME TO 640 (INY.+ P.FIJ)" },
  { codigo: "1448513-0", articulo: "MASCARA PRIMARIA DER.C/LC ALUMINIZADA TO" },
  { codigo: "1448711-0", articulo: "SC CUERPO D FT TO 640 (ALUMINIZADO)" },
  { codigo: "1449110-0", articulo: "SC CPO I MM/ME TO 640(INY.+P.FIJO)" },
  { codigo: "1449513-0", articulo: "MASCARA PRIMARIA IZQ.C/LC ALUMINIZADA TO" },
  { codigo: "1449711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/RN" },
  { codigo: "1451711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/MA" },
  { codigo: "1462711-0", articulo: "SC CPO D FT VW AMAROK C/MA NEGRO" },
  { codigo: "1463711-0", articulo: "SC CPO I FT VW AMAROK C/RN NEGRO" },
  { codigo: "1469511-6", articulo: "GA EMB NEGROI + LENTE CI C4" },
  { codigo: "1488711-0", articulo: "SC CPO D FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1489711-0", articulo: "SC CPO I FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1500110-0", articulo: "SUBCONJUNTO CUERPO DER ME PRY AMAROK PA2" },
  { codigo: "1501110-0", articulo: "SUBCONJUNTO CUERPO IZQ ME PRY AMAROK PA2" },
  { codigo: "1506110-0", articulo: "SC CUERPO DER H15 ALTA GAMA FCA X6S" },
  { codigo: "1507110-0", articulo: "SC CUERPO IZQ H15 ALTA GAMA FCA X6S" },
  { codigo: "1508511-0", articulo: "CONJUNTO MASCARA DER PRY 359 MCA2" },
  { codigo: "1509511-0", articulo: "CONJUNTO MASCARA IZQ PRY 359 MCA2" }
];

let selectedGroup = 'inyeccion';
let selectedMachine = '';
let assignments = [];

function switchGroup(group) {
  selectedGroup = group;
  document.querySelectorAll('.switch-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-group="${group}"]`).classList.add('active');

  const list = document.getElementById("machine-list");
  list.innerHTML = "";
  machineGroups[group].forEach(machine => {
    const li = document.createElement("li");
    li.textContent = machine;
    li.onclick = () => {
      selectedMachine = machine;
      document.getElementById("machine-title").textContent = `Asignar personas a ${machine}`;
      document.getElementById("assign-panel").style.display = 'flex';

      const ps = document.getElementById("product-select");
      ps.innerHTML = "";
      const listaArticulos =
        ["D10", "DT10", "DT5"].includes(machine) ? specialCatalog :
        ["D11", "DT9"].includes(machine) ? specialCatalogD11DT9 :
        catalog;

      listaArticulos.forEach(p => {
        const option = document.createElement("option");
        option.textContent = p.codigo ? `${p.codigo} - ${p.articulo}` : p.articulo;
        ps.appendChild(option);
      });

      renderPersonas();
    };
    list.appendChild(li);
  });
}

function renderPersonas() {
  const container = document.getElementById("person-checkboxes");
  container.innerHTML = "";
  ["Persona 1", "Persona 2", "Persona 3", "Persona 4"].forEach(p => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = p;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + p));
    container.appendChild(label);
  });
}

function asignar() {
  const turno = document.getElementById("shift-select").value;
  const personas = Array.from(document.querySelectorAll("#person-checkboxes input:checked")).map(cb => cb.value);
  const productSelect = document.getElementById("product-select");
  const articuloIndex = productSelect.selectedIndex;
  if (articuloIndex < 0) {
    alert("Selecciona un artículo válido.");
    return;
  }

  const listaArticulos =
    ["D10", "DT10", "DT5"].includes(selectedMachine) ? specialCatalog :
    ["D11", "DT9"].includes(selectedMachine) ? specialCatalogD11DT9 :
    catalog;

  const producto = listaArticulos[articuloIndex];

  if (!selectedMachine || !personas.length || !producto) {
    alert("Completa todos los campos.");
    return;
  }

  assignments.push({
    turno,
    zap: selectedMachine,
    personas,
    articulo: producto.articulo,
    codigo: producto.codigo || "",
    tipo: selectedGroup
  });

  renderTablas();
}

function renderTablas() {
  const tablas = {
    inyeccion: {
      "06:00 - 14:48": document.querySelector("#tabla-inyeccion-manana tbody"),
      "14:08 - 22:18": document.querySelector("#tabla-inyeccion-tarde tbody"),
      "22:10 - 06:10": document.querySelector("#tabla-inyeccion-noche tbody")
    },
    montaje: {
      "06:00 - 14:48": document.querySelector("#tabla-montaje-manana tbody"),
      "14:08 - 22:18": document.querySelector("#tabla-montaje-tarde tbody"),
      "22:10 - 06:10": document.querySelector("#tabla-montaje-noche tbody")
    }
  };

  Object.values(tablas.inyeccion).forEach(t => t.innerHTML = "");
  Object.values(tablas.montaje).forEach(t => t.innerHTML = "");

  assignments.forEach(({ tipo, turno, zap, personas, articulo, codigo }) => {
    const tipoKey = tipo.toLowerCase();
    const targetTable = tablas[tipoKey]?.[turno];
    if (!targetTable) return;

    const row = `<tr>
      <td>${zap}</td>
      <td>${personas.join(", ")}</td>
      <td>${codigo ? `${codigo} - ${articulo}` : articulo}</td>
      <td>${turno}</td>
    </tr>`;
    targetTable.innerHTML += row;
  });
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const tipoActual = selectedGroup;
  const titulo = tipoActual === "inyeccion" ? "Asignaciones Inyección" : "Asignaciones Montaje";

  const data = assignments
    .filter(a => a.tipo === tipoActual)
    .map(a => [a.zap, a.personas.join(", "), a.articulo, a.turno]); // SOLO ARTÍCULO en PDF

  doc.text(titulo, 14, 20);
  doc.autoTable({
    head: [["ZAP", "Personas", "Artículo", "Turno"]],
    body: data,
    startY: 30
  });

  const nombre = document.getElementById("file-name").value || `asignaciones_${tipoActual}_${Date.now()}`;
  doc.save(`${nombre}.pdf`);
}

function limpiarTodo() {
  if (confirm("¿Borrar todas las asignaciones?")) {
    assignments = [];
    renderTablas();
  }
}

window.onload = () => {
  switchGroup('inyeccion');
};
