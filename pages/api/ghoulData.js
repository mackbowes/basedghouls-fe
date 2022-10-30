const fs = require('fs');
import path from 'path';

export default function handler(req, res) {
    const ghoulId = req.body.id;
    const directory = path.join(process.cwd(), "data/raw-json");
    const data = JSON.parse(fs.readFileSync(`${directory}/${ghoulId}.json`));
    res.status(200).json({data});
}