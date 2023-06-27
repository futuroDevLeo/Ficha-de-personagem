function criarCheckbox() {
    let raça = document.getElementById('race');
    var opcaoSelecionada = raça.value;

    checkboxContainer.id = "checkboxContainer";
    checkboxContainer.innerHTML = "";
    
    if (opcaoSelecionada === 'Elfo') {
        var tiposDeElfos = ['Alto Elfo', 'Elfo da Floresta', 'Elfo Negro (Drow)'];
        tiposDeElfos.forEach(function(tipo) {
            var label = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'radioElf';
            radio.value = tipo;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(tipo));
            checkboxContainer.appendChild(label);
        });
    } else if (opcaoSelecionada === 'Anão') {
        var tiposDeAnao = ['Anão da Colina', 'Anão da Montanha'];
        tiposDeAnao.forEach(function(tipo) {
            var label = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'radioAnao';
            radio.value = tipo;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(tipo));
            checkboxContainer.appendChild(label);
        });
    } else if (opcaoSelecionada === 'Halfling') {
        var tiposDeHalf = ['Pés Leves', 'Robusto'];
        tiposDeHalf.forEach(function(tipo) {
            var label = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'radioHalf';
            radio.value = tipo;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(tipo));
            checkboxContainer.appendChild(label);
        });
    } else if (opcaoSelecionada === 'Humano') {
        var tiposDeHum = ['Clássico', 'Variante'];
        tiposDeHum.forEach(function(tipo) {
            var label = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'radioHum';
            radio.value = tipo;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(tipo));
            checkboxContainer.appendChild(label);
        });
    } else if (opcaoSelecionada === 'Gnomo') {
        var tiposDeGno = ['Gnomo da Floresta', 'Gnomo das Pedras'];
        tiposDeGno.forEach(function(tipo) {
            var label = document.createElement('label');
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'radioGno';
            radio.value = tipo;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(tipo));
            checkboxContainer.appendChild(label);
        });
    }
}


