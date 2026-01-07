
const PostsPage =  ({params})  => {
   
//  Load de dados do post usando o parametro id

const id = params.id;


  return (
    <div>
        <h1>Titulo: Post {id} </h1>
        <p>Conteúdo do post {id}...</p>

    </div>

  );
  
};

export default PostsPage;


