@echo off
echo ===================================================
echo Starting Job Vani (Frontend + Django Admin Backend)
echo ===================================================

start "JobVani Django Backend (Port 8000)" cmd /k "cd backend && C:\Users\heman\AppData\Local\Programs\Python\Python313\python.exe manage.py runserver 127.0.0.1:8000"

timeout /t 2 /nobreak >nul

start "JobVani Frontend Server (Port 3000)" cmd /k "node -e ""const http = require('http'), fs = require('fs'), path = require('path'); const server = http.createServer((req, res) => { let file = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]); fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end('Not found'); } else { const ext = path.extname(file); const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png' }[ext] || 'text/plain'; res.writeHead(200, { 'Content-Type': mime }); res.end(data); } }); }); server.listen(3000, () => console.log('JobVani Frontend running on http://localhost:3000'));"""

timeout /t 2 /nobreak >nul

echo Opening browser...
start http://localhost:3000
start http://127.0.0.1:8000/admin/

echo.
echo Both servers are active!
echo Admin Portal : http://127.0.0.1:8000/admin/
echo Public Website: http://localhost:3000
echo ===================================================
pause

