// ======== LISTA DE MÁQUINAS CON GRUPOS ========
const machineGroups = {
  "Máquinas M": ["M1", "M2", "M3"],
  "Prensas P": ["P10", "P11", "P12", "P13"],
  "Inyectoras D": Array.from({ length: 15 }, (_, i) => `D${i + 1}`),
};

// ======== PERSONAS POR TURNO Y MÁQUINA ========
const machinesByShift = {
  "06:00 - 14:48": {
    "M1": ["Operario 1", "Operario 2"],
    "M2": ["Operario 3"],
    "M3": [],
    "P10": [],
    "P11": [],
    "P12": [],
    "P13": [],
    "D1": ["Juan Pérez"],
    "D9": ["GHERUETZ, FABRICIO EMILIANO"],
    "D4": ["OCHOA, CESAR FELIPE"],
  },
  "14:08 - 22:18": {
    "M1": ["Operario 4"],
    "M2": ["Operario 5"],
    "M3": [],
    "P10": [],
    "P11": [],
    "P12": [],
    "P13": [],
    "D1": ["Pedro López"],
    "D9": ["BUSTAMANTE, ORIANA AGOSTINA"],
    "D4": [],
  },
  "22:10 - 06:10": {
    "M1": ["Operario 6"],
    "M2": ["Operario 7"],
    "M3": [],
    "P10": [],
    "P11": [],
    "P12": [],
    "P13": [],
    "D1": ["Carlos Gómez"],
    "D9": ["FERREYRA, VANINA DE LOS ANGELES"],
    "D4": [],
  }
};

// ======== CATÁLOGO DE PRODUCTOS ========
const catalog = [
  { apodoGrupo: "D1", articulo: "REFL D FG FI 326", codArticulo: "0005424-0" },
  { apodoGrupo: "D1", articulo: "REFL I FG FI 326", codArticulo: "0005425-0" },
  { apodoGrupo: "D10-DT10-DT5", articulo: "CONJ REFLECTOR LUZ DE CRUCE FLAT DER PRY AMAROK PA", codArticulo: "1500213-0" },
  { apodoGrupo: "D10-DT10-DT5", articulo: "CONJ REFLECTOR LUZ DE CRUCE FLAT IZQ PRY AMAROK PA", codArticulo: "1501213-0" }
];

// ======== VARIABLES DE ESTADO ========
let assignments = JSON.parse(localStorage.getItem("assignments")) || [];
let selectedMachine = null;
let selectedShift = "06:00 - 14:48";
let editIndex = null;

// ======== DOM ELEMENTOS ========
const shiftSelect = document.getElementById("shift-select");
const machineList = document.getElementById("machine-list");
const personDiv = document.getElementById("personnel");
const personCheckboxes = document.getElementById("person-checkboxes");
const productSelect = document.getElementById("product-select");
const productionInput = document.getElementById("production-input");
const assignBtn = document.getElementById("assign-btn");
const assignmentTable = document.getElementById("assignment-table");
const tableBody = assignmentTable.querySelector("tbody");
const machineTitle = document.getElementById("machine-title");
const fileNameInput = document.getElementById("file-name");
const downloadBtn = document.getElementById("download-pdf");
const clearBtn = document.getElementById("clear-data");

// Modal edición
const editModal = document.getElementById("edit-modal");
const closeModal = document.getElementById("close-modal");
const editMachineSelect = document.getElementById("edit-machine");
const editPersonsDiv = document.getElementById("edit-persons");
const editProductSelect = document.getElementById("edit-product-select");
const editProductionInput = document.getElementById("edit-production-input");
const saveEditBtn = document.getElementById("save-edit");

// ======== CAMBIO DE TURNO ========
shiftSelect.addEventListener("change", () => {
  selectedShift = shiftSelect.value;
});

// ======== RENDER MENÚ LATERAL ========
for (const [groupName, groupMachines] of Object.entries(machineGroups)) {
  const groupLi = document.createElement("li");
  groupLi.textContent = groupName;
  groupLi.style.fontWeight = "bold";
  machineList.appendChild(groupLi);

  groupMachines.forEach(machine => {
    const li = document.createElement("li");
    li.textContent = machine;
    li.style.paddingLeft = "20px";
    li.addEventListener("click", () => {
      selectedMachine = machine;
      machineTitle.textContent = `Asignar personas a ${machine}`;
      personDiv.style.display = "block";
      personCheckboxes.innerHTML = "";

      const people = machinesByShift[selectedShift][machine] || [];
      if (people.length === 0) {
        const noData = document.createElement("p");
        noData.textContent = "No hay personas para esta máquina";
        personCheckboxes.appendChild(noData);
      } else {
        people.forEach(person => {
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = person;
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(" " + person));
          personCheckboxes.appendChild(label);
        });
      }
    });
    machineList.appendChild(li);
  });
}

