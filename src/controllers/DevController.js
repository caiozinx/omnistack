const axios = require('axios');

module.exports = {
    async store(req, res){
        const { username } = req.body;

        const response = axios.get('');
        
        return await res.json({ ok: true });
    }
}