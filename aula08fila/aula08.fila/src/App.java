import java.util.LinkedList;
import java.util.Queue;

public class App {
    public static void main(String[] args) throws Exception {
        //criando uma lista vazia
        Queue <String> veiculos = new LinkedList<>();

        //adicionando elementos na fila
        veiculos.offer( "gol");
        veiculos.offer("onix");
        veiculos.offer("kwid");
        veiculos.offer("hb20");

        //qual o tamanho da fila
        System.out.println("Quantidade de elementos na fila: " + veiculos.size());

        //a fila esta vazia? se sim true, senão false
        System.out.println("Tem veiculos: " + veiculos.isEmpty());

        //quem esta no inicio da fila
        System.out.println("o primeiro veiculo da fila é: "+veiculos.peek());

        //percorrer uma lista
        
        for (String carro:veiculos){
                System.out.println(carro);
            }

        //removendo o elemento no inicio da fila
        System.out.println("removendo o veiculo: "+veiculos.poll());



    }
}
