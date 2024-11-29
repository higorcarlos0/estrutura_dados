<?php 
    namespace Routes;
    use App\Controllers\AlunoController;
    class Routes {

        private $routes = [];

        public function add ($method,$path, $action){
            $this->routes[]=[
                'method'=>$method,
                'path'=>$path,
                'action'=>$action,
            ];
        }
        
        public function handleRequest(){
            $method = $_SERVER['REQUEST_METHOD'];
            $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

            //verificar as rotas
            foreach($this -> routes as $r){
                if ($r['method'] == $method && $r ['path'] == $path){
                    // é metodo ou função dinamica que permite invocar funções ou metodos de uma classe

                    //action é um atributo que meciona "qual é a classe"

                    call_user_func($r['action']);
                    return;
            }
        }

        http_response_code(404);
        echo json_encode(['error'=>'Rota não encontrada']);
    }
}
?>