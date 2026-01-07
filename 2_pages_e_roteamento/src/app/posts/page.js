
import Link from 'next/link'

const PostsPage = () => {

const postsIds = [1, 2, 3];


// [{ id: 1, title: 'Meu primeiro post' ,category: 'geral'},



  return (

    <div  className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
        <h1 className="text-3xl font-bold">Blog</h1>


        <ul className="flex flex-col gap-4">
          {postsIds.map((id) => (
            <li key={id}>
              <Link 
                href={`/posts/${id}`}
                className="text-blue-600 hover:underline"
              >
                Ver post {id}
              </Link>
            </li>
          ))}

        </ul>
    </div>
  );
}

export default PostsPage;
