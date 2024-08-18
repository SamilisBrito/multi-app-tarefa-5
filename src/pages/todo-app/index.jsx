// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useEffect, useState } from "react";
// Importa a biblioteca axios para fazer requisições HTTP.
import { Button, Container, Input, Title } from "../../assets/style-global";
import { Content } from "../../components/content";
import useFetch from "../../custom-hooks/useFetch";
import { EditInput, TaskItem, TaskList } from "./style";
import { Head } from "../../custom-hooks/Head";
// Importa a biblioteca styled-components para criar componentes estilizados.

// Define a URL da API que será usada para obter, adicionar, editar e excluir tarefas.
const API_URL = "http://localhost:3000/tasks";

// Define o componente funcional TodoApp.
export function TodoApp() {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(""); // Estado para a nova tarefa a ser adicionada.

  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(""); // Estado para o texto da tarefa que está sendo editada.

  const { data, loading, error, request } = useFetch();
  const { data: dataAdd, error: errorAdd, request: requestAdd } = useFetch();
  const {
    data: dataDelete,
    error: errorDelete,
    request: requestDelete,
  } = useFetch();
  const {
    data: dataUpdate,
    error: errorUpdate,
    request: requestUpdate,
  } = useFetch();

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  useEffect(() => {
    fetchTasks();
  }, [dataAdd, dataDelete, dataUpdate, request]);

  // Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.
  async function fetchTasks() {
    await request(API_URL); // Faz uma requisição GET para obter as tarefas.
  }

  // Função que adiciona uma nova tarefa.
  async function addTask() {
    if (task) {
      // Verifica se o campo da tarefa não está vazio.
      const newTask = { text: task }; // Cria um objeto de tarefa com o texto fornecido.
      await requestAdd(API_URL, {
        method: `POST`,
        body: JSON.stringify(newTask),
      });
      fetchTasks();
      setTask(""); // Limpa o campo de entrada.
    }
  }

  // Função que exclui uma tarefa.
  const deleteTask = async (id) => {
    await requestDelete(`${API_URL}/${id}`, {
      method: `DELETE`,
    }); // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
    fetchTasks();
  };

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText }; // Cria um objeto de tarefa com o texto atualizado.
    await requestUpdate(`${API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTask),
    }); // Faz uma requisição PUT para atualizar a tarefa.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(""); // Limpa o texto da tarefa em edição.
    fetchTasks();
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <>
      <Head
        title="Todo App"
        description="Todo App: Manage your tasks efficiently with an intuitive interface."
      />
      <Container>
        <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask} disabled={!task.length != 0}>
          Add Task
        </Button>
        {errorAdd ||
          errorDelete ||
          (errorUpdate && <p>Error executing action</p>)}
        <TaskList>
          <Content
            error={error}
            loading={loading}
            data={data}
            renderContent={(data) =>
              data.map((task) => (
                <TaskItem key={task.id}>
                  {editingTaskId === task.id ? (
                    <>
                      <EditInput
                        type="text"
                        value={editingTaskText}
                        onChange={(e) => setEditingTaskText(e.target.value)}
                      />
                      <button onClick={() => updateTask(task.id)}>Save</button>
                    </>
                  ) : (
                    <>
                      {task.text}
                      <div>
                        <button onClick={() => editTask(task.id, task.text)}>
                          Edit
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </TaskItem>
              ))
            }
            errorMessage={error}
          />
        </TaskList>
      </Container>
    </>
  );
}
