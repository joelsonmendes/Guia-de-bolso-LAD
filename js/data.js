const APP_DATA = {
  "patterns": [
    {
      "id": 1,
      "title": "Contato NA e NF",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Contato NA e NF em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contato NA e NF no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 2,
      "title": "Bobina simples",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Bobina simples em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Bobina simples no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 3,
      "title": "Selo de partida",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Selo de partida em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Selo de partida no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 4,
      "title": "Selo com prioridade de desligamento",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Selo com prioridade de desligamento em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Selo com prioridade de desligamento no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 5,
      "title": "Botão pulsante e retenção",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Botão pulsante e retenção em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Botão pulsante e retenção no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 6,
      "title": "Reset geral do sistema",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Reset geral do sistema em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reset geral do sistema no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 7,
      "title": "Intertravamento lógico",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "interlock",
      "objective": "Aplicar o padrão Intertravamento lógico em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Intertravamento lógico no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 8,
      "title": "Comando liga/desliga",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "seal",
      "objective": "Aplicar o padrão Comando liga/desliga em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Comando liga/desliga no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 9,
      "title": "Sinalização de estado",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "lamp",
      "objective": "Aplicar o padrão Sinalização de estado em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sinalização de estado no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 10,
      "title": "Alarme simples",
      "category": "Fundamentos LAD Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "alarm",
      "objective": "Aplicar o padrão Alarme simples em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Alarme simples no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 11,
      "title": "Partida direta",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "motor",
      "objective": "Aplicar o padrão Partida direta em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Partida direta no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 12,
      "title": "Partida direta com selo",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "motor",
      "objective": "Aplicar o padrão Partida direta com selo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Partida direta com selo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 13,
      "title": "Partida direta com emergência",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "emergency",
      "objective": "Aplicar o padrão Partida direta com emergência em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Partida direta com emergência no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 14,
      "title": "Motor com falha térmica",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "thermal",
      "objective": "Aplicar o padrão Motor com falha térmica em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor com falha térmica no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 15,
      "title": "Motor com rearme de falha",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "reset",
      "objective": "Aplicar o padrão Motor com rearme de falha em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor com rearme de falha no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 16,
      "title": "Reversão de motor",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "reverse",
      "objective": "Aplicar o padrão Reversão de motor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reversão de motor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 17,
      "title": "Reversão com intertravamento",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "interlock",
      "objective": "Aplicar o padrão Reversão com intertravamento em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reversão com intertravamento no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 18,
      "title": "Reversão com tempo morto",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "deadtime",
      "objective": "Aplicar o padrão Reversão com tempo morto em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reversão com tempo morto no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 19,
      "title": "Partida estrela-triângulo",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "starDelta",
      "objective": "Aplicar o padrão Partida estrela-triângulo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Partida estrela-triângulo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 20,
      "title": "Partida sequencial de motores",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "sequence",
      "objective": "Aplicar o padrão Partida sequencial de motores em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Partida sequencial de motores no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 21,
      "title": "Alternância de motores",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Alternância de motores em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Alternância de motores no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 22,
      "title": "Motor manual/automático",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Motor manual/automático em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor manual/automático no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 23,
      "title": "Motor local/remoto",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Motor local/remoto em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor local/remoto no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 24,
      "title": "Motor com horímetro",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Motor com horímetro em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor com horímetro no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 25,
      "title": "Motor com contador de partidas",
      "category": "Motores e Comandos",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Motor com contador de partidas em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Motor com contador de partidas no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 26,
      "title": "TON — retardo na energização",
      "category": "Temporizadores Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "timer",
      "objective": "Aplicar o padrão TON — retardo na energização em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar TON — retardo na energização no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 27,
      "title": "TOF — retardo no desligamento",
      "category": "Temporizadores Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão TOF — retardo no desligamento em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar TOF — retardo no desligamento no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 28,
      "title": "TP — pulso temporizado",
      "category": "Temporizadores Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão TP — pulso temporizado em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar TP — pulso temporizado no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 29,
      "title": "Pisca-pisca com timer",
      "category": "Temporizadores Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Pisca-pisca com timer em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Pisca-pisca com timer no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 30,
      "title": "Sequência temporizada",
      "category": "Temporizadores Siemens",
      "level": "Básico",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Sequência temporizada em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sequência temporizada no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 31,
      "title": "Tempo morto entre comandos",
      "category": "Temporizadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Tempo morto entre comandos em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tempo morto entre comandos no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 32,
      "title": "Temporização para partida segura",
      "category": "Temporizadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Temporização para partida segura em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Temporização para partida segura no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 33,
      "title": "Temporização para alarme",
      "category": "Temporizadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Temporização para alarme em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Temporização para alarme no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 34,
      "title": "Retardo para desligamento de motor",
      "category": "Temporizadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Retardo para desligamento de motor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Retardo para desligamento de motor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 35,
      "title": "Ciclo automático com timers",
      "category": "Temporizadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Ciclo automático com timers em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Ciclo automático com timers no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 36,
      "title": "CTU — contador crescente",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão CTU — contador crescente em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar CTU — contador crescente no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 37,
      "title": "CTD — contador decrescente",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão CTD — contador decrescente em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar CTD — contador decrescente no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 38,
      "title": "CTUD — contador crescente/decrescente",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão CTUD — contador crescente/decrescente em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar CTUD — contador crescente/decrescente no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 39,
      "title": "Reset manual de contador",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Reset manual de contador em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reset manual de contador no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 40,
      "title": "Reset automático de contador",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Reset automático de contador em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reset automático de contador no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 41,
      "title": "Contador de peças",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão Contador de peças em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contador de peças no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 42,
      "title": "Contador de ciclos",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão Contador de ciclos em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contador de ciclos no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 43,
      "title": "Contador de partidas de motor",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão Contador de partidas de motor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contador de partidas de motor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 44,
      "title": "Limite de produção",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Limite de produção em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Limite de produção no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 45,
      "title": "Contador para manutenção preventiva",
      "category": "Contadores Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "counter",
      "objective": "Aplicar o padrão Contador para manutenção preventiva em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contador para manutenção preventiva no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 46,
      "title": "Sensor de presença",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Sensor de presença em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sensor de presença no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 47,
      "title": "Sensor fim de curso",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Sensor fim de curso em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sensor fim de curso no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 48,
      "title": "Sensor mínimo e máximo",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Sensor mínimo e máximo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sensor mínimo e máximo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 49,
      "title": "Controle de nível de reservatório",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "pump",
      "objective": "Aplicar o padrão Controle de nível de reservatório em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle de nível de reservatório no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 50,
      "title": "Controle de bomba automática",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Controle de bomba automática em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle de bomba automática no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 51,
      "title": "Alternância de duas bombas",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Alternância de duas bombas em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Alternância de duas bombas no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 52,
      "title": "Bomba principal e reserva",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "pump",
      "objective": "Aplicar o padrão Bomba principal e reserva em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Bomba principal e reserva no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 53,
      "title": "Esteira com sensor",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "conveyor",
      "objective": "Aplicar o padrão Esteira com sensor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Esteira com sensor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 54,
      "title": "Esteira com parada por acúmulo",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "conveyor",
      "objective": "Aplicar o padrão Esteira com parada por acúmulo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Esteira com parada por acúmulo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 55,
      "title": "Separador de peças",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Separador de peças em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Separador de peças no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 56,
      "title": "Contagem em esteira",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Contagem em esteira em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Contagem em esteira no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 57,
      "title": "Cilindro avanço/recuo",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Cilindro avanço/recuo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Cilindro avanço/recuo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 58,
      "title": "Ciclo pneumático simples",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Ciclo pneumático simples em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Ciclo pneumático simples no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 59,
      "title": "Semáforo industrial",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Semáforo industrial em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Semáforo industrial no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 60,
      "title": "Controle sequencial de processo",
      "category": "Sensores e Processos",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Controle sequencial de processo em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle sequencial de processo no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 61,
      "title": "Botão liga/desliga via IHM",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Botão liga/desliga via IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Botão liga/desliga via IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 62,
      "title": "Sinalização de motor na IHM",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Sinalização de motor na IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sinalização de motor na IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 63,
      "title": "Reset de falha pela IHM",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Reset de falha pela IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reset de falha pela IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 64,
      "title": "Campo de setpoint na IHM",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Campo de setpoint na IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Campo de setpoint na IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 65,
      "title": "Tela manual/automático",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tela manual/automático em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tela manual/automático no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 66,
      "title": "Tela de alarmes",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tela de alarmes em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tela de alarmes no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 67,
      "title": "Tela de manutenção",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tela de manutenção em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tela de manutenção no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 68,
      "title": "Tela de produção",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tela de produção em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tela de produção no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 69,
      "title": "Tela de diagnóstico",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tela de diagnóstico em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tela de diagnóstico no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 70,
      "title": "Tags entre CLP e IHM",
      "category": "IHM Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "hmi",
      "objective": "Aplicar o padrão Tags entre CLP e IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Tags entre CLP e IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 71,
      "title": "Liga/desliga de inversor por CLP",
      "category": "Inversor Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Liga/desliga de inversor por CLP em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Liga/desliga de inversor por CLP no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 72,
      "title": "Sentido horário/anti-horário",
      "category": "Inversor Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Sentido horário/anti-horário em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Sentido horário/anti-horário no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 73,
      "title": "Reset de falha do inversor",
      "category": "Inversor Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Reset de falha do inversor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Reset de falha do inversor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 74,
      "title": "Seleção de velocidade fixa",
      "category": "Inversor Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Seleção de velocidade fixa em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Seleção de velocidade fixa no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 75,
      "title": "Controle por entradas digitais",
      "category": "Inversor Siemens",
      "level": "Intermediário",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Controle por entradas digitais em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle por entradas digitais no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 76,
      "title": "Controle por saída analógica 0–10 V",
      "category": "Inversor Siemens",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Controle por saída analógica 0–10 V em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle por saída analógica 0–10 V no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 77,
      "title": "Controle via Profinet",
      "category": "Inversor Siemens",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Controle via Profinet em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Controle via Profinet no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 78,
      "title": "Setpoint de velocidade pela IHM",
      "category": "Inversor Siemens",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Setpoint de velocidade pela IHM em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Setpoint de velocidade pela IHM no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 79,
      "title": "Leitura de status do inversor",
      "category": "Inversor Siemens",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Leitura de status do inversor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Leitura de status do inversor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 80,
      "title": "Diagnóstico de falha do inversor",
      "category": "Inversor Siemens",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "drive",
      "objective": "Aplicar o padrão Diagnóstico de falha do inversor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Diagnóstico de falha do inversor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 81,
      "title": "Emergência com reset",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Emergência com reset em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Emergência com reset no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 82,
      "title": "Bloqueio por falha",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Bloqueio por falha em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Bloqueio por falha no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 83,
      "title": "Intertravamento de segurança",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Intertravamento de segurança em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Intertravamento de segurança no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 84,
      "title": "Falha com reconhecimento",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Falha com reconhecimento em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Falha com reconhecimento no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 85,
      "title": "Alarme sonoro",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Alarme sonoro em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Alarme sonoro no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 86,
      "title": "Alarme visual",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Alarme visual em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Alarme visual no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 87,
      "title": "Histórico simples de falha",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Histórico simples de falha em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Histórico simples de falha no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 88,
      "title": "Diagnóstico de entrada",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Diagnóstico de entrada em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Diagnóstico de entrada no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 89,
      "title": "Diagnóstico de saída",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Diagnóstico de saída em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Diagnóstico de saída no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 90,
      "title": "Modo manutenção",
      "category": "Segurança e Diagnóstico",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "safety",
      "objective": "Aplicar o padrão Modo manutenção em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Modo manutenção no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 91,
      "title": "Uso de PLC Tags",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Uso de PLC Tags em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Uso de PLC Tags no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 92,
      "title": "Organização de DB",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Organização de DB em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Organização de DB no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 93,
      "title": "Bloco FB para motor",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Bloco FB para motor em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Bloco FB para motor no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 94,
      "title": "Bloco FC para lógica repetitiva",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Bloco FC para lógica repetitiva em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Bloco FC para lógica repetitiva no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 95,
      "title": "Instance DB",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Instance DB em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Instance DB no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 96,
      "title": "Multi-instance",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Multi-instance em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Multi-instance no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 97,
      "title": "UDT para motores",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão UDT para motores em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar UDT para motores no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 98,
      "title": "UDT para alarmes",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão UDT para alarmes em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar UDT para alarmes no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 99,
      "title": "Organização por OB1, FC e FB",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Organização por OB1, FC e FB em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Organização por OB1, FC e FB no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    },
    {
      "id": 100,
      "title": "Estrutura padrão de projeto TIA Portal",
      "category": "Boas Práticas no TIA Portal",
      "level": "Avançado",
      "clp": "S7-1200 / S7-1500",
      "software": "TIA Portal",
      "language": "LAD",
      "ladderType": "generic",
      "objective": "Aplicar o padrão Estrutura padrão de projeto TIA Portal em uma lógica Siemens estruturada e comentada.",
      "application": "Bancada didática, painel industrial, máquina de treinamento ou processo de automação real.",
      "tags": [
        {
          "name": "BTN_Liga",
          "address": "%I0.0",
          "type": "Bool",
          "description": "Comando de partida"
        },
        {
          "name": "BTN_Desliga",
          "address": "%I0.1",
          "type": "Bool",
          "description": "Comando de parada"
        },
        {
          "name": "Emergencia_OK",
          "address": "%I0.2",
          "type": "Bool",
          "description": "Segurança liberada"
        },
        {
          "name": "Sensor_01",
          "address": "%I0.3",
          "type": "Bool",
          "description": "Sensor do processo"
        },
        {
          "name": "K1_Motor",
          "address": "%Q0.0",
          "type": "Bool",
          "description": "Saída/contator/atuador principal"
        },
        {
          "name": "Falha_Geral",
          "address": "%M0.0",
          "type": "Bool",
          "description": "Memória de falha"
        }
      ],
      "explanation": "Este padrão mostra como organizar Estrutura padrão de projeto TIA Portal no TIA Portal usando tags simbólicas, contatos, bobinas e redes LAD. A lógica deve ser validada em modo online antes de energizar a carga real.",
      "tiaSteps": [
        "Criar ou abrir o projeto no TIA Portal",
        "Conferir a CPU e a versão de firmware",
        "Criar as PLC Tags necessárias",
        "Criar uma Network com nome técnico",
        "Inserir contatos e bobinas conforme o esquema LAD",
        "Comentar todos os elementos",
        "Compilar hardware e software",
        "Transferir para o CLP",
        "Monitorar online e validar a sequência"
      ],
      "commonErrors": [
        "Endereço duplicado em PLC Tags",
        "Contato NF inserido como NA",
        "Falta de intertravamento ou segurança",
        "Não compilar antes de transferir",
        "Testar saída real sem checklist elétrico"
      ]
    }
  ],
  "assistantKB": [
    {
      "key": "factory io profinet simulador clp comunicação",
      "title": "Integrar CLP Siemens com Factory I/O ou simulador industrial",
      "answer": "Para integrar um CLP Siemens S7-1200/S7-1500 com um simulador como Factory I/O, organize primeiro a rede e depois o mapeamento de I/O.\n\n1. Configure IPs na mesma faixa:\nCLP: 192.168.0.10\nNotebook: 192.168.0.20\nMáscara: 255.255.255.0\n\n2. No TIA Portal, abra Device Configuration, configure a interface PROFINET do CLP e transfira hardware/software.\n\n3. Crie tags para sensores e atuadores virtuais. Exemplo: Sensor_Peca %I0.0, Motor_Esteira %Q0.0.\n\n4. No simulador, escolha o driver Siemens/PLC real ou protocolo suportado pelo simulador, informe o IP do CLP e faça o mapeamento das entradas e saídas.\n\n5. Teste: acione um sensor virtual e monitore a entrada no TIA Portal. Depois acione uma saída no CLP e confirme se o atuador virtual responde.\n\nErros comuns: IP fora da faixa, firewall bloqueando, driver incorreto, endereço de I/O diferente do projeto, CPU em STOP ou hardware não transferido."
    },
    {
      "key": "ip rede profinet s7 1200 s7-1200",
      "title": "Configurar IP do CLP Siemens no TIA Portal",
      "answer": "Abra Device Configuration, selecione a CPU, acesse Properties > PROFINET interface > Ethernet addresses. Configure um IP na mesma faixa do notebook e dos demais dispositivos. Compile hardware/software e faça Download to device."
    },
    {
      "key": "tags plc tag criar variáveis",
      "title": "Criar PLC Tags Siemens",
      "answer": "Em PLC tags, crie nomes simbólicos com endereço, tipo e comentário. Use nomes claros: BTN_Liga %I0.0 Bool, BTN_Desliga %I0.1 Bool, K1_Motor %Q0.0 Bool, SP_Velocidade %MW100 Int. Evite usar endereços diretos na lógica sem comentário."
    },
    {
      "key": "ihm hmi tela siemens wincc",
      "title": "Conectar IHM Siemens ao CLP",
      "answer": "Adicione a IHM em Add new device, crie conexão HMI connection com o CLP, importe ou vincule as PLC Tags, crie botões, campos de entrada, lâmpadas e alarmes. Compile a IHM e transfira para o painel ou simule no Runtime."
    },
    {
      "key": "inversor sinamics profinet g120 v20 velocidade",
      "title": "Controlar inversor Siemens",
      "answer": "Defina se o controle será por bornes, analógico ou Profinet. Para Profinet, adicione o SINAMICS na rede, configure IP/nome do dispositivo, selecione telegrama, crie tags de comando/status e valide enable, start, direction, speed setpoint e reset de falha."
    }
  ],
  "newProjectSteps": [
    "Criar novo projeto no TIA Portal e nomear de forma técnica.",
    "Adicionar o CLP Siemens correto, conferindo modelo e firmware.",
    "Configurar o IP da interface PROFINET do CLP.",
    "Criar PLC Tags com nome, endereço, tipo e comentário.",
    "Organizar blocos: OB1, FCs, FBs, DBs e Instance DBs.",
    "Criar a primeira lógica LAD com Network nomeada.",
    "Compilar hardware e software e corrigir erros.",
    "Transferir o projeto para o CLP e colocar CPU em RUN.",
    "Monitorar online e validar entradas, saídas e memórias.",
    "Adicionar IHM Siemens e criar conexão com o CLP.",
    "Integrar inversor Siemens por bornes, analógico ou Profinet.",
    "Salvar backup final e documentar tags, IPs e versões."
  ],
  "baseTags": [
    {
      "name": "BTN_Liga",
      "address": "%I0.0",
      "type": "Bool",
      "description": "Botão de partida"
    },
    {
      "name": "BTN_Desliga",
      "address": "%I0.1",
      "type": "Bool",
      "description": "Botão de parada"
    },
    {
      "name": "Emergencia_OK",
      "address": "%I0.2",
      "type": "Bool",
      "description": "Circuito de emergência liberado"
    },
    {
      "name": "Sensor_Peca",
      "address": "%I0.3",
      "type": "Bool",
      "description": "Sensor de presença"
    },
    {
      "name": "K1_Motor",
      "address": "%Q0.0",
      "type": "Bool",
      "description": "Contator do motor"
    },
    {
      "name": "Lamp_Motor",
      "address": "%Q0.1",
      "type": "Bool",
      "description": "Sinalização de motor ligado"
    },
    {
      "name": "Falha_Motor",
      "address": "%M0.0",
      "type": "Bool",
      "description": "Falha geral"
    },
    {
      "name": "Modo_Auto",
      "address": "%M0.1",
      "type": "Bool",
      "description": "Modo automático habilitado"
    },
    {
      "name": "SP_Velocidade",
      "address": "%MW100",
      "type": "Int",
      "description": "Setpoint de velocidade em Hz x10"
    },
    {
      "name": "Velocidade_Real",
      "address": "%MW102",
      "type": "Int",
      "description": "Velocidade atual do inversor"
    },
    {
      "name": "Contador_Pecas",
      "address": "%MW110",
      "type": "Int",
      "description": "Total de peças contadas"
    },
    {
      "name": "Tempo_Processo",
      "address": "%MD120",
      "type": "Time",
      "description": "Tempo de processo"
    }
  ]
};
