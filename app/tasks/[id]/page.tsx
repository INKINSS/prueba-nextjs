const fetchData = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const TaskPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const taskData = await fetchData(id);

  return (
    <div>
      <h1>titulo: {taskData.title}</h1>
      <p>descripcion: {taskData.description}</p>
    </div>
  );
};

export default TaskPage;
