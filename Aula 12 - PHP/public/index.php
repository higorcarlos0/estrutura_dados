<?php
    require_once '../vendor/autoload.php';

    use routes\Routes;
    use App\Controllers\AlunoController;

    $routes = new Routes();

    //definindo rotas
    $routes->add('POST','api/aluno', [new AlunoController(),'criar']);

$routes->add('GET','/hello', [new AlunoController(),'']);

    $routes->handleRequest()
?>