import Sidebar from "./Sidebar";

function Content() {
  return (
    <div aria-label="Content" className="bg-neutral-200 p-4 h-screen flex justify-center dark:bg-slate-600 dark:text-neutral-200">
      <Sidebar />
      <div className="bg-slate-300 mx-4 p-8 text-center overflow-y-scroll dark:bg-slate-700" >
      LOGIN Para iniciar sesión, ingrese el nombre de Usuario (correo electrónico) y la contraseña en los campos indicados (fig. 1.1). Puede
      consultar los requerimientos mínimos del sistema en el icono(fig. 1.1).
      </div>
    </div>
  );
}

export default Content;
