import java.util.Stack;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Stack<String>pilha_pratos = new Stack<>();

        //adicionando pratos
        pilha_pratos.push("prato laranja");
        pilha_pratos.push("prato azul");
        pilha_pratos.push("prato verde");
        pilha_pratos.push("prato vermelho");

        //tamanho da plinha (qntd de pratos)
        int tam = pilha_pratos.size();
        System.out.println("o tamanho da plinha é: " + tam);

        //verificar o topo da pilha
        String topo = pilha_pratos.peek();
        System.out.println("o elemento que esta no topo é: " + topo);

        //removendo o elemento que esta no topo
        String rem = pilha_pratos.pop();
        System.out.println("o elemento removido foi: " + rem);

        //verificar o topo da pilha
         topo = pilha_pratos.peek();
        System.out.println("o elemento que esta no topo é: " + topo);

        System.out.println("utilizando o conceito lifo (ultimo a entrar, primeiro a sair");

        for (int i=pilha_pratos.size()-1;i>=0;i--){
            System.out.println(pilha_pratos.get(i));
        }
    }
}
