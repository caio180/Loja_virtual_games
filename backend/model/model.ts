import connection from "./connection.js";
import type { RowDataPacket, ResultSetHeader } from "mysql2";

class Model{
    private jogos = [
{
   id: 1, 
   nome: "Minecraft",
   preco: 99.90,
   estoque: 10,
   plataforma: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
   genero: "Aventura",
   formato: "Virtual"
},
{
   id: 2,
   nome: "GTA V",
   preco: 149.90,
   estoque: 5,
   plataforma: ["PC", "Xbox 360", "PlayStation 3"],
   genero: "Ação",
   formato: "Mídia física"
},
{
   id: 3,
   nome:"Red Dead Redemption 2",
   preco: 199.90,
   estoque: 0,
   plataforma: ["PC", "Xbox 360", "PlayStation 3"],
   genero: "Ação",
   formato: "Mídia física"
}
];
    private formato_jogos: Record<number, string> = {
            1: 'Virtual',
            2: 'Midia Física'
        };
    constructor(){
        
    }
    async JogosDisponiveis() {
        const [jogos_busca] = await connection.query<RowDataPacket[]>('SELECT * FROM jogos;' );
        const organizar_jogos = jogos_busca.map(jogo => ({...jogo, formato: this.formato_jogos[jogo.formato]
    }));
        return organizar_jogos;
    }
    PegarJogosId(id:number){
        return this.jogos.find(jogo => jogo.id === id);
    }
    PostarJogo(jogo:any){
        this.jogos.push(jogo);
    }
}
export default Model;