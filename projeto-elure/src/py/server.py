from http.server import SimpleHTTPRequestHandler, HTTPServer


PORT = 8000


class MyHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='.', **kwargs)

with HTTPServer(('0.0.0.0', PORT), MyHandler) as server:
    print(f'Servidor está ouvindo na porta {PORT}')
    # Inicie o servidor indefinidamente
    server.serve_forever()
