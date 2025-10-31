const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/tasks");
    const data = await response.json();
    console.log(data);
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
          <div className="flex flex-col p-3 border border-slate-800 px-5 hover:bg-slate-700 transition-all duration-200" key={task.id}>
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-sm">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
