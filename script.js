window.onload = function() {
    const date = new Date();
    // Cria uma semente baseada no dia, mês e ano
    // Isso garante que a "aleatoriedade" seja a mesma para todos durante 24h
    const daySeed = date.getDate() + (date.getMonth() + 1) * 31 + date.getFullYear();
    
    // Função para gerar texto aleatório baseado na semente do dia
    function generateDailyKey(seed) {
        const characters = 'ABCDEF0123456789';
        let result = 'ECLIPSE-';
        
        // Um pequeno segredo matemático para embaralhar
        let pseudoRandom = seed * 147; 
        
        for (let i = 0; i < 12; i++) {
            pseudoRandom = (pseudoRandom * 9301 + 49297) % 233280;
            const index = Math.floor((pseudoRandom / 233280) * characters.length);
            result += characters.charAt(index);
        }
        return result;
    }

    // Tenta pegar a chave já salva no navegador
    let savedKey = localStorage.getItem('eclipse_key');
    let savedDate = localStorage.getItem('eclipse_key_date');
    const todayLabel = date.toDateString(); // Ex: "Fri Jan 09 2026"

    // Se não existir chave ou se a chave salva for de outro dia, gera uma nova
    if (!savedKey || savedDate !== todayLabel) {
        const newKey = generateDailyKey(daySeed);
        localStorage.setItem('eclipse_key', newKey);
        localStorage.setItem('eclipse_key_date', todayLabel);
        savedKey = newKey;
    }

    // Exibe a chave na tela
    document.getElementById('keyText').innerText = savedKey;
};
