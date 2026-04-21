/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };

    const lines = text.split(/\r?\n/);

    let currentAgents = [];
    let hasStartedDirectives = false;

    for (let rawLine of lines) {
        let line = rawLine.trim();

        // baris kosong = akhir grup
        if (!line) {
            currentAgents = [];
            hasStartedDirectives = false;
            continue;
        }

        if (line.startsWith('#')) continue;

        const commentIndex = line.indexOf('#');
        if (commentIndex !== -1) {
            line = line.slice(0, commentIndex).trim();
            if (!line) continue;
        }

        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;

        const key = line.slice(0, colonIndex).trim().toLowerCase();
        const value = line.slice(colonIndex + 1).trim();

        if (key === 'user-agent') {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            // kalau sebelumnya sudah mulai directive,
            // berarti ini grup baru
            if (hasStartedDirectives) {
                currentAgents = [agent];
                hasStartedDirectives = false;
            } else {
                currentAgents.push(agent);
            }

            continue;
        }

        if (key === 'sitemap') {
            result.Sitemap.push(value);
            continue;
        }

        // abaikan directive kalau belum ada user-agent
        if (currentAgents.length === 0) continue;

        if (key === 'allow') {
            hasStartedDirectives = true;
            for (const agent of currentAgents) {
                result.agents[agent].Allow.push(value);
            }
            continue;
        }

        if (key === 'disallow') {
            hasStartedDirectives = true;

            // Disallow: kosong berarti tidak ada larangan
            if (value === '') continue;

            for (const agent of currentAgents) {
                result.agents[agent].Disallow.push(value);
            }
        }
    }

    return result;
}

module.exports = parseRobots;


