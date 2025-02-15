<?php
    namespace app\Service;
    use app\Models\Aluno;
    use app\DAO\AlunoDAO;

    class AlunoService{
        private $dao;
        public function __construct(){
            $this->dao = new AlunoDAO();
        }
        public function criar($nome, $genero){
            $aluno = new Aluno($nome,$genero);
            $this->dao->save($aluno);

            return ['sucess'=>'Aluno criado com sucesso'];
        }

    }
?>