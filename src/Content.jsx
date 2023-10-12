import Sidebar from "./Sidebar";
import Image from "./Image";

function Content() {
  return (
    <div aria-label="Content" className="bg-neutral-200 p-4 h-screen flex justify-center dark:bg-slate-600 dark:text-neutral-200">
      <Sidebar />
      <div className="bg-slate-300 mx-4 p-8 text-center overflow-y-scroll dark:bg-slate-700">
        <h2 id="login" className="font-bold text-xl dark:text-slate-200">
          LOGIN
        </h2>
        <p>
          Para iniciar sesión, ingrese el nombre de Usuario (correo electrónico) y la contraseña en los campos indicados (fig. 1.1). Puede
          consultar los requerimientos mínimos del sistema en el icono (fig. 1.1).
        </p>
        <Image alt="fig. 1.1" caption="Fig. 1.1: Imagen del login"></Image>
        <p>
          En caso de olvidar su contraseña, seleccione recuperar Contraseña, ingrese el nombre de Usuario y seleccione Continuar. (Fig. 1.2)
        </p>
        <Image alt="fig. 1.2" caption="Fig. 1.2: Imagen de recuperación"></Image>
        <p>
          Posteriormente recibirá un correo electrónico; ingrese y seleccione la palabra “aquí” (fig. 1.3), la cual lo direcciona a una
          nueva página en donde debe ingresar su nueva contraseña, considere que la clasificación “fuerte”, considera la combinación de
          letras y números con un mínimo de 8 caracteres y un máximo de 20. Ej.: Ejemplo001 (fig. 1.4)
        </p>
        <Image alt="fig. 1.3" caption="Fig. 1.3: Imagen de correo"></Image>
        <Image alt="fig. 1.4" caption="Fig. 1.4: Imagen de creación de contraseña"></Image>
        <p>Para concluir seleccione el icono Enviar, y visualice un mensaje de confirmación (fig. 1.5).</p>
        <Image alt="fig. 1.5" caption="Fig. 1.5: Imagen de confirmación"></Image>
        <p>Después de iniciar sesión verá abiertas las ventanas Unidad1 y Notificaciones2. (fig. 1.6) </p>
        <Image alt="fig. 1.6" caption="Fig. 1.6: Imagen de inicio"></Image>
        <p>
          En la parte inferior de la pantalla, se muestran las ventanas abiertas en primer o segundo plano, agrupadas por módulo. Cuenta con
          cinco módulos fijos en la barra, cada uno maximiza o minimiza el panel al que hace referencia. Menú lateral
          <span className="text-red-600 text-xs">1</span>, Unidades
          <span className="text-red-600 text-xs">2</span>, Última posición
          <span className="text-red-600 text-xs">3</span>, Geoelementos
          <span className="text-red-600 text-xs">4</span>, y Notificaciones
          <span className="text-red-600 text-xs">5</span>.
        </p>
        <Image alt="fig 1. 2. 3. 4. 5." caption="Fig. 1. 2. 3. 4. 5."></Image>
        <h2 id="menu" className="font-bold text-xl dark:text-slate-200">
          MENÚ LATERAL
        </h2>
        <p>
          “Menú Lateral”1, muestra el menú de las siguientes opciones: Cerrar sesión1, Opciones de menú2, Unidades3, Notificaciones4,
          Geoelementos5, Reportes6, Administración7, Telemetría8, Tablero9, Perfil de usuario10 y Acerca de nosotros11. (Fig. 1.7).
        </p>
        <Image alt="Fig. 1.7" caption="Fig. 1.7 Imagen del menu lateral"></Image>
      </div>
    </div>
  );
}

export default Content;
