// spells.js - Lista de Feitiços, Defesas, Casas e Varinhas do Duelo Bruxo

const HOUSES = [
    { id: 'grifinoria', name: 'Grifinória', color: '#ae0001', secondary: '#d3a625', bonus: 'Coragem: +5% de dano' },
    { id: 'sonserina', name: 'Sonserina', color: '#1a472a', secondary: '#aaaaaa', bonus: 'Ambição: Cooldown reduzido' },
    { id: 'corvinal', name: 'Corvinal', color: '#222f5b', secondary: '#5d647b', bonus: 'Sabedoria: Defesas absorvem mais' },
    { id: 'lufalufa', name: 'Lufa-Lufa', color: '#ecb939', secondary: '#372e29', bonus: 'Lealdade: Regeneração' }
];

const ATTACK_SPELLS = [
    { name: "Avada Kedavra", level: 10, isCurse: true, desc: "Mata instantaneamente se atingir o alvo." },
    { name: "Sectumsempra", level: 9, isCurse: true, desc: "Cortes profundos e letais." },
    { name: "Crucio", level: 9, isCurse: true, desc: "Causa dor extrema e dano massivo." },
    { name: "Bombarda Maxima", level: 8, isCurse: false, desc: "Explosão de altíssima intensidade." },
    { name: "Confringo", level: 7, isCurse: false, desc: "Feitiço de explosão violenta." },
    { name: "Reducto", level: 7, isCurse: false, desc: "Desintegra obstáculos e atinge o alvo." },
    { name: "Stupefy", level: 6, isCurse: false, desc: "Atordoamento poderoso." },
    { name: "Bombarda", level: 6, isCurse: false, desc: "Explosão direta." },
    { name: "Diffindo", level: 5, isCurse: false, desc: "Corte mágico preciso." },
    { name: "Expulso", level: 5, isCurse: false, desc: "Arremessa o oponente longe." },
    { name: "Incendio", level: 5, isCurse: false, desc: "Chamas intensas." },
    { name: "Depulso", level: 4, isCurse: false, desc: "Empurra o alvo com força." },
    { name: "Flipendo", level: 4, isCurse: false, desc: "Azaração de repulsão." },
    { name: "Impedimenta", level: 4, isCurse: false, desc: "Retarda os movimentos do oponente." },
    { name: "Petrificus Totalus", level: 6, isCurse: false, desc: "Paralisa temporariamente o corpo." },
    { name: "Incarcerous", level: 4, isCurse: false, desc: "Dispara cordas de amarras." },
    { name: "Locomotor Mortis", level: 3, isCurse: false, desc: "Une as pernas do oponente." },
    { name: "Rictusempra", level: 3, isCurse: false, desc: "Azaração de cócegas." },
    { name: "Tarantallegra", level: 3, isCurse: false, desc: "Faz as pernas do oponente dançarem." },
    { name: "Densaugeo", level: 2, isCurse: false, desc: "Faz os dentes crescerem descontroladamente." },
    { name: "Furnunculus", level: 2, isCurse: false, desc: "Faz furúnculos surgirem." },
    { name: "Langlock", level: 3, isCurse: false, desc: "Gruda a língua do oponente no céu da boca." },
    { name: "Levicorpus", level: 5, isCurse: false, desc: "Suspende o oponente pelos tornozelos." },
    { name: "Waddiwasi", level: 3, isCurse: false, desc: "Atira pequenos objetos em alta velocidade." }
];

const DEFENSE_SPELLS = [
    { name: "Estátua Mágica", level: 10, isStatue: true, desc: "Proteção suprema contra qualquer ataque." },
    { name: "Protego Maxima", level: 9, isStatue: false, desc: "Barreira mágica reforçada." },
    { name: "Protego", level: 7, isStatue: false, desc: "Escudo mágico clássico." },
    { name: "Esquiva Ágil", level: 6, isStatue: false, desc: "Movimento rápido." },
    { name: "Finite Incantatem", level: 5, isStatue: false, desc: "Contra-feitiço para azarações." },
    { name: "Liberacorpus", level: 5, isStatue: false, desc: "Contra-feitiço para Levicorpus." },
    { name: "Aguamenti", level: 4, isStatue: false, desc: "Jato de água contra fogo." }
];