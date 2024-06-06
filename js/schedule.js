function extrairHorarios(str) {
    var regex = /(\d{1,2}h\d{0,2})/g; //Confia 
    var horarios = str.match(regex);

    if (!horarios) return [];

    console.log(horarios);
    return horarios;
}

function addTagToCronogram(itens, cronograma, str) {
    if (str === "all") {
        cronograma[str] = [];
        itens.forEach(function (item) {
            cronograma[str].push(item);
        });
        return;
    }

    let tag = fixTags(str, tags);
    let subTag = tag.split(' ');

    const keysToCompare = ["dia", "local", "atividade"];

    subTag.forEach((s) => {

        itens.forEach(function (item) {
            for (let key of keysToCompare) {
                let fixedKey = fixTags(item[key], tags);
                let fixedValues = fixedKey.split(' ');

                fixedValues.forEach((fixValue) => {
                    if (fixValue == s) {
                        if (!cronograma[fixValue]) {
                            cronograma[fixValue] = [];
                        }

                        cronograma[fixValue].push(item);
                    }
                });
            }
        });
    });
}

function calcularEstilo(horarios) {
    const [inicio, fim] = horarios;
    const [horaInicio, minutoInicio] = inicio.split('h').map(Number);
    const [horaFim, minutoFim] = fim.split('h').map(Number);

    const duracaoHoras = (horaFim + (minutoFim / 60)) - (horaInicio + (minutoInicio / 60));
    const largura = duracaoHoras * 100; // 100% por hora
    const margem = (minutoInicio / 60) * 100; // 100% por hora

    return {
        width: `${largura}%`,
        marginLeft: `${margem}%`
    };
}

function calcularEstiloGap(inicio, fim) {
    const [horaInicio, minutoInicio] = inicio.split('h').map(Number);
    const [horaFim, minutoFim] = fim.split('h').map(Number);

    const duracaoHoras = (horaFim + (minutoFim / 60)) - (horaInicio + (minutoInicio / 60));
    const largura = duracaoHoras * 100; // 100% por hora
    const margem = (minutoInicio / 60) * 100; // 100% por hora

    return {
        width: `${largura}%`,
        marginLeft: `${margem}%`
    };
}

function createSchedule(itens, cronograma, filter) {
    const schedule = document.querySelector("div.schedule");

    if (!schedule) {
        console.log("Erro: div.schedule não encontrada.");
        return;
    }

    addTagToCronogram(itens, cronograma, filter);

    //Gerar Horários e ordenar
    const timeSlots = new Set();
    Object.values(cronograma).forEach(items => {
        items.forEach(item => {
            const horarios = extrairHorarios(item.horario);

            horarios.forEach(horario => {
                const hour = horario.split('h')[0];
                timeSlots.add(hour + 'h');
            });
        });
    });
    const sortedTimeSlots = Array.from(timeSlots).sort();
    console.log("Horários ordenados:", sortedTimeSlots);

    // Header 
    const scheduleHeader = document.createElement("div");
    scheduleHeader.classList.add("scheduleHeader");

    const scheduleDescriptionHeader = document.createElement("div");
    scheduleDescriptionHeader.classList.add("scheduleDescription");
    scheduleDescriptionHeader.textContent = "Horário e Local";
    scheduleHeader.appendChild(scheduleDescriptionHeader);

    sortedTimeSlots.forEach(time => {
        const scheduleTime = document.createElement("div");
        scheduleTime.classList.add("scheduleTime");
        scheduleTime.textContent = time;
        scheduleHeader.appendChild(scheduleTime);
    });

    schedule.appendChild(scheduleHeader);

    // ScheduleRow
    Object.keys(cronograma).forEach((local) => {
        const scheduleRow = document.createElement("div");
        scheduleRow.classList.add("scheduleRow");

        const scheduleDescription = document.createElement("div");
        scheduleDescription.classList.add("scheduleDescription");
        scheduleDescription.textContent = local;
        scheduleRow.appendChild(scheduleDescription);

        // Criar um mapa para horários ocupados
        const horarioOcupado = {};

        const items = cronograma[local].sort((a, b) => {
            const horariosA = extrairHorarios(a.horario);
            const horariosB = extrairHorarios(b.horario);
            return horariosA[0].localeCompare(horariosB[0]);
        });

        items.forEach(item => {
            const horarios = extrairHorarios(item.horario);

            // Marcar horários como ocupados
            horarios.forEach(horario => {
                horarioOcupado[horario] = true;
            });

            // Iterar sobre os horários ocupados
            const scheduleItem = document.createElement("div");
            scheduleItem.classList.add("scheduleItem");

            // Criar uma div interna para o título e horário do evento
            const scheduleItemContent = document.createElement("div");
            scheduleItemContent.textContent = `${item.titulo}: ${item.horario}`;

            // Calcular o estilo para o item do cronograma
            const estilo = calcularEstilo(horarios);
            scheduleItemContent.style.width = estilo.width;
            scheduleItemContent.style.marginLeft = estilo.marginLeft;

            scheduleItem.appendChild(scheduleItemContent);

            scheduleRow.appendChild(scheduleItem);
        });

        // Adicionar divs vazias para minutos não ocupados
        sortedTimeSlots.forEach(time => {
            if (!horarioOcupado[time]) {
                const emptyDiv = document.createElement("div");
                emptyDiv.classList.add("scheduleItem");

                // Criar uma div interna vazia para manter a estrutura
                const emptyDivContent = document.createElement("div");

                emptyDivContent.textContent = `A`;
                emptyDivContent.style.width = "50%";
                emptyDivContent.style.marginLeft = '50%';
                emptyDiv.appendChild(emptyDivContent);

                scheduleRow.appendChild(emptyDiv);
            }
        });

        schedule.appendChild(scheduleRow);
    });
}

let cronograma = {};
createSchedule(itens, cronograma, "quarta");