// ======== RENDER CATÁLOGO EN SELECTS ========
function renderProductOptions() {
  productSelect.innerHTML = "";
  editProductSelect.innerHTML = "";
  catalog.forEach((item, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${item.apodoGrupo} | ${item.articulo} | ${item.codArticulo}`;
    productSelect.appendChild(option);
    editProductSelect.appendChild(option.cloneNode(true));
  });
}
renderProductOptions();

// ======== RENDER TABLA ========
function renderTable() {
  tableBody.innerHTML = "";
  assignmentTable.style.display = assignments.length > 0 ? "table" : "none";
  assignments.forEach((assign, index) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = assign.machine;
    row.insertCell(1).textContent = assign.persons.join(", ");
    row.insertCell(2).textContent = assign.product.apodoGrupo;
    row.insertCell(3).textContent = assign.product.articulo;
    row.insertCell(4).textContent = assign.product.codArticulo;
    row.insertCell(5).textContent = assign.produccionRealizada;
    row.insertCell(6).textContent = assign.date;

    const actionsCell = row.insertCell(7);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", () => openEditModal(index));
    actionsCell.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Borrar";
    deleteBtn.addEventListener("click", () => deleteAssignment(index));
    actionsCell.appendChild(deleteBtn);
  });
}
renderTable();

// ======== ASIGNAR ========
assignBtn.addEventListener("click", () => {
  const selectedPersons = Array.from(
    personCheckboxes.querySelectorAll("input:checked")
  ).map(cb => cb.value);
  const productIndex = parseInt(productSelect.value);
  const produccion = parseInt(productionInput.value);

  if (!selectedMachine || selectedPersons.length === 0 || isNaN(productIndex) || isNaN(produccion)) {
    alert("Selecciona máquina, personas, producto y producción válida.");
    return;
  }

  const product = catalog[productIndex];
  const date = new Date().toLocaleString();

  assignments.push({
    machine: selectedMachine,
    persons: selectedPersons,
    product,
    produccionRealizada: produccion,
    date,
  });
  localStorage.setItem("assignments", JSON.stringify(assignments));
  renderTable();

  personCheckboxes.querySelectorAll("input").forEach(cb => (cb.checked = false));
  productionInput.value = "";
});

// ======== MODAL EDICIÓN ========
function openEditModal(index) {
  editIndex = index;
  const assign = assignments[index];

  editMachineSelect.innerHTML = "";
  for (const machine in machinesByShift[selectedShift]) {
    const option = document.createElement("option");
    option.value = machine;
    option.textContent = machine;
    if (machine === assign.machine) option.selected = true;
    editMachineSelect.appendChild(option);
  }

  editPersonsDiv.innerHTML = "";
  const people = machinesByShift[selectedShift][assign.machine] || [];
  people.forEach(person => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = person;
    if (assign.persons.includes(person)) checkbox.checked = true;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + person));
    editPersonsDiv.appendChild(label);
  });

  editProductSelect.value = catalog.findIndex(
    item =>
      item.apodoGrupo === assign.product.apodoGrupo &&
      item.articulo === assign.product.articulo &&
      item.codArticulo === assign.product.codArticulo
  );
  editProductionInput.value = assign.produccionRealizada;

  editModal.style.display = "flex";
}

saveEditBtn.addEventListener("click", () => {
  const newMachine = editMachineSelect.value;
  const newPersons = Array.from(
    editPersonsDiv.querySelectorAll("input:checked")
  ).map(cb => cb.value);
  const newProductIndex = parseInt(editProductSelect.value);
  const newProduccion = parseInt(editProductionInput.value);

  if (!newMachine || newPersons.length === 0 || isNaN(newProductIndex) || isNaN(newProduccion)) {
    alert("Completa todos los campos con datos válidos.");
    return;
  }

  assignments[editIndex] = {
    machine: newMachine,
    persons: newPersons,
    product: catalog[newProductIndex],
    produccionRealizada: newProduccion,
    date: new Date().toLocaleString(),
  };

  localStorage.setItem("assignments", JSON.stringify(assignments));
  editModal.style.display = "none";
  renderTable();
});

closeModal.addEventListener("click", () => {
  editModal.style.display = "none";
});

// ======== BORRAR ASIGNACIÓN ========
function deleteAssignment(index) {
  if (confirm("¿Seguro que quieres borrar esta asignación?")) {
    assignments.splice(index, 1);
    localStorage.setItem("assignments", JSON.stringify(assignments));
    renderTable();
  }
}

// ======== DESCARGAR PDF ========
downloadBtn.addEventListener("click", () => {
  if (assignments.length === 0) {
    alert("No hay datos para exportar.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Suponiendo que tienes un select con el turno
  const turnoSelect = document.getElementById("turno-select");
  const turnoSeleccionado = turnoSelect ? turnoSelect.value : "Turno no seleccionado";

  // Título arriba
  doc.setFontSize(14);
  doc.text(`Turno: ${turnoSeleccionado}`, 14, 20);

  // Reducir columnas: ZAP, Personas, Artículo
  const tableData = assignments.map(a => [
    a.machine,
    a.persons.join(", "),
    a.product.articulo
  ]);

  doc.autoTable({
    startY: 30,
    head: [["ZAP", "Personas", "Artículo"]],
    body: tableData,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [45, 62, 80] }
  });

  const fileName =
    fileNameInput.value.trim() ||
    `Asignaciones_${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fileName);
});

// ======== LIMPIAR DATOS ========
clearBtn.addEventListener("click", () => {
  if (confirm("¿Seguro que quieres borrar todos los datos?")) {
    assignments = [];
    localStorage.removeItem("assignments");
    renderTable();
  }
});

window.addEventListener("load", () => {
  editModal.style.display = "none";
});
