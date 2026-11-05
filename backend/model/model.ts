class Model{
    private jogos = [
{
   nome: "Minecraft",
   preco: 99.90,
   estoque: 10,
   plataforma: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
   genero: "Aventura",
   formato: "Virtual"
},
{
   nome: "GTA V",
   preco: 149.90,
   estoque: 5,
   plataforma: ["PC", "Xbox 360", "PlayStation 3"],
   genero: "Ação",
   formato: "Mídia física"
},
{
   nome:"Red Dead Redemption 2",
   preco: 199.90,
   estoque: 0,
   plataforma: ["PC", "Xbox 360", "PlayStation 3"],
   genero: "Ação",
   formato: "Mídia física"
}
];
    constructor(){
        
    }
    JogosDisponiveis(){
        return this.jogos;
    }
}
export default Model;