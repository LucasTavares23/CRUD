
const miniTwitter = {
    usuarios: [
        {
            username: 'amazpurple',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'amazpurple',
            content: 'meu primeiro tweet'
        }
    ]
};

// CREATE
function criapost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}

criapost({ owner: 'amazpurple', content: 'segundo tweet' });
criapost({ owner: 'amazpurple', content: 'terceiro tweet' });
console.log(miniTwitter.posts);

// READ
function pegaPosts() {
    return miniTwitter.posts;
}

console.log(pegaPosts());
// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoConteudo;
}
atualizaContentDoPost(1, 'Novo Conteudo do post');
console.log(pegaPosts());

// DELETE
function apagaPost(id) {
    const listaDePostAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    });
    console.log(listaDePostAtualizada);
}
