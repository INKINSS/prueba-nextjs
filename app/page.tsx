import Link from "next/link";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/tasks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const HomePage = async () => {
  const dataTask = await fetchData();

  return (
    <div>
      <h1 className="font-bold text-2xl text-center py-8">listado de tareas</h1>
      <div>
        {dataTask.map((task: any) => (
          <Link href={`/tasks/${task.id}`} className="flex flex-col p-3 border border-slate-800 px-5 hover:bg-slate-700 transition-all duration-200 cursor-pointer" key={task.id}>
            <h2 className="text-xl font-bold">{task.id}.{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
