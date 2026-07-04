const PATTERNS = [
  {
    "id": 1,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Contato NA e NF",
    "application": "Compreensão e uso dos contatos normalmente aberto e normalmente fechado em lógicas Siemens.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Contato NA e NF\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contato NA e NF\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 2,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Bobina simples",
    "application": "Acionamento direto de uma saída digital a partir de uma condição lógica.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Bobina simples\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Bobina simples\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 3,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Selo de partida",
    "application": "Retenção de comando após pulso de liga usando memória ou contato auxiliar.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Selo de partida\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Selo de partida\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 4,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Selo com prioridade de desligamento",
    "application": "Partida com retenção dando prioridade segura ao botão desliga/falha.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Selo com prioridade de desligamento\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Selo com prioridade de desligamento\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 5,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Botão pulsante e retenção",
    "application": "Transformação de comando momentâneo em estado mantido controlado pelo CLP.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Botão pulsante e retenção\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Botão pulsante e retenção\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 6,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Reset geral do sistema",
    "application": "Padronização de reset para memórias, alarmes e comandos internos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Reset geral do sistema\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reset geral do sistema\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 7,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Intertravamento lógico",
    "application": "Bloqueio lógico entre comandos incompatíveis para evitar acionamentos simultâneos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Intertravamento lógico\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Intertravamento lógico\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 8,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Comando liga/desliga",
    "application": "Comando básico de operação com botões, sinalização e permissivo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Comando liga/desliga\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Comando liga/desliga\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 9,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Sinalização de estado",
    "application": "Indicação de ligado, desligado, falha e pronto para operar.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Sinalização de estado\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sinalização de estado\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 10,
    "category": "Fundamentos LAD Siemens",
    "level": "Básico",
    "title": "Alarme simples",
    "application": "Geração de alarme por falha com indicação visual e reconhecimento.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Comando",
      "I0.1 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Saída"
    ],
    "memories": [
      "M0.0 - Memória"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Alarme simples\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Alarme simples\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição principal",
        "left": [
          "I0.0_Start",
          "I0.1_Stop_NF"
        ],
        "right": "M0.0_Memoria"
      },
      {
        "label": "Rede 2 — Saída",
        "left": [
          "M0.0_Memoria"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Diagnóstico",
        "left": [
          "Falha"
        ],
        "right": "Q0.1_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Condição principal\n|---- [ I0.0_Start ] -- [ I0.1_Stop_NF ] ----------------( M0.0_Memoria )\n// Rede 2 — Saída\n|---- [ M0.0_Memoria ] ----------------( Q0.0_Saida )\n// Rede 3 — Diagnóstico\n|---- [ Falha ] ----------------( Q0.1_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 11,
    "category": "Motores e Comandos",
    "level": "Básico",
    "title": "Partida direta",
    "application": "Acionamento simples de motor com contator comandado pelo CLP.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Partida direta\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Partida direta\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 12,
    "category": "Motores e Comandos",
    "level": "Básico",
    "title": "Partida direta com selo",
    "application": "Partida de motor com retenção lógica, botão liga, desliga e proteção.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Partida direta com selo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Partida direta com selo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 13,
    "category": "Motores e Comandos",
    "level": "Básico",
    "title": "Partida direta com emergência",
    "application": "Partida direta condicionada por emergência liberada e reset seguro.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Partida direta com emergência\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Partida direta com emergência\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 14,
    "category": "Motores e Comandos",
    "level": "Básico",
    "title": "Motor com falha térmica",
    "application": "Bloqueio do motor quando o relé térmico sinaliza sobrecarga.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor com falha térmica\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor com falha térmica\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 15,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Motor com rearme de falha",
    "application": "Reconhecimento de falha e liberação controlada para nova partida.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor com rearme de falha\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor com rearme de falha\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 16,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Reversão de motor",
    "application": "Comando de giro horário e anti-horário com duas saídas.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Reversão de motor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reversão de motor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 17,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Reversão com intertravamento",
    "application": "Bloqueio cruzado entre contatores de avanço e reversão.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Reversão com intertravamento\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reversão com intertravamento\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 18,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Reversão com tempo morto",
    "application": "Tempo de segurança entre desligar um sentido e ligar o outro.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Reversão com tempo morto\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reversão com tempo morto\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 19,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Partida estrela-triângulo",
    "application": "Sequência de contatores principal, estrela e triângulo com temporização.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Partida estrela-triângulo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Partida estrela-triângulo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 20,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Partida sequencial de motores",
    "application": "Acionamento de motores em sequência com retardo programado.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Partida sequencial de motores\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Partida sequencial de motores\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 21,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Alternância de motores",
    "application": "Alternância automática entre motores para equalizar desgaste.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Alternância de motores\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Alternância de motores\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 22,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Motor manual/automático",
    "application": "Seleção de modo manual por operador ou automático por processo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor manual/automático\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor manual/automático\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 23,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Motor com comando local/remoto",
    "application": "Seleção entre botoeira local e comandos vindos da IHM/supervisório.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor com comando local/remoto\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor com comando local/remoto\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 24,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Motor com horímetro",
    "application": "Acúmulo do tempo de funcionamento para manutenção preventiva.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor com horímetro\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor com horímetro\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 25,
    "category": "Motores e Comandos",
    "level": "Intermediário",
    "title": "Motor com contador de partidas",
    "application": "Registro de quantidade de partidas para análise operacional.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Botão liga",
      "I0.1 - Botão desliga",
      "I0.2 - Falha térmica NF"
    ],
    "outputs": [
      "Q0.0 - Contator motor",
      "Q0.1 - Sinaleiro ligado"
    ],
    "memories": [
      "M0.0 - Selo motor",
      "DB_Motor.Status"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Motor.Status"
    ],
    "objective": "Aplicar o padrão \"Motor com contador de partidas\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Motor com contador de partidas\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando e selo",
        "left": [
          "BT_Liga",
          "BT_Desliga_NF",
          "Falha_NF"
        ],
        "right": "M0.0_Selo"
      },
      {
        "label": "Rede 2 — Acionamento motor",
        "left": [
          "M0.0_Selo",
          "Permissivo_OK"
        ],
        "right": "Q0.0_Motor"
      },
      {
        "label": "Rede 3 — Sinalização",
        "left": [
          "Q0.0_Motor"
        ],
        "right": "Q0.1_Ligado"
      }
    ],
    "ladder": "// Rede 1 — Comando e selo\n|---- [ BT_Liga ] -- [ BT_Desliga_NF ] -- [ Falha_NF ] ----------------( M0.0_Selo )\n// Rede 2 — Acionamento motor\n|---- [ M0.0_Selo ] -- [ Permissivo_OK ] ----------------( Q0.0_Motor )\n// Rede 3 — Sinalização\n|---- [ Q0.0_Motor ] ----------------( Q0.1_Ligado )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 26,
    "category": "Temporizadores Siemens",
    "level": "Básico",
    "title": "TON — retardo na energização",
    "application": "Liga uma saída somente após a condição permanecer ativa pelo tempo configurado.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"TON — retardo na energização\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"TON — retardo na energização\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 27,
    "category": "Temporizadores Siemens",
    "level": "Básico",
    "title": "TOF — retardo no desligamento",
    "application": "Mantém a saída ativa por um tempo após a condição desligar.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"TOF — retardo no desligamento\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"TOF — retardo no desligamento\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 28,
    "category": "Temporizadores Siemens",
    "level": "Básico",
    "title": "TP — pulso temporizado",
    "application": "Gera pulso de duração fixa ao detectar borda de acionamento.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"TP — pulso temporizado\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"TP — pulso temporizado\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 29,
    "category": "Temporizadores Siemens",
    "level": "Básico",
    "title": "Pisca-pisca com timer",
    "application": "Geração de sinal intermitente para lâmpada ou alarme visual.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Pisca-pisca com timer\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Pisca-pisca com timer\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 30,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Sequência temporizada",
    "application": "Acionamento de várias saídas em etapas temporizadas.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Sequência temporizada\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sequência temporizada\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 31,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Tempo morto entre comandos",
    "application": "Intervalo de segurança entre dois comandos incompatíveis.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Tempo morto entre comandos\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tempo morto entre comandos\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 32,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Temporização para partida segura",
    "application": "Atraso de partida após reset, fechamento de proteção ou energização.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Temporização para partida segura\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Temporização para partida segura\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 33,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Temporização para alarme",
    "application": "Geração de alarme apenas se a falha permanecer por tempo mínimo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Temporização para alarme\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Temporização para alarme\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 34,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Retardo para desligamento de motor",
    "application": "Desligamento controlado após comando de parada.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Retardo para desligamento de motor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Retardo para desligamento de motor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 35,
    "category": "Temporizadores Siemens",
    "level": "Intermediário",
    "title": "Ciclo automático com timers",
    "application": "Ciclo repetitivo com etapas controladas por temporizadores IEC.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Condição de início",
      "I0.1 - Reset"
    ],
    "outputs": [
      "Q0.0 - Saída temporizada"
    ],
    "memories": [
      "T1 - Timer IEC",
      "M0.0 - Etapa ativa"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "T1",
      "M0.0"
    ],
    "objective": "Aplicar o padrão \"Ciclo automático com timers\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Ciclo automático com timers\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Condição do timer",
        "left": [
          "Start",
          "Permissivo_OK"
        ],
        "right": "TON_T1.IN"
      },
      {
        "label": "Rede 2 — Saída temporizada",
        "left": [
          "TON_T1.Q"
        ],
        "right": "Q0.0_Saida"
      },
      {
        "label": "Rede 3 — Reset/segurança",
        "left": [
          "Reset",
          "Falha"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Condição do timer\n|---- [ Start ] -- [ Permissivo_OK ] ----------------( TON_T1.IN )\n// Rede 2 — Saída temporizada\n|---- [ TON_T1.Q ] ----------------( Q0.0_Saida )\n// Rede 3 — Reset/segurança\n|---- [ Reset ] -- [ Falha ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 36,
    "category": "Contadores Siemens",
    "level": "Básico",
    "title": "CTU — contador crescente",
    "application": "Contagem crescente de pulsos com valor preset e saída de atingimento.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"CTU — contador crescente\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"CTU — contador crescente\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 37,
    "category": "Contadores Siemens",
    "level": "Básico",
    "title": "CTD — contador decrescente",
    "application": "Contagem regressiva de eventos até atingir zero ou limite.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"CTD — contador decrescente\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"CTD — contador decrescente\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 38,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "CTUD — contador crescente/decrescente",
    "application": "Contagem bidirecional para estoque, posição ou fluxo de peças.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"CTUD — contador crescente/decrescente\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"CTUD — contador crescente/decrescente\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 39,
    "category": "Contadores Siemens",
    "level": "Básico",
    "title": "Reset manual de contador",
    "application": "Zeramento do contador por botão físico ou comando da IHM.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Reset manual de contador\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reset manual de contador\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 40,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Reset automático de contador",
    "application": "Zeramento automático ao atingir condição de fim de lote.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Reset automático de contador\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reset automático de contador\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 41,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Contador de peças",
    "application": "Contagem de peças por sensor em esteira ou máquina.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Contador de peças\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contador de peças\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 42,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Contador de ciclos",
    "application": "Registro de ciclos completos de uma máquina ou atuador.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Contador de ciclos\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contador de ciclos\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 43,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Contador de partidas de motor",
    "application": "Contagem de partidas para identificar uso excessivo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Contador de partidas de motor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contador de partidas de motor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 44,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Limite de produção",
    "application": "Parada automática ao atingir quantidade de produção configurada.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Limite de produção\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Limite de produção\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 45,
    "category": "Contadores Siemens",
    "level": "Intermediário",
    "title": "Contador para manutenção preventiva",
    "application": "Aviso de manutenção por quantidade de ciclos ou partidas.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Pulso de contagem",
      "I0.1 - Reset contador"
    ],
    "outputs": [
      "Q0.0 - Limite atingido"
    ],
    "memories": [
      "C1/CTU - Contador IEC",
      "DB_Producao.Contagem"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "C1/CTU",
      "DB_Producao.Contagem"
    ],
    "objective": "Aplicar o padrão \"Contador para manutenção preventiva\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contador para manutenção preventiva\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Pulso de contagem",
        "left": [
          "Sensor_Pulso",
          "Borda_Positiva"
        ],
        "right": "CTU_C1.CU"
      },
      {
        "label": "Rede 2 — Limite atingido",
        "left": [
          "CTU_C1.Q"
        ],
        "right": "Q0.0_Limite"
      },
      {
        "label": "Rede 3 — Reset contador",
        "left": [
          "Reset",
          "Fim_Lote"
        ],
        "right": "CTU_C1.R"
      }
    ],
    "ladder": "// Rede 1 — Pulso de contagem\n|---- [ Sensor_Pulso ] -- [ Borda_Positiva ] ----------------( CTU_C1.CU )\n// Rede 2 — Limite atingido\n|---- [ CTU_C1.Q ] ----------------( Q0.0_Limite )\n// Rede 3 — Reset contador\n|---- [ Reset ] -- [ Fim_Lote ] ----------------( CTU_C1.R )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 46,
    "category": "Sensores e Processos",
    "level": "Básico",
    "title": "Sensor de presença",
    "application": "Leitura de sensor digital para detectar peça, objeto ou posição.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Sensor de presença\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sensor de presença\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 47,
    "category": "Sensores e Processos",
    "level": "Básico",
    "title": "Sensor fim de curso",
    "application": "Validação de posição mecânica antes de avançar no ciclo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Sensor fim de curso\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sensor fim de curso\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 48,
    "category": "Sensores e Processos",
    "level": "Básico",
    "title": "Sensor mínimo e máximo",
    "application": "Controle básico com nível mínimo e máximo em reservatório.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Sensor mínimo e máximo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sensor mínimo e máximo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 49,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Controle de nível de reservatório",
    "application": "Liga/desliga bomba conforme sensores de nível e permissivos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Controle de nível de reservatório\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle de nível de reservatório\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 50,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Controle de bomba automática",
    "application": "Automação de bomba com modo automático e proteção de nível.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Controle de bomba automática\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle de bomba automática\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 51,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Alternância de duas bombas",
    "application": "Revezamento automático entre bomba 1 e bomba 2.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Alternância de duas bombas\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Alternância de duas bombas\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 52,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Bomba principal e reserva",
    "application": "Acionamento da bomba reserva em caso de falha da principal.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Bomba principal e reserva\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Bomba principal e reserva\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 53,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Esteira com sensor",
    "application": "Esteira comandada por sensor de presença e permissivos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Esteira com sensor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Esteira com sensor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 54,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Esteira com parada por acúmulo",
    "application": "Parada da esteira quando há acúmulo detectado no final da linha.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Esteira com parada por acúmulo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Esteira com parada por acúmulo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 55,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Separador de peças",
    "application": "Separação por sensor e atuador em linha de produção.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Separador de peças\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Separador de peças\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 56,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Contagem em esteira",
    "application": "Contagem de peças transportadas por sensor digital.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Contagem em esteira\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Contagem em esteira\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 57,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Cilindro avanço/recuo",
    "application": "Comando pneumático com válvula e fins de curso.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Cilindro avanço/recuo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Cilindro avanço/recuo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 58,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Ciclo pneumático simples",
    "application": "Sequência de avanço, pausa e retorno de cilindro.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Ciclo pneumático simples\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Ciclo pneumático simples\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 59,
    "category": "Sensores e Processos",
    "level": "Intermediário",
    "title": "Semáforo industrial",
    "application": "Sinalização sequencial com vermelho, amarelo e verde.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Semáforo industrial\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Semáforo industrial\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 60,
    "category": "Sensores e Processos",
    "level": "Avançado",
    "title": "Controle sequencial de processo",
    "application": "Processo automático estruturado por etapas e permissivos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Sensor entrada",
      "I0.1 - Sensor saída/fim de curso",
      "I0.2 - Permissivo"
    ],
    "outputs": [
      "Q0.0 - Atuador",
      "Q0.1 - Sinalização"
    ],
    "memories": [
      "M0.0 - Etapa processo",
      "DB_Processo.Estado"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Processo.Estado"
    ],
    "objective": "Aplicar o padrão \"Controle sequencial de processo\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle sequencial de processo\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Leitura de sensores",
        "left": [
          "Sensor_Entrada",
          "Permissivo_OK"
        ],
        "right": "M0.0_Etapa"
      },
      {
        "label": "Rede 2 — Acionamento atuador",
        "left": [
          "M0.0_Etapa",
          "Nao_FimCurso"
        ],
        "right": "Q0.0_Atuador"
      },
      {
        "label": "Rede 3 — Finalização",
        "left": [
          "FimCurso",
          "M0.0_Etapa"
        ],
        "right": "RST_Etapa"
      }
    ],
    "ladder": "// Rede 1 — Leitura de sensores\n|---- [ Sensor_Entrada ] -- [ Permissivo_OK ] ----------------( M0.0_Etapa )\n// Rede 2 — Acionamento atuador\n|---- [ M0.0_Etapa ] -- [ Nao_FimCurso ] ----------------( Q0.0_Atuador )\n// Rede 3 — Finalização\n|---- [ FimCurso ] -- [ M0.0_Etapa ] ----------------( RST_Etapa )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 61,
    "category": "IHM Siemens",
    "level": "Básico",
    "title": "Botão liga/desliga via IHM",
    "application": "Comando de equipamento a partir de botão na tela IHM Siemens.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Botão liga/desliga via IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Botão liga/desliga via IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 62,
    "category": "IHM Siemens",
    "level": "Básico",
    "title": "Sinalização de motor na IHM",
    "application": "Indicação de status de motor em operação, parado e falha.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Sinalização de motor na IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sinalização de motor na IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 63,
    "category": "IHM Siemens",
    "level": "Básico",
    "title": "Reset de falha pela IHM",
    "application": "Reconhecimento de falhas através de botão na IHM.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Reset de falha pela IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reset de falha pela IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 64,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Campo de setpoint na IHM",
    "application": "Entrada de valor numérico para tempo, velocidade ou limite.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Campo de setpoint na IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Campo de setpoint na IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 65,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tela manual/automático",
    "application": "Tela de operação com seleção de modo e comandos permitidos.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tela manual/automático\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tela manual/automático\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 66,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tela de alarmes",
    "application": "Exibição de alarmes com status, reconhecimento e instrução ao operador.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tela de alarmes\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tela de alarmes\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 67,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tela de manutenção",
    "application": "Tela com horímetro, contador de ciclos e aviso de manutenção.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tela de manutenção\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tela de manutenção\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 68,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tela de produção",
    "application": "Tela com contagem, meta, produção atual e reset de lote.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tela de produção\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tela de produção\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 69,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tela de diagnóstico",
    "application": "Visualização de entradas, saídas, permissivos e falhas.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tela de diagnóstico\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tela de diagnóstico\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 70,
    "category": "IHM Siemens",
    "level": "Intermediário",
    "title": "Tags entre CLP e IHM",
    "application": "Padronização de tags de comando, status, setpoint e alarme.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor"
    ],
    "outputs": [
      "Q0.0 - Saída comandada",
      "M0.1 - Status para IHM"
    ],
    "memories": [
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "tags": [
      "IHM_CMD_Liga",
      "IHM_CMD_Reset",
      "IHM_SP_Valor",
      "Q0.0",
      "M0.1",
      "DB_IHM.Cmd",
      "DB_IHM.Status",
      "DB_IHM.Alarme"
    ],
    "objective": "Aplicar o padrão \"Tags entre CLP e IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Tags entre CLP e IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Comando pela IHM",
        "left": [
          "IHM_CMD",
          "Modo_Remoto",
          "Permissivo_OK"
        ],
        "right": "M0.0_Comando"
      },
      {
        "label": "Rede 2 — Status para tela",
        "left": [
          "M0.0_Comando"
        ],
        "right": "DB_IHM.Status"
      },
      {
        "label": "Rede 3 — Reset/alarme",
        "left": [
          "IHM_Reset",
          "Falha_Ativa"
        ],
        "right": "ACK_Alarme"
      }
    ],
    "ladder": "// Rede 1 — Comando pela IHM\n|---- [ IHM_CMD ] -- [ Modo_Remoto ] -- [ Permissivo_OK ] ----------------( M0.0_Comando )\n// Rede 2 — Status para tela\n|---- [ M0.0_Comando ] ----------------( DB_IHM.Status )\n// Rede 3 — Reset/alarme\n|---- [ IHM_Reset ] -- [ Falha_Ativa ] ----------------( ACK_Alarme )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 71,
    "category": "Inversor Siemens",
    "level": "Intermediário",
    "title": "Liga/desliga de inversor por CLP",
    "application": "Comando de habilitação do inversor por saída digital ou palavra de comando.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Liga/desliga de inversor por CLP\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Liga/desliga de inversor por CLP\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 72,
    "category": "Inversor Siemens",
    "level": "Intermediário",
    "title": "Sentido horário/anti-horário",
    "application": "Seleção do sentido de giro do motor via CLP.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Sentido horário/anti-horário\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Sentido horário/anti-horário\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 73,
    "category": "Inversor Siemens",
    "level": "Intermediário",
    "title": "Reset de falha do inversor",
    "application": "Reset de fault do inversor por botão físico ou IHM.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Reset de falha do inversor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Reset de falha do inversor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 74,
    "category": "Inversor Siemens",
    "level": "Intermediário",
    "title": "Seleção de velocidade fixa",
    "application": "Seleção de velocidades pré-definidas através de entradas digitais.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Seleção de velocidade fixa\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Seleção de velocidade fixa\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 75,
    "category": "Inversor Siemens",
    "level": "Intermediário",
    "title": "Controle por entradas digitais",
    "application": "Comando do inversor Siemens usando DI e comum de comando.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Controle por entradas digitais\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle por entradas digitais\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 76,
    "category": "Inversor Siemens",
    "level": "Avançado",
    "title": "Controle por saída analógica",
    "application": "Envio de referência de velocidade por sinal analógico 0–10 V ou 4–20 mA.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Controle por saída analógica\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle por saída analógica\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 77,
    "category": "Inversor Siemens",
    "level": "Avançado",
    "title": "Controle via Profinet",
    "application": "Comando e leitura do inversor Siemens em rede Profinet.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Controle via Profinet\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Controle via Profinet\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 78,
    "category": "Inversor Siemens",
    "level": "Avançado",
    "title": "Setpoint de velocidade pela IHM",
    "application": "Operador define velocidade na IHM e CLP envia referência ao inversor.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Setpoint de velocidade pela IHM\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Setpoint de velocidade pela IHM\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 79,
    "category": "Inversor Siemens",
    "level": "Avançado",
    "title": "Leitura de status do inversor",
    "application": "Leitura de pronto, rodando, falha, sentido e velocidade real.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Leitura de status do inversor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Leitura de status do inversor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 80,
    "category": "Inversor Siemens",
    "level": "Avançado",
    "title": "Diagnóstico de falha do inversor",
    "application": "Interpretação de fault/status para orientar manutenção.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Habilita inversor",
      "I0.1 - Sentido",
      "I0.2 - Reset falha"
    ],
    "outputs": [
      "Q0.0 - Run/Enable",
      "Q0.1 - Sentido"
    ],
    "memories": [
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "DB_INV.CmdWord",
      "DB_INV.StatusWord",
      "DB_INV.SpeedSetpoint"
    ],
    "objective": "Aplicar o padrão \"Diagnóstico de falha do inversor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Diagnóstico de falha do inversor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Habilitação do inversor",
        "left": [
          "Permissivo_OK",
          "Nao_Falha_INV",
          "CMD_Liga"
        ],
        "right": "INV_Enable"
      },
      {
        "label": "Rede 2 — Sentido e reset",
        "left": [
          "CMD_Sentido",
          "Modo_Remoto"
        ],
        "right": "INV_Dir"
      },
      {
        "label": "Rede 3 — Setpoint/status",
        "left": [
          "IHM_SP_Valido",
          "INV_Pronto"
        ],
        "right": "DB_INV.SpeedSetpoint"
      }
    ],
    "ladder": "// Rede 1 — Habilitação do inversor\n|---- [ Permissivo_OK ] -- [ Nao_Falha_INV ] -- [ CMD_Liga ] ----------------( INV_Enable )\n// Rede 2 — Sentido e reset\n|---- [ CMD_Sentido ] -- [ Modo_Remoto ] ----------------( INV_Dir )\n// Rede 3 — Setpoint/status\n|---- [ IHM_SP_Valido ] -- [ INV_Pronto ] ----------------( DB_INV.SpeedSetpoint )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 81,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Emergência com reset",
    "application": "Lógica de parada por emergência com reset controlado.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Emergência com reset\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Emergência com reset\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 82,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Bloqueio por falha",
    "application": "Bloqueia operação quando uma falha crítica estiver ativa.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Bloqueio por falha\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Bloqueio por falha\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 83,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Intertravamento de segurança",
    "application": "Permissivos de porta, emergência, proteção e falha antes do comando.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Intertravamento de segurança\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Intertravamento de segurança\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 84,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Falha com reconhecimento",
    "application": "Falha permanece registrada até reconhecimento do operador.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Falha com reconhecimento\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Falha com reconhecimento\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 85,
    "category": "Segurança e Diagnóstico",
    "level": "Básico",
    "title": "Alarme sonoro",
    "application": "Acionamento de sirene ou buzzer por condição de falha.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Alarme sonoro\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Alarme sonoro\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 86,
    "category": "Segurança e Diagnóstico",
    "level": "Básico",
    "title": "Alarme visual",
    "application": "Acionamento de sinaleiro para indicar atenção ou falha.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Alarme visual\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Alarme visual\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 87,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Histórico simples de falha",
    "application": "Registro básico do último alarme em memória ou DB.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Histórico simples de falha\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Histórico simples de falha\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 88,
    "category": "Segurança e Diagnóstico",
    "level": "Básico",
    "title": "Diagnóstico de entrada",
    "application": "Tela ou lógica para confirmar estado das entradas digitais.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Diagnóstico de entrada\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Diagnóstico de entrada\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 89,
    "category": "Segurança e Diagnóstico",
    "level": "Básico",
    "title": "Diagnóstico de saída",
    "application": "Teste controlado e indicação das saídas digitais.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Diagnóstico de saída\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Diagnóstico de saída\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 90,
    "category": "Segurança e Diagnóstico",
    "level": "Intermediário",
    "title": "Modo manutenção",
    "application": "Modo especial para teste de atuadores com permissivos reduzidos e controleado.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Emergência OK",
      "I0.1 - Reset falha",
      "I0.2 - Permissivo segurança"
    ],
    "outputs": [
      "Q0.0 - Habilita sistema",
      "Q0.1 - Alarme"
    ],
    "memories": [
      "M0.0 - Falha latched",
      "DB_Alarmes.Ativo"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "I0.2",
      "Q0.0",
      "Q0.1",
      "M0.0",
      "DB_Alarmes.Ativo"
    ],
    "objective": "Aplicar o padrão \"Modo manutenção\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Modo manutenção\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Permissivos de segurança",
        "left": [
          "Emergencia_OK",
          "Porta_OK",
          "Reset_OK"
        ],
        "right": "M0.0_Seguro"
      },
      {
        "label": "Rede 2 — Bloqueio por falha",
        "left": [
          "Falha_Ativa"
        ],
        "right": "M0.1_Bloqueio"
      },
      {
        "label": "Rede 3 — Habilitação geral",
        "left": [
          "M0.0_Seguro",
          "Nao_Bloqueio"
        ],
        "right": "Q0.0_Enable"
      }
    ],
    "ladder": "// Rede 1 — Permissivos de segurança\n|---- [ Emergencia_OK ] -- [ Porta_OK ] -- [ Reset_OK ] ----------------( M0.0_Seguro )\n// Rede 2 — Bloqueio por falha\n|---- [ Falha_Ativa ] ----------------( M0.1_Bloqueio )\n// Rede 3 — Habilitação geral\n|---- [ M0.0_Seguro ] -- [ Nao_Bloqueio ] ----------------( Q0.0_Enable )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 91,
    "category": "Boas Práticas no TIA Portal",
    "level": "Básico",
    "title": "Uso de PLC Tags",
    "application": "Organização de nomes, endereços e comentários das variáveis do CLP.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Uso de PLC Tags\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Uso de PLC Tags\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 92,
    "category": "Boas Práticas no TIA Portal",
    "level": "Intermediário",
    "title": "Organização de DB",
    "application": "Criação de blocos de dados para comandos, status, setpoints e alarmes.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Organização de DB\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Organização de DB\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 93,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "Bloco FB para motor",
    "application": "Criação de bloco reutilizável para motor com Instance DB.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Bloco FB para motor\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Bloco FB para motor\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 94,
    "category": "Boas Práticas no TIA Portal",
    "level": "Intermediário",
    "title": "Bloco FC para lógica repetitiva",
    "application": "Uso de FCs para padronizar trechos de lógica sem memória própria.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Bloco FC para lógica repetitiva\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Bloco FC para lógica repetitiva\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 95,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "Instance DB",
    "application": "Banco de dados de instância para armazenar estados internos de FB.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Instance DB\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Instance DB\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 96,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "Multi-instance",
    "application": "Vários FBs internos organizados dentro de um único bloco de instância.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Multi-instance\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Multi-instance\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 97,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "UDT para motores",
    "application": "Tipo de dado estruturado para padronizar comandos e estados de motores.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"UDT para motores\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"UDT para motores\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 98,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "UDT para alarmes",
    "application": "Estrutura padronizada para falhas, reconhecimentos e mensagens.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"UDT para alarmes\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"UDT para alarmes\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 99,
    "category": "Boas Práticas no TIA Portal",
    "level": "Intermediário",
    "title": "Organização por OB1, FC e FB",
    "application": "Separação do projeto em blocos por função, equipamento e processo.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Organização por OB1, FC e FB\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Organização por OB1, FC e FB\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  },
  {
    "id": 100,
    "category": "Boas Práticas no TIA Portal",
    "level": "Avançado",
    "title": "Estrutura padrão de projeto TIA Portal",
    "application": "Modelo completo para iniciar projetos Siemens de forma profissional.",
    "plc": "Siemens S7-1200 / S7-1500",
    "software": "TIA Portal",
    "language": "LAD",
    "inputs": [
      "I0.0 - Exemplo entrada",
      "I0.1 - Exemplo reset"
    ],
    "outputs": [
      "Q0.0 - Exemplo saída"
    ],
    "memories": [
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "tags": [
      "I0.0",
      "I0.1",
      "Q0.0",
      "DB_Padrao.Cmd",
      "DB_Padrao.Status",
      "UDT_Equipamento"
    ],
    "objective": "Aplicar o padrão \"Estrutura padrão de projeto TIA Portal\" em projeto Siemens, mantendo organização, segurança lógica e facilidade de manutenção.",
    "explanation": "No TIA Portal, o padrão \"Estrutura padrão de projeto TIA Portal\" deve ser montado em redes separadas, com PLC Tags comentadas, permissivos claros e estados de comando/status bem definidos. A lógica serve como base didática e pode ser adaptada para S7-1200 e S7-1500.",
    "practicalTest": "Teste primeiro em simulação, monitore as PLC Tags online, valide entradas, permissivos, saídas e somente depois energize a carga real na bancada.",
    "checklist": [
      "Criar PLC Tags com comentários",
      "Separar cada função por rede LAD",
      "Validar permissivos antes da saída",
      "Testar reset/falha",
      "Monitorar online no TIA Portal"
    ],
    "commonErrors": [
      "Usar endereços sem comentário",
      "Misturar comando, status e falha na mesma rede",
      "Não prever reset/reconhecimento",
      "Não testar intertravamentos antes da carga real"
    ],
    "rungs": [
      {
        "label": "Rede 1 — Entrada padronizada",
        "left": [
          "Tag_Entrada",
          "Permissivo"
        ],
        "right": "DB.Cmd"
      },
      {
        "label": "Rede 2 — Processamento em bloco",
        "left": [
          "DB.Cmd",
          "Modo_Auto"
        ],
        "right": "FB_Equipamento"
      },
      {
        "label": "Rede 3 — Status estruturado",
        "left": [
          "FB_Equipamento.Done"
        ],
        "right": "DB.Status"
      }
    ],
    "ladder": "// Rede 1 — Entrada padronizada\n|---- [ Tag_Entrada ] -- [ Permissivo ] ----------------( DB.Cmd )\n// Rede 2 — Processamento em bloco\n|---- [ DB.Cmd ] -- [ Modo_Auto ] ----------------( FB_Equipamento )\n// Rede 3 — Status estruturado\n|---- [ FB_Equipamento.Done ] ----------------( DB.Status )",
    "tiaSteps": [
      "Criar ou revisar as PLC Tags",
      "Inserir a lógica LAD em rede própria",
      "Adicionar comentários de rede",
      "Compilar o bloco",
      "Simular/monitorar online",
      "Transferir para o CLP após validação"
    ]
  }
];
