
const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'},
];

const dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// Agregar nuevas horas al arreglo de Traumatología
function agregarConsultasTraumatologia(nuevasConsultas) {
    for (const nuevaConsulta of nuevasConsultas) {
        traumatologia.push(nuevaConsulta);
    }
}

// Eliminar el primer y último elemento del arreglo de Radiología
function eliminarExtremosRadiologia() {
    radiologia.shift(); // Eliminar primer elemento
    radiologia.pop();   // Eliminar último elemento
}

// Imprimir lista de consultas médicas de Dental
function imprimirConsultasDental() {
    document.write('<p>Consultas Médicas de Dental:</p>');
    document.write('<table>');
    document.write('<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>');
    for (const consulta of dental) {
        document.write(`<tr><td>${consulta.hora}</td><td>${consulta.especialista}</td><td>${consulta.paciente}</td><td>${consulta.rut}</td><td>${consulta.prevision}</td></tr>`);
    }
    document.write('</table>');
}

// Imprimir listado total de pacientes
function imprimirListadoPacientes() {
    document.write('<p>Listado total de pacientes:</p>');
    document.write('<table>');
    document.write('<tr><th>Paciente</th></tr>');
    const todosLosPacientes = [];
    for (const consulta of radiologia) {
        todosLosPacientes.push(consulta.paciente);
    }
    for (const consulta of traumatologia) {
        todosLosPacientes.push(consulta.paciente);
    }
    for (const consulta of dental) {
        todosLosPacientes.push(consulta.paciente);
    }
    for (const paciente of todosLosPacientes) {
        document.write(`<tr><td>${paciente}</td></tr>`);
    }
    document.write('</table>');
}

// Filtrar pacientes de Dental que indican ser de ISAPRE
function filtrarPacientesISAPRE() {
    document.write('<p>Filtrar pacientes de Dental que indican ser de ISAPRE:</p>');
    document.write('<table>');
    document.write('<tr><th>Paciente</th><th>Previsión</th></tr>');
    for (const consulta of dental) {
        if (consulta.prevision === 'ISAPRE') {
            document.write(`<tr><td>${consulta.paciente}</td><td>${consulta.prevision}</td></tr>`);
        }
    }
    document.write('</table>');
}

// Filtrar pacientes de Traumatología que indican ser de FONASA
function filtrarPacientesFONASA() {
    document.write('<p>Filtrar pacientes de Traumatología que indican ser de FONASA:</p>');
    document.write('<table>');
    document.write('<tr><th>Paciente</th><th>Previsión</th></tr>');
    for (const consulta of traumatologia) {
        if (consulta.prevision === 'FONASA') {
            document.write(`<tr><td>${consulta.paciente}</td><td>${consulta.prevision}</td></tr>`);
        }
    }
    document.write('</table>');
}

// Realizar las modificaciones
agregarConsultasTraumatologia([
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'},
]);

eliminarExtremosRadiologia();
imprimirConsultasDental();
imprimirListadoPacientes();
filtrarPacientesISAPRE();
filtrarPacientesFONASA